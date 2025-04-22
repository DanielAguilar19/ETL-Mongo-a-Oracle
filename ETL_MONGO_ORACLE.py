import oracledb
from pymongo import MongoClient
from datetime import datetime
from dateutil.relativedelta import relativedelta

# === Conexiones ===
mongo_client = MongoClient("mongodb://localhost:27017")
mongo_db = mongo_client["test"]
oracle_conn = oracledb.connect(
    user="DW_HOTELES",
    password="Hoteles2024",
    dsn="localhost:1521/ORCL",
)
oracle_cursor = oracle_conn.cursor()

# === FUNCIONES ===
def calcular_grupo_etario(edad):
    if edad < 30:
        return "Joven"
    elif edad < 60:
        return "Adulto"
    else:
        return "Mayor"

def calcular_antiguedad(fecha_ingreso):
    hoy = datetime.now()
    return relativedelta(hoy, fecha_ingreso).years

def categorizar_habitacion(tipo, precio):
    if "suite" in tipo.lower():
        return "Premium"
    elif precio > 200:
        return "Ejecutiva"
    else:
        return "Económica"

def extraer_fecha_desde_objeto(fecha_obj):
    try:
        if isinstance(fecha_obj, datetime):
            return fecha_obj
        elif isinstance(fecha_obj, dict) and "$date" in fecha_obj:
            return datetime.fromisoformat(fecha_obj["$date"].replace("Z", "+00:00"))
        elif isinstance(fecha_obj, str):
            try:
                return datetime.strptime(fecha_obj, "%Y-%m-%d")
            except:
                return datetime.fromisoformat(fecha_obj)
    except:
        return None

try:
    # === CARGA DE TABLAS DIM ===
    for doc in mongo_db.Clientes.find():
        try:
            oracle_cursor.execute("""
                INSERT INTO DIM_CLIENTES 
                (IDCliente, NombreCompleto, Email, Numero, DNI, Edad, Sexo, GrupoEtario)
                VALUES (SEQ_CLIENTES.NEXTVAL, :1, :2, :3, :4, :5, :6, :7)
            """, (
                doc.get("NombreCompleto"),
                doc.get("Email"),
                doc.get("Numero"),
                doc.get("DNI"),
                doc.get("Edad"),
                doc.get("Sexo"),
                calcular_grupo_etario(doc.get("Edad"))
            ))
        except Exception as e:
            print(f"❌ Cliente ID {doc.get('_id')}: {e}")

    for doc in mongo_db.Habitaciones.find():
        try:
            categoria = categorizar_habitacion(doc.get("TipoHab", ""), doc.get("PrecioHab", 0))
            oracle_cursor.execute("""
                INSERT INTO DIM_HABITACIONES
                (IDHabitacion, NumeroHab, TipoHab, PrecioHab, Capacidad, Estado, Categoria)
                VALUES (SEQ_HABITACIONES.NEXTVAL, :1, :2, :3, :4, :5, :6)
            """, (
                doc.get("NumeroHab"),
                doc.get("TipoHab"),
                doc.get("PrecioHab"),
                doc.get("Capacidad"),
                doc.get("Estado"),
                categoria
            ))
        except Exception as e:
            print(f"❌ Habitacion ID {doc.get('_id')}: {e}")

    for doc in mongo_db.Servicios.find():
        try:
            oracle_cursor.execute("""
                INSERT INTO DIM_SERVICIOS
                (IDServicio, NombreServ, PrecioServ, HoraReserva)
                VALUES (SEQ_SERVICIOS.NEXTVAL, :1, :2, :3)
            """, (
                doc.get("NombreServ"),
                doc.get("PrecioServ"),
                doc.get("HoraReserva")
            ))
        except Exception as e:
            print(f"❌ Servicio ID {doc.get('_id')}: {e}")

    for doc in mongo_db.Pago.find():
        try:
            fecha_pago = extraer_fecha_desde_objeto(doc.get("FechaPago"))
            oracle_cursor.execute("""
                INSERT INTO DIM_PAGOS
                (IDPago, MetodoPago, FechaPago, Monto)
                VALUES (SEQ_PAGOS.NEXTVAL, :1, :2, :3)
            """, (
                doc.get("MetodoPago"),
                fecha_pago,
                doc.get("Monto")
            ))
        except Exception as e:
            print(f"❌ Pago ID {doc.get('_id')}: {e}")

    for doc in mongo_db.Empleados.find():
        try:
            fecha_ingreso = extraer_fecha_desde_objeto(doc.get("FechaDelIngreso"))
            antiguedad = calcular_antiguedad(fecha_ingreso)
            oracle_cursor.execute("""
                INSERT INTO DIM_EMPLEADOS
                (IDEmpleado, NombreCompleto, Cargo, Sexo, Edad, Turno, Salario, Bonos, FechaIngreso, AntiguedadAnios)
                VALUES (SEQ_EMPLEADOS.NEXTVAL, :1, :2, :3, :4, :5, :6, :7, :8, :9)
            """, (
                doc.get("NombreCompleto"),
                doc.get("Cargo"),
                doc.get("Sexo"),
                doc.get("Edad"),
                doc.get("Turno"),
                doc.get("Salario"),
                doc.get("Bonos"),
                fecha_ingreso,
                antiguedad
            ))
        except Exception as e:
            print(f"❌ Empleado ID {doc.get('_id')}: {e}")

    # === TABLA DE HECHOS ===
    for doc in mongo_db.Reservacion.find():
        try:
            print("\n📦 Procesando reserva:", doc)

            fecha_inicio = extraer_fecha_desde_objeto(doc.get("FechaInicio"))
            fecha_fin = extraer_fecha_desde_objeto(doc.get("FechaFin"))

            if not fecha_inicio or not fecha_fin:
                raise ValueError("Fechas inválidas")

            oracle_cursor.execute("""
                INSERT INTO DW_HOTELES_RESERVACIONES (
                    IDReservacion, FechaInicio, FechaFin, MontoTotal, EstadoReservacion,
                    IDCliente, IDHabitacion, IDServicio
                ) VALUES (SEQ_RESERVACIONES.NEXTVAL, :1, :2, :3, :4, :5, :6, :7)
            """, (
                fecha_inicio,
                fecha_fin,
                float(doc.get("Monto", 0)),
                doc.get("EstadoResrv", "CONFIRMADA"),
                doc.get("IDCliente"),
                doc.get("IDHab"),
                doc.get("IDServicios")
            ))

            print("✅ Reserva insertada correctamente")

        except Exception as e:
            print(f"❌ Error procesando reserva: {e}")
            print("Documento problemático:", doc)

    oracle_conn.commit()
    print("✅ ETL finalizado correctamente. Cambios guardados.")

except Exception as e:
    print("❌ Error en la ejecución del ETL:", e)
    oracle_conn.rollback()
    print("↩️ Transacción revertida.")

finally:
    oracle_cursor.close()
    oracle_conn.close()
    mongo_client.close()
