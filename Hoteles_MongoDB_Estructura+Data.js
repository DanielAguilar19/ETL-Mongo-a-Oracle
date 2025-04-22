//CLIENTES
db.createCollection("Clientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["NombreCompleto", "Email", "Numero", "DNI", "Edad", "Sexo"],
            properties: {
                NombreCompleto: { bsonType: "string" },
                Email: { bsonType: "string" },
                Numero: { bsonType: "string" },
                DNI: { bsonType: "string" },
                Edad: { bsonType: "int" },
                Sexo: { bsonType: "string", enum: ["M", "F"] }
            }
        }
    }
});

db.Clientes.insertMany([
    {
      "NombreCompleto": "Stephanie Wagner",
      "Email": "donna80@mcdonald.com",
      "Numero": "+1-993-873-2429x1795",
      "DNI": 83830051,
      "Edad": 33,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Jennifer Martinez",
      "Email": "kathleenalvarez@yahoo.com",
      "Numero": "514.898.2336x447",
      "DNI": 69902989,
      "Edad": 61,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Kristie Smith",
      "Email": "maria45@yahoo.com",
      "Numero": "+1-971-752-4696",
      "DNI": 6138384,
      "Edad": 42,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Matthew Leon",
      "Email": "thomas16@hotmail.com",
      "Numero": "(700)706-2421",
      "DNI": 14802623,
      "Edad": 71,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Robert Strong",
      "Email": "virginiamiller@skinner-lopez.com",
      "Numero": "728.382.7694x12162",
      "DNI": 87535935,
      "Edad": 45,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Anna Hernandez",
      "Email": "wheelerelizabeth@martin.biz",
      "Numero": "808.086.5450",
      "DNI": 35606177,
      "Edad": 53,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Matthew Wilcox",
      "Email": "abigail09@foster-petty.org",
      "Numero": "001-202-901-8218x89598",
      "DNI": 22325700,
      "Edad": 24,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "James Solis",
      "Email": "ryan55@thomas.com",
      "Numero": "001-296-775-2487x971",
      "DNI": 974921,
      "Edad": 20,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Joe White",
      "Email": "brandy69@haynes.com",
      "Numero": "001-677-742-9622x05118",
      "DNI": 34787390,
      "Edad": 47,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Veronica Haas",
      "Email": "ohinton@yahoo.com",
      "Numero": "612-209-6980x83016",
      "DNI": 49260670,
      "Edad": 48,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Tina Mccall",
      "Email": "jordantiffany@andrews.com",
      "Numero": "(237)264-9281x20742",
      "DNI": 61832493,
      "Edad": 80,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Christine Moore",
      "Email": "gregorytaylor@hotmail.com",
      "Numero": "031.266.3702",
      "DNI": 20408543,
      "Edad": 75,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Julie Downs",
      "Email": "ytucker@thompson-russell.com",
      "Numero": "(348)889-2390",
      "DNI": 45583212,
      "Edad": 32,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Ralph Boyd",
      "Email": "cookkayla@hotmail.com",
      "Numero": "001-383-741-5357",
      "DNI": 40464083,
      "Edad": 42,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Tamara Henry",
      "Email": "stacywolf@johnson.com",
      "Numero": "(811)347-9100",
      "DNI": 29533119,
      "Edad": 29,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Stephanie Wilcox",
      "Email": "aallen@hotmail.com",
      "Numero": "633-560-6440x9306",
      "DNI": 46644839,
      "Edad": 43,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Angela Herman",
      "Email": "dsmith@gmail.com",
      "Numero": "252-654-4917x87847",
      "DNI": 39495038,
      "Edad": 73,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Jose Rowland",
      "Email": "vgriffin@yahoo.com",
      "Numero": "(174)710-8048",
      "DNI": 33077683,
      "Edad": 71,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Heather Burnett",
      "Email": "phuber@hotmail.com",
      "Numero": "565.134.3719",
      "DNI": 37751915,
      "Edad": 18,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Benjamin Lopez",
      "Email": "halljoseph@hotmail.com",
      "Numero": "+1-944-044-7886x765",
      "DNI": 98434023,
      "Edad": 66,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Clinton Cook",
      "Email": "nfoster@gmail.com",
      "Numero": "271.614.6054x920",
      "DNI": 52606734,
      "Edad": 76,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Tammy Juarez",
      "Email": "ryanthompson@rangel.info",
      "Numero": "(845)536-5900x423",
      "DNI": 88058974,
      "Edad": 46,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Jennifer Reynolds",
      "Email": "edwin55@smith.com",
      "Numero": "+1-759-903-6238",
      "DNI": 48927744,
      "Edad": 54,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Daniel Dixon",
      "Email": "colleenlee@yahoo.com",
      "Numero": "(311)602-8743x71520",
      "DNI": 87660604,
      "Edad": 79,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Lisa Thomas",
      "Email": "jane27@chapman.com",
      "Numero": "137.114.9447x504",
      "DNI": 2209969,
      "Edad": 53,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Christina Carpenter",
      "Email": "evanswillie@gmail.com",
      "Numero": "074-826-7303x27178",
      "DNI": 88329475,
      "Edad": 31,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Lisa Jones",
      "Email": "rbrown@burns.info",
      "Numero": "9890160673",
      "DNI": 85616436,
      "Edad": 35,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Jonathan Moran",
      "Email": "harrisjoshua@gmail.com",
      "Numero": "(974)170-3384",
      "DNI": 91650938,
      "Edad": 51,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "John Williams",
      "Email": "andreawelch@copeland.com",
      "Numero": "(114)785-0594x81481",
      "DNI": 91509750,
      "Edad": 39,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Kyle Dyer",
      "Email": "jermaine04@galvan-ford.org",
      "Numero": "001-169-757-4321",
      "DNI": 99590045,
      "Edad": 70,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Amanda Sampson",
      "Email": "dmclaughlin@yahoo.com",
      "Numero": "(024)169-2229",
      "DNI": 15213191,
      "Edad": 29,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Michael Brown",
      "Email": "amanda03@hotmail.com",
      "Numero": "001-394-031-7364x723",
      "DNI": 79286987,
      "Edad": 41,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Brooke Melton",
      "Email": "josephmalone@hotmail.com",
      "Numero": "(998)547-1746",
      "DNI": 19350751,
      "Edad": 69,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Danielle Peterson",
      "Email": "jamie79@yahoo.com",
      "Numero": "905-136-8523x465",
      "DNI": 82668792,
      "Edad": 31,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Kenneth Young",
      "Email": "sheilagallagher@taylor.com",
      "Numero": "(362)489-6638x66168",
      "DNI": 78106143,
      "Edad": 71,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "John Martinez",
      "Email": "christopher59@knight.net",
      "Numero": "601.422.0848x257",
      "DNI": 42967582,
      "Edad": 48,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Lindsay Mata",
      "Email": "andersondustin@bullock-gardner.com",
      "Numero": "239.733.5291",
      "DNI": 1707270,
      "Edad": 41,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Anna Barnett",
      "Email": "dnelson@hotmail.com",
      "Numero": "+1-033-531-6561x505",
      "DNI": 7548104,
      "Edad": 56,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Edward Gregory",
      "Email": "romerocrystal@hotmail.com",
      "Numero": "452-479-4097x2894",
      "DNI": 24241194,
      "Edad": 62,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Jose Wood",
      "Email": "davisveronica@hotmail.com",
      "Numero": "+1-930-809-4023x281",
      "DNI": 2866625,
      "Edad": 22,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Daniel Black",
      "Email": "guyjohnson@williams.com",
      "Numero": "556.432.5256x801",
      "DNI": 38555764,
      "Edad": 61,
      "Sexo": "M"
    },
    {
      "NombreCompleto": "Rebecca Hall",
      "Email": "qstone@hotmail.com",
      "Numero": "6751994393",
      "DNI": 24996037,
      "Edad": 41,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Ronald Garcia",
      "Email": "curtismata@conley.com",
      "Numero": "+1-780-497-7100x014",
      "DNI": 1997216,
      "Edad": 64,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Todd Smith",
      "Email": "rgreen@webster.org",
      "Numero": "556-061-8748x7712",
      "DNI": 82089938,
      "Edad": 29,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Marvin Mosley",
      "Email": "jessica44@norman.biz",
      "Numero": "+1-226-761-1834x708",
      "DNI": 95367565,
      "Edad": 23,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Michael Tucker",
      "Email": "osborneannette@gmail.com",
      "Numero": "845.557.0253",
      "DNI": 76535338,
      "Edad": 38,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Leah Evans",
      "Email": "jaytaylor@mccarthy.info",
      "Numero": "397.338.6422x637",
      "DNI": 43593526,
      "Edad": 74,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Nicholas Eaton",
      "Email": "kellienglish@yahoo.com",
      "Numero": "001-646-808-6875x9227",
      "DNI": 91593397,
      "Edad": 27,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Caitlin Hernandez",
      "Email": "sandovaledward@tran-salazar.org",
      "Numero": "(112)235-0266x434",
      "DNI": 68328005,
      "Edad": 72,
      "Sexo": "F"
    },
    {
      "NombreCompleto": "Heather Mcclain",
      "Email": "eshields@wolfe.com",
      "Numero": "350.589.4980x837",
      "DNI": 16896177,
      "Edad": 71,
      "Sexo": "F"
    }
  ]);

//HABITACIONES
db.createCollection("Habitaciones", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["NumeroHab", "TipoHab", "PrecioHab", "Capacidad", "Descripción", "Estado"],
            properties: {
                NumeroHab: { bsonType: "int" },
                TipoHab: { bsonType: "string" },
                PrecioHab: { bsonType: "double" },
                Capacidad: { bsonType: "int" },
                Descripción: { bsonType: "string" },
                Estado: { bsonType: "string" }
            }
        }
    }
});

db.Habitaciones.insertMany([
    {
      "NumeroHab": 1,
      "TipoHab": "Doble",
      "PrecioHab": 278,
      "Capacidad": 1,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 2,
      "TipoHab": "Individual",
      "PrecioHab": 313,
      "Capacidad": 1,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 3,
      "TipoHab": "Suite",
      "PrecioHab": 169,
      "Capacidad": 1,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 4,
      "TipoHab": "Matrimonial",
      "PrecioHab": 324,
      "Capacidad": 4,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 5,
      "TipoHab": "Matrimonial",
      "PrecioHab": 180,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 6,
      "TipoHab": "Suite",
      "PrecioHab": 272,
      "Capacidad": 3,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 7,
      "TipoHab": "Matrimonial",
      "PrecioHab": 263,
      "Capacidad": 3,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 8,
      "TipoHab": "Suite",
      "PrecioHab": 232,
      "Capacidad": 4,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 9,
      "TipoHab": "Doble",
      "PrecioHab": 132,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 10,
      "TipoHab": "Suite",
      "PrecioHab": 258,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 11,
      "TipoHab": "Doble",
      "PrecioHab": 341,
      "Capacidad": 1,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 12,
      "TipoHab": "Doble",
      "PrecioHab": 112,
      "Capacidad": 1,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 13,
      "TipoHab": "Individual",
      "PrecioHab": 64,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 14,
      "TipoHab": "Suite",
      "PrecioHab": 169,
      "Capacidad": 1,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 15,
      "TipoHab": "Doble",
      "PrecioHab": 393,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 16,
      "TipoHab": "Suite",
      "PrecioHab": 94,
      "Capacidad": 4,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 17,
      "TipoHab": "Matrimonial",
      "PrecioHab": 53,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 18,
      "TipoHab": "Suite",
      "PrecioHab": 291,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 19,
      "TipoHab": "Doble",
      "PrecioHab": 204,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 20,
      "TipoHab": "Individual",
      "PrecioHab": 305,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 21,
      "TipoHab": "Matrimonial",
      "PrecioHab": 288,
      "Capacidad": 3,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 22,
      "TipoHab": "Doble",
      "PrecioHab": 72,
      "Capacidad": 1,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 23,
      "TipoHab": "Suite",
      "PrecioHab": 167,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 24,
      "TipoHab": "Suite",
      "PrecioHab": 354,
      "Capacidad": 4,
      "Estado": "Mantenimiento"
    },
    {
      "NumeroHab": 25,
      "TipoHab": "Individual",
      "PrecioHab": 336,
      "Capacidad": 2,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 26,
      "TipoHab": "Individual",
      "PrecioHab": 400,
      "Capacidad": 4,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 27,
      "TipoHab": "Matrimonial",
      "PrecioHab": 54,
      "Capacidad": 2,
      "Estado": "Disponible"
    },
    {
      "NumeroHab": 28,
      "TipoHab": "Individual",
      "PrecioHab": 68,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 29,
      "TipoHab": "Individual",
      "PrecioHab": 343,
      "Capacidad": 3,
      "Estado": "Ocupada"
    },
    {
      "NumeroHab": 30,
      "TipoHab": "Individual",
      "PrecioHab": 72,
      "Capacidad": 4,
      "Estado": "Ocupada"
    }
  ]);


//SERVICIOS
db.createCollection("Servicios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["NombreServ", "PrecioServ", "Descripción", "HoraReserva"],
            properties: {
                NombreServ: { bsonType: "string" },
                PrecioServ: { bsonType: "double" },
                Descripción: { bsonType: "string" },
                HoraReserva: { bsonType: "string" }
            }
        }
    }
});

db.Servicios.insertMany([
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "13:00"
    },
    {
      "NombreServ": "Acceso a Piscina",
      "PrecioServ": 10,
      "HoraReserva": "15:00"
    },
    {
      "NombreServ": "Masaje Sueco",
      "PrecioServ": 60,
      "HoraReserva": "18:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "11:00"
    },
    {
      "NombreServ": "Masaje Sueco",
      "PrecioServ": 60,
      "HoraReserva": "8:00"
    },
    {
      "NombreServ": "Masaje Sueco",
      "PrecioServ": 60,
      "HoraReserva": "11:00"
    },
    {
      "NombreServ": "Cena Rom\u00e1ntica",
      "PrecioServ": 50,
      "HoraReserva": "20:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "12:00"
    },
    {
      "NombreServ": "Acceso a Piscina",
      "PrecioServ": 10,
      "HoraReserva": "15:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "20:00"
    },
    {
      "NombreServ": "Acceso a Piscina",
      "PrecioServ": 10,
      "HoraReserva": "10:00"
    },
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "8:00"
    },
    {
      "NombreServ": "Masaje Sueco",
      "PrecioServ": 60,
      "HoraReserva": "15:00"
    },
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "19:00"
    },
    {
      "NombreServ": "Masaje Sueco",
      "PrecioServ": 60,
      "HoraReserva": "14:00"
    },
    {
      "NombreServ": "Cena Rom\u00e1ntica",
      "PrecioServ": 50,
      "HoraReserva": "9:00"
    },
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "11:00"
    },
    {
      "NombreServ": "Spa Relax Total",
      "PrecioServ": 80,
      "HoraReserva": "18:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "11:00"
    },
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "12:00"
    },
    {
      "NombreServ": "Cena Rom\u00e1ntica",
      "PrecioServ": 50,
      "HoraReserva": "18:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "20:00"
    },
    {
      "NombreServ": "Cena Rom\u00e1ntica",
      "PrecioServ": 50,
      "HoraReserva": "9:00"
    },
    {
      "NombreServ": "Cena Rom\u00e1ntica",
      "PrecioServ": 50,
      "HoraReserva": "11:00"
    },
    {
      "NombreServ": "Tour Guiado",
      "PrecioServ": 30,
      "HoraReserva": "13:00"
    },
    {
      "NombreServ": "Spa Relax Total",
      "PrecioServ": 80,
      "HoraReserva": "19:00"
    },
    {
      "NombreServ": "Spa Relax Total",
      "PrecioServ": 80,
      "HoraReserva": "9:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "8:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "16:00"
    },
    {
      "NombreServ": "Desayuno Buffet",
      "PrecioServ": 15,
      "HoraReserva": "14:00"
    }
  ]);


//EMPLEADOS
db.createCollection("Empleados", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["NombreCompleto", "Email", "Numero", "DNI", "Edad", "Sexo", "Cargo", "Salario", "Turno", "Bonos", "FechaDelIngreso"],
            properties: {
                NombreCompleto: { bsonType: "string" },
                Email: { bsonType: "string" },
                Numero: { bsonType: "string" },
                DNI: { bsonType: "string" },
                Edad: { bsonType: "int" },
                Sexo: { bsonType: "string", enum: ["M", "F"] },
                Cargo: { bsonType: "string" },
                Salario: { bsonType: "double" },
                Turno: { bsonType: "string" },
                Bonos: { bsonType: "double" },
                FechaDelIngreso: { bsonType: "date" }
            }
        }
    }
});
db.Empleados.insertMany([
    {
      "NombreCompleto": "Amanda Kennedy",
      "Cargo": "Recepcionista",
      "Sexo": "F",
      "Edad": 65,
      "Turno": "Ma\u00f1ana",
      "Salario": 954.47,
      "Bonos": 105.44,
      "FechaDelIngreso": "2017-11-27"
    },
    {
      "NombreCompleto": "Michael Ramos",
      "Cargo": "Gerente",
      "Sexo": "M",
      "Edad": 52,
      "Turno": "Tarde",
      "Salario": 1048.71,
      "Bonos": 277.71,
      "FechaDelIngreso": "2023-01-05"
    },
    {
      "NombreCompleto": "Rachel Johnson",
      "Cargo": "Conserje",
      "Sexo": "F",
      "Edad": 34,
      "Turno": "Ma\u00f1ana",
      "Salario": 739.54,
      "Bonos": 73.6,
      "FechaDelIngreso": "2018-08-23"
    },
    {
      "NombreCompleto": "Lindsay Anderson",
      "Cargo": "Recepcionista",
      "Sexo": "F",
      "Edad": 44,
      "Turno": "Tarde",
      "Salario": 703.06,
      "Bonos": 236.26,
      "FechaDelIngreso": "2024-03-21"
    },
    {
      "NombreCompleto": "Anthony Hatfield",
      "Cargo": "Recepcionista",
      "Sexo": "M",
      "Edad": 38,
      "Turno": "Noche",
      "Salario": 904.06,
      "Bonos": 83.37,
      "FechaDelIngreso": "2023-06-17"
    },
    {
      "NombreCompleto": "Ralph Fernandez",
      "Cargo": "Chef",
      "Sexo": "M",
      "Edad": 49,
      "Turno": "Tarde",
      "Salario": 739.32,
      "Bonos": 130.91,
      "FechaDelIngreso": "2022-01-15"
    },
    {
      "NombreCompleto": "Stacy Daniels",
      "Cargo": "Limpieza",
      "Sexo": "F",
      "Edad": 49,
      "Turno": "Noche",
      "Salario": 701.58,
      "Bonos": 162.34,
      "FechaDelIngreso": "2019-08-14"
    },
    {
      "NombreCompleto": "Jose Guzman",
      "Cargo": "Conserje",
      "Sexo": "M",
      "Edad": 51,
      "Turno": "Tarde",
      "Salario": 552.43,
      "Bonos": 63.13,
      "FechaDelIngreso": "2018-12-09"
    },
    {
      "NombreCompleto": "Calvin Lee",
      "Cargo": "Chef",
      "Sexo": "M",
      "Edad": 30,
      "Turno": "Noche",
      "Salario": 906.01,
      "Bonos": 160.33,
      "FechaDelIngreso": "2024-02-03"
    },
    {
      "NombreCompleto": "Laurie Thomas",
      "Cargo": "Recepcionista",
      "Sexo": "M",
      "Edad": 50,
      "Turno": "Ma\u00f1ana",
      "Salario": 648.63,
      "Bonos": 77.73,
      "FechaDelIngreso": "2018-06-07"
    },
    {
      "NombreCompleto": "Hannah Anderson",
      "Cargo": "Seguridad",
      "Sexo": "F",
      "Edad": 39,
      "Turno": "Tarde",
      "Salario": 942.43,
      "Bonos": 273.55,
      "FechaDelIngreso": "2022-05-09"
    },
    {
      "NombreCompleto": "Anthony Garcia",
      "Cargo": "Conserje",
      "Sexo": "F",
      "Edad": 65,
      "Turno": "Ma\u00f1ana",
      "Salario": 737.69,
      "Bonos": 278.31,
      "FechaDelIngreso": "2018-09-24"
    },
    {
      "NombreCompleto": "Michelle Scott",
      "Cargo": "Seguridad",
      "Sexo": "F",
      "Edad": 31,
      "Turno": "Ma\u00f1ana",
      "Salario": 602.48,
      "Bonos": 135.93,
      "FechaDelIngreso": "2020-01-11"
    },
    {
      "NombreCompleto": "David Mcguire",
      "Cargo": "Seguridad",
      "Sexo": "F",
      "Edad": 61,
      "Turno": "Tarde",
      "Salario": 754.13,
      "Bonos": 291.55,
      "FechaDelIngreso": "2017-08-10"
    },
    {
      "NombreCompleto": "Zachary Olsen",
      "Cargo": "Conserje",
      "Sexo": "F",
      "Edad": 37,
      "Turno": "Tarde",
      "Salario": 1480.32,
      "Bonos": 113.9,
      "FechaDelIngreso": "2021-10-07"
    },
    {
      "NombreCompleto": "Christopher Stewart",
      "Cargo": "Conserje",
      "Sexo": "F",
      "Edad": 53,
      "Turno": "Noche",
      "Salario": 1365.43,
      "Bonos": 182.51,
      "FechaDelIngreso": "2016-11-19"
    },
    {
      "NombreCompleto": "Diane Bell",
      "Cargo": "Chef",
      "Sexo": "M",
      "Edad": 61,
      "Turno": "Tarde",
      "Salario": 576.17,
      "Bonos": 288.1,
      "FechaDelIngreso": "2020-06-27"
    },
    {
      "NombreCompleto": "Daniel Keller",
      "Cargo": "Gerente",
      "Sexo": "M",
      "Edad": 22,
      "Turno": "Ma\u00f1ana",
      "Salario": 1133.06,
      "Bonos": 205.08,
      "FechaDelIngreso": "2022-11-17"
    },
    {
      "NombreCompleto": "Renee Walsh",
      "Cargo": "Conserje",
      "Sexo": "M",
      "Edad": 40,
      "Turno": "Noche",
      "Salario": 935.04,
      "Bonos": 151.34,
      "FechaDelIngreso": "2017-09-18"
    },
    {
      "NombreCompleto": "Christopher Hernandez Jr.",
      "Cargo": "Chef",
      "Sexo": "F",
      "Edad": 38,
      "Turno": "Tarde",
      "Salario": 814.87,
      "Bonos": 132.06,
      "FechaDelIngreso": "2017-05-31"
    }
  ]);


//PAGO
db.createCollection("Pago", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["MetodoPago", "FechaPago", "Monto", "IDReservación"],
            properties: {
                MetodoPago: { bsonType: "string" },
                FechaPago: { bsonType: "date" },
                Monto: { bsonType: "double" },
                IDReservación: { bsonType: "int" }
            }
        }
    }
});

db.Pago.insertMany([
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-06-30",
      "Monto": 782
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2023-09-27",
      "Monto": 609
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-01-06",
      "Monto": 316
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2023-01-01",
      "Monto": 799
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-11-03",
      "Monto": 100
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2023-10-13",
      "Monto": 212
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2025-04-23",
      "Monto": 368
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-10-04",
      "Monto": 132
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-10-03",
      "Monto": 155
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2023-02-07",
      "Monto": 830
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2024-02-09",
      "Monto": 354
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-10-29",
      "Monto": 878
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2025-06-01",
      "Monto": 249
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2023-07-09",
      "Monto": 681
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-07-12",
      "Monto": 299
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2025-02-07",
      "Monto": 292
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-04-23",
      "Monto": 153
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2024-02-07",
      "Monto": 910
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-02-09",
      "Monto": 367
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2024-11-21",
      "Monto": 841
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2025-02-06",
      "Monto": 193
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-07-19",
      "Monto": 772
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-09-18",
      "Monto": 837
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2024-05-23",
      "Monto": 370
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2024-10-05",
      "Monto": 401
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2025-02-18",
      "Monto": 575
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-08-11",
      "Monto": 832
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-11-23",
      "Monto": 956
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2025-06-08",
      "Monto": 735
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-08-04",
      "Monto": 475
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-09-17",
      "Monto": 195
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2022-08-12",
      "Monto": 986
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2025-05-07",
      "Monto": 491
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2023-03-05",
      "Monto": 600
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2024-09-08",
      "Monto": 961
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2025-02-25",
      "Monto": 559
    },
    {
      "MetodoPago": "Efectivo",
      "FechaPago": "2022-11-26",
      "Monto": 418
    },
    {
      "MetodoPago": "Transferencia",
      "FechaPago": "2022-12-08",
      "Monto": 573
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2024-04-21",
      "Monto": 978
    },
    {
      "MetodoPago": "Tarjeta",
      "FechaPago": "2024-09-19",
      "Monto": 624
    }
  ]);


//RESERVACION
db.createCollection("Reservacion", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IDHab", "IDServicios", "IDCliente", "FechaInicio", "FechaFin", "Monto", "EstadoResrv"],
            properties: {
                IDHab: { bsonType: "int" },
                IDServicios: { bsonType: "int" },
                IDCliente: { bsonType: "int" },
                FechaInicio: { bsonType: "date" },
                FechaFin: { bsonType: "date" },
                Monto: { bsonType: "double" },
                EstadoResrv: { bsonType: "string" }
            }
        }
    }
});
//
db.Reservacion.insertMany([
    {
      "IDHab": 20,
      "IDServicios": 6,
      "IDCliente": 34,
      "FechaInicio": "2025-03-12T02:24:46.722577",
      "FechaFin": "2025-03-16T02:24:46.722577",
      "Monto": 393.41,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 5,
      "IDServicios": 11,
      "IDCliente": 4,
      "FechaInicio": "2024-09-26T02:24:46.722597",
      "FechaFin": "2024-10-03T02:24:46.722597",
      "Monto": 711.64,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 19,
      "IDServicios": 8,
      "IDCliente": 12,
      "FechaInicio": "2024-11-06T02:24:46.722608",
      "FechaFin": "2024-11-07T02:24:46.722608",
      "Monto": 163.97,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 13,
      "IDServicios": 18,
      "IDCliente": 28,
      "FechaInicio": "2025-04-11T02:24:46.722618",
      "FechaFin": "2025-04-13T02:24:46.722618",
      "Monto": 211.01,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 21,
      "IDServicios": 19,
      "IDCliente": 34,
      "FechaInicio": "2025-02-01T02:24:46.722627",
      "FechaFin": "2025-02-06T02:24:46.722627",
      "Monto": 670.79,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 21,
      "IDServicios": 15,
      "IDCliente": 6,
      "FechaInicio": "2024-08-18T02:24:46.722636",
      "FechaFin": "2024-08-21T02:24:46.722636",
      "Monto": 559.1,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 26,
      "IDServicios": 18,
      "IDCliente": 20,
      "FechaInicio": "2024-08-11T02:24:46.722646",
      "FechaFin": "2024-08-16T02:24:46.722646",
      "Monto": 657.44,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 20,
      "IDServicios": 19,
      "IDCliente": 19,
      "FechaInicio": "2024-10-25T02:24:46.722656",
      "FechaFin": "2024-10-28T02:24:46.722656",
      "Monto": 625.58,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 22,
      "IDServicios": 12,
      "IDCliente": 1,
      "FechaInicio": "2024-08-16T02:24:46.722667",
      "FechaFin": "2024-08-23T02:24:46.722667",
      "Monto": 287.14,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 27,
      "IDServicios": 19,
      "IDCliente": 44,
      "FechaInicio": "2024-07-10T02:24:46.722677",
      "FechaFin": "2024-07-13T02:24:46.722677",
      "Monto": 978.78,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 27,
      "IDServicios": 18,
      "IDCliente": 11,
      "FechaInicio": "2024-10-22T02:24:46.722701",
      "FechaFin": "2024-10-25T02:24:46.722701",
      "Monto": 475.55,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 27,
      "IDServicios": 14,
      "IDCliente": 47,
      "FechaInicio": "2025-01-14T02:24:46.722710",
      "FechaFin": "2025-01-15T02:24:46.722710",
      "Monto": 449.42,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 16,
      "IDServicios": 17,
      "IDCliente": 20,
      "FechaInicio": "2024-07-16T02:24:46.722719",
      "FechaFin": "2024-07-19T02:24:46.722719",
      "Monto": 711.26,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 22,
      "IDServicios": 15,
      "IDCliente": 31,
      "FechaInicio": "2024-08-20T02:24:46.722728",
      "FechaFin": "2024-08-23T02:24:46.722728",
      "Monto": 669.59,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 18,
      "IDServicios": 6,
      "IDCliente": 18,
      "FechaInicio": "2024-10-22T02:24:46.722737",
      "FechaFin": "2024-10-29T02:24:46.722737",
      "Monto": 376.3,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 21,
      "IDServicios": 11,
      "IDCliente": 29,
      "FechaInicio": "2024-07-23T02:24:46.722746",
      "FechaFin": "2024-07-29T02:24:46.722746",
      "Monto": 936.89,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 16,
      "IDServicios": 6,
      "IDCliente": 28,
      "FechaInicio": "2025-01-04T02:24:46.722755",
      "FechaFin": "2025-01-10T02:24:46.722755",
      "Monto": 522.53,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 30,
      "IDServicios": 14,
      "IDCliente": 26,
      "FechaInicio": "2024-11-21T02:24:46.722764",
      "FechaFin": "2024-11-23T02:24:46.722764",
      "Monto": 388.85,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 11,
      "IDServicios": 16,
      "IDCliente": 10,
      "FechaInicio": "2024-12-04T02:24:46.722773",
      "FechaFin": "2024-12-06T02:24:46.722773",
      "Monto": 453.64,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 9,
      "IDServicios": 10,
      "IDCliente": 9,
      "FechaInicio": "2024-08-05T02:24:46.722782",
      "FechaFin": "2024-08-06T02:24:46.722782",
      "Monto": 854.11,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 18,
      "IDServicios": 6,
      "IDCliente": 33,
      "FechaInicio": "2024-11-03T02:24:46.722790",
      "FechaFin": "2024-11-09T02:24:46.722790",
      "Monto": 545.69,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 20,
      "IDServicios": 15,
      "IDCliente": 21,
      "FechaInicio": "2025-02-24T02:24:46.722800",
      "FechaFin": "2025-03-02T02:24:46.722800",
      "Monto": 500.6,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 5,
      "IDServicios": 20,
      "IDCliente": 8,
      "FechaInicio": "2024-09-23T02:24:46.722809",
      "FechaFin": "2024-09-26T02:24:46.722809",
      "Monto": 797.9,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 22,
      "IDServicios": 2,
      "IDCliente": 15,
      "FechaInicio": "2024-12-27T02:24:46.722817",
      "FechaFin": "2025-01-01T02:24:46.722817",
      "Monto": 365.4,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 21,
      "IDServicios": 8,
      "IDCliente": 22,
      "FechaInicio": "2024-07-10T02:24:46.722826",
      "FechaFin": "2024-07-15T02:24:46.722826",
      "Monto": 625.58,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 26,
      "IDServicios": 9,
      "IDCliente": 28,
      "FechaInicio": "2024-12-01T02:24:46.722835",
      "FechaFin": "2024-12-04T02:24:46.722835",
      "Monto": 345.85,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 25,
      "IDServicios": 4,
      "IDCliente": 35,
      "FechaInicio": "2025-01-27T02:24:46.722844",
      "FechaFin": "2025-01-30T02:24:46.722844",
      "Monto": 783.13,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 12,
      "IDServicios": 20,
      "IDCliente": 10,
      "FechaInicio": "2025-03-20T02:24:46.722852",
      "FechaFin": "2025-03-27T02:24:46.722852",
      "Monto": 984.5,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 14,
      "IDServicios": 9,
      "IDCliente": 13,
      "FechaInicio": "2024-10-11T02:24:46.722861",
      "FechaFin": "2024-10-18T02:24:46.722861",
      "Monto": 247.95,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 5,
      "IDServicios": 15,
      "IDCliente": 11,
      "FechaInicio": "2024-09-29T02:24:46.722869",
      "FechaFin": "2024-10-03T02:24:46.722869",
      "Monto": 196.47,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 21,
      "IDServicios": 1,
      "IDCliente": 36,
      "FechaInicio": "2025-03-17T02:24:46.722878",
      "FechaFin": "2025-03-22T02:24:46.722878",
      "Monto": 197.27,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 5,
      "IDServicios": 2,
      "IDCliente": 26,
      "FechaInicio": "2024-07-23T02:24:46.722888",
      "FechaFin": "2024-07-25T02:24:46.722888",
      "Monto": 775.22,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 20,
      "IDServicios": 15,
      "IDCliente": 31,
      "FechaInicio": "2025-01-30T02:24:46.722896",
      "FechaFin": "2025-02-04T02:24:46.722896",
      "Monto": 150.87,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 24,
      "IDServicios": 1,
      "IDCliente": 34,
      "FechaInicio": "2025-02-09T02:24:46.722905",
      "FechaFin": "2025-02-16T02:24:46.722905",
      "Monto": 242.9,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 19,
      "IDServicios": 3,
      "IDCliente": 16,
      "FechaInicio": "2024-12-06T02:24:46.722914",
      "FechaFin": "2024-12-11T02:24:46.722914",
      "Monto": 344.95,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 6,
      "IDServicios": 4,
      "IDCliente": 39,
      "FechaInicio": "2025-02-25T02:24:46.722925",
      "FechaFin": "2025-02-28T02:24:46.722925",
      "Monto": 780.07,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 2,
      "IDServicios": 4,
      "IDCliente": 6,
      "FechaInicio": "2024-06-29T02:24:46.722940",
      "FechaFin": "2024-07-04T02:24:46.722940",
      "Monto": 575.31,
      "EstadoResrv": "Confirmada"
    },
    {
      "IDHab": 7,
      "IDServicios": 4,
      "IDCliente": 31,
      "FechaInicio": "2024-10-20T02:24:46.722957",
      "FechaFin": "2024-10-24T02:24:46.722957",
      "Monto": 961.45,
      "EstadoResrv": "Finalizada"
    },
    {
      "IDHab": 26,
      "IDServicios": 20,
      "IDCliente": 32,
      "FechaInicio": "2024-07-16T02:24:46.722972",
      "FechaFin": "2024-07-19T02:24:46.722972",
      "Monto": 293.72,
      "EstadoResrv": "Cancelada"
    },
    {
      "IDHab": 30,
      "IDServicios": 19,
      "IDCliente": 44,
      "FechaInicio": "2024-08-25T02:24:46.722981",
      "FechaFin": "2024-08-26T02:24:46.722981",
      "Monto": 990.46,
      "EstadoResrv": "Confirmada"
    }
  ]);


//FACTURA
db.createCollection("Factura", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IDCliente", "IDReserva", "MontoTotal", "fechaDeEmisión", "IDPago"],
            properties: {
                IDCliente: { bsonType: "int" },
                IDReserva: { bsonType: "int" },
                MontoTotal: { bsonType: "double" },
                fechaDeEmisión: { bsonType: "date" },
                IDPago: { bsonType: "int" }
            }
        }
    }
});

db.Factura.insertMany([
    {
      "IDCliente": 12,
      "IDPago": 37,
      "FechaFactura": "2025-07-04",
      "TotalFactura": 952,
      "Descripcion": "Enough clear student member."
    },
    {
      "IDCliente": 5,
      "IDPago": 34,
      "FechaFactura": "2024-08-01",
      "TotalFactura": 598,
      "Descripcion": "Move the American research majority where."
    },
    {
      "IDCliente": 23,
      "IDPago": 11,
      "FechaFactura": "2025-07-07",
      "TotalFactura": 537,
      "Descripcion": "Name accept early return decision possible popular."
    },
    {
      "IDCliente": 20,
      "IDPago": 15,
      "FechaFactura": "2023-10-23",
      "TotalFactura": 641,
      "Descripcion": "Investment know less deal."
    },
    {
      "IDCliente": 3,
      "IDPago": 15,
      "FechaFactura": "2024-11-17",
      "TotalFactura": 266,
      "Descripcion": "Social its above professional within part."
    },
    {
      "IDCliente": 24,
      "IDPago": 18,
      "FechaFactura": "2025-02-06",
      "TotalFactura": 643,
      "Descripcion": "Pass manager education."
    },
    {
      "IDCliente": 10,
      "IDPago": 10,
      "FechaFactura": "2022-11-10",
      "TotalFactura": 211,
      "Descripcion": "Firm politics scientist city order like put."
    },
    {
      "IDCliente": 49,
      "IDPago": 33,
      "FechaFactura": "2024-03-28",
      "TotalFactura": 895,
      "Descripcion": "Enter president budget movement store among later."
    },
    {
      "IDCliente": 17,
      "IDPago": 30,
      "FechaFactura": "2025-04-09",
      "TotalFactura": 368,
      "Descripcion": "Establish give this attention deep half."
    },
    {
      "IDCliente": 8,
      "IDPago": 20,
      "FechaFactura": "2023-07-27",
      "TotalFactura": 789,
      "Descripcion": "Seat first along focus apply unit something."
    },
    {
      "IDCliente": 7,
      "IDPago": 37,
      "FechaFactura": "2025-05-11",
      "TotalFactura": 876,
      "Descripcion": "Parent book nothing stay coach."
    },
    {
      "IDCliente": 9,
      "IDPago": 28,
      "FechaFactura": "2023-12-17",
      "TotalFactura": 913,
      "Descripcion": "Also third certainly you check."
    },
    {
      "IDCliente": 43,
      "IDPago": 31,
      "FechaFactura": "2024-09-21",
      "TotalFactura": 752,
      "Descripcion": "Fast cell during gun fast whatever."
    },
    {
      "IDCliente": 17,
      "IDPago": 18,
      "FechaFactura": "2024-03-07",
      "TotalFactura": 201,
      "Descripcion": "Book by at whatever show him."
    },
    {
      "IDCliente": 42,
      "IDPago": 23,
      "FechaFactura": "2023-01-13",
      "TotalFactura": 789,
      "Descripcion": "Current property sure wish risk."
    },
    {
      "IDCliente": 4,
      "IDPago": 16,
      "FechaFactura": "2024-08-03",
      "TotalFactura": 832,
      "Descripcion": "Option tough school contain focus election."
    },
    {
      "IDCliente": 8,
      "IDPago": 18,
      "FechaFactura": "2023-08-16",
      "TotalFactura": 505,
      "Descripcion": "Player less agent surface today simply."
    },
    {
      "IDCliente": 14,
      "IDPago": 29,
      "FechaFactura": "2023-10-23",
      "TotalFactura": 237,
      "Descripcion": "Book tell paper someone establish."
    },
    {
      "IDCliente": 20,
      "IDPago": 29,
      "FechaFactura": "2022-11-04",
      "TotalFactura": 538,
      "Descripcion": "Mention price carry large east north."
    },
    {
      "IDCliente": 40,
      "IDPago": 22,
      "FechaFactura": "2024-02-10",
      "TotalFactura": 404,
      "Descripcion": "Yet summer week machine form rest everyone."
    },
    {
      "IDCliente": 42,
      "IDPago": 28,
      "FechaFactura": "2025-07-11",
      "TotalFactura": 943,
      "Descripcion": "Wish parent daughter upon easy necessary scene."
    },
    {
      "IDCliente": 25,
      "IDPago": 2,
      "FechaFactura": "2023-04-27",
      "TotalFactura": 618,
      "Descripcion": "Billion him nation can century contain agency."
    },
    {
      "IDCliente": 24,
      "IDPago": 19,
      "FechaFactura": "2022-11-26",
      "TotalFactura": 592,
      "Descripcion": "Country meeting religious arrive."
    },
    {
      "IDCliente": 11,
      "IDPago": 21,
      "FechaFactura": "2024-04-05",
      "TotalFactura": 355,
      "Descripcion": "Popular ball happy a."
    },
    {
      "IDCliente": 11,
      "IDPago": 24,
      "FechaFactura": "2024-02-15",
      "TotalFactura": 430,
      "Descripcion": "President challenge reflect onto key."
    },
    {
      "IDCliente": 44,
      "IDPago": 39,
      "FechaFactura": "2024-03-13",
      "TotalFactura": 970,
      "Descripcion": "What scientist girl pull executive less."
    },
    {
      "IDCliente": 16,
      "IDPago": 20,
      "FechaFactura": "2023-06-23",
      "TotalFactura": 774,
      "Descripcion": "Defense church teach could either without."
    },
    {
      "IDCliente": 26,
      "IDPago": 9,
      "FechaFactura": "2024-09-27",
      "TotalFactura": 216,
      "Descripcion": "Ten level father yeah citizen sort."
    },
    {
      "IDCliente": 18,
      "IDPago": 18,
      "FechaFactura": "2024-06-24",
      "TotalFactura": 441,
      "Descripcion": "Century data analysis story."
    },
    {
      "IDCliente": 5,
      "IDPago": 18,
      "FechaFactura": "2025-07-20",
      "TotalFactura": 668,
      "Descripcion": "Pressure across carry else financial generation say."
    },
    {
      "IDCliente": 23,
      "IDPago": 26,
      "FechaFactura": "2023-12-25",
      "TotalFactura": 760,
      "Descripcion": "Quite south natural effect find."
    },
    {
      "IDCliente": 25,
      "IDPago": 21,
      "FechaFactura": "2025-06-22",
      "TotalFactura": 262,
      "Descripcion": "Set game threat card fly."
    },
    {
      "IDCliente": 45,
      "IDPago": 35,
      "FechaFactura": "2024-07-04",
      "TotalFactura": 891,
      "Descripcion": "Officer deal body."
    },
    {
      "IDCliente": 8,
      "IDPago": 23,
      "FechaFactura": "2024-05-29",
      "TotalFactura": 494,
      "Descripcion": "Loss next international claim high discuss floor."
    },
    {
      "IDCliente": 5,
      "IDPago": 19,
      "FechaFactura": "2023-06-09",
      "TotalFactura": 209,
      "Descripcion": "Week consider many tend myself class exactly."
    },
    {
      "IDCliente": 13,
      "IDPago": 38,
      "FechaFactura": "2024-05-13",
      "TotalFactura": 399,
      "Descripcion": "Ago look recently structure all early."
    },
    {
      "IDCliente": 10,
      "IDPago": 26,
      "FechaFactura": "2024-02-03",
      "TotalFactura": 263,
      "Descripcion": "Treat dog generation low community here lead child."
    },
    {
      "IDCliente": 20,
      "IDPago": 25,
      "FechaFactura": "2023-09-15",
      "TotalFactura": 540,
      "Descripcion": "Job sign PM."
    },
    {
      "IDCliente": 25,
      "IDPago": 23,
      "FechaFactura": "2023-09-06",
      "TotalFactura": 781,
      "Descripcion": "Anything across money charge civil us reason."
    },
    {
      "IDCliente": 42,
      "IDPago": 9,
      "FechaFactura": "2024-02-18",
      "TotalFactura": 427,
      "Descripcion": "Their recognize trouble garden."
    }
  ]);


//MANTENIMIENTO
db.createCollection("Mantenimiento", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IDHabitación", "IDEmpleado", "Fecha", "Descripción", "Estado"],
            properties: {
                IDHabitación: { bsonType: "int" },
                IDEmpleado: { bsonType: "int" },
                Fecha: { bsonType: "date" },
                Descripción: { bsonType: "string" },
                Estado: { bsonType: "string" }
            }
        }
    }
});

db.Mantenimiento.insertMany([{
    "IDHabitación": 13,
    "IDEmpleado": 11,
    "Fecha": new Date("2024-04-25T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 1.",
    "Estado": "Completado"
},
{
    "IDHabitación": 24,
    "IDEmpleado": 17,
    "Fecha": new Date("2024-05-26T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 2.",
    "Estado": "Completado"
},
{
    "IDHabitación": 15,
    "IDEmpleado": 9,
    "Fecha": new Date("2024-10-26T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 3.",
    "Estado": "Completado"
},
{
    "IDHabitación": 22,
    "IDEmpleado": 15,
    "Fecha": new Date("2024-10-18T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 4.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 24,
    "IDEmpleado": 2,
    "Fecha": new Date("2024-02-08T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 5.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 15,
    "IDEmpleado": 27,
    "Fecha": new Date("2024-05-29T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 6.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 21,
    "IDEmpleado": 20,
    "Fecha": new Date("2024-11-21T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 7.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 6,
    "IDEmpleado": 5,
    "Fecha": new Date("2024-11-13T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 8.",
    "Estado": "Completado"
},
{
    "IDHabitación": 27,
    "IDEmpleado": 9,
    "Fecha": new Date("2024-08-28T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 9.",
    "Estado": "Completado"
},
{
    "IDHabitación": 2,
    "IDEmpleado": 22,
    "Fecha": new Date("2024-11-20T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 10.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 19,
    "IDEmpleado": 1,
    "Fecha": new Date("2024-06-11T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 11.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 20,
    "IDEmpleado": 27,
    "Fecha": new Date("2024-02-27T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 12.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 9,
    "IDEmpleado": 21,
    "Fecha": new Date("2024-01-15T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 13.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 17,
    "IDEmpleado": 10,
    "Fecha": new Date("2024-07-26T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 14.",
    "Estado": "Completado"
},
{
    "IDHabitación": 25,
    "IDEmpleado": 21,
    "Fecha": new Date("2024-08-01T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 15.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 3,
    "IDEmpleado": 19,
    "Fecha": new Date("2024-06-26T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 16.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 22,
    "IDEmpleado": 8,
    "Fecha": new Date("2024-12-18T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 17.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 26,
    "IDEmpleado": 12,
    "Fecha": new Date("2024-09-16T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 18.",
    "Estado": "Pendiente"
},
{
    "IDHabitación": 17,
    "IDEmpleado": 28,
    "Fecha": new Date("2024-08-29T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 19.",
    "Estado": "Completado"
},
{
    "IDHabitación": 23,
    "IDEmpleado": 28,
    "Fecha": new Date("2024-11-27T00:00:00Z"),
    "Descripción": "Mantenimiento realizado en habitación 20.",
    "Estado": "Pendiente"
}]); 



db.createCollection("CheckIn", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IdReserva", "IdPago", "Hora"],
            properties: {
                IdReserva: { bsonType: "int" },
                IdPago: { bsonType: "int" },
                Hora: { bsonType: "string" }
            }
        }
    }
});

db.CheckIn.insertMany([
    {
      "IDCliente": 12,
      "IDHabitacion": 22,
      "FechaCheckIn": "2025-01-28",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 17,
      "IDHabitacion": 9,
      "FechaCheckIn": "2022-09-07",
      "HoraCheckIn": "12:00"
    },
    {
      "IDCliente": 22,
      "IDHabitacion": 17,
      "FechaCheckIn": "2023-07-30",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 22,
      "IDHabitacion": 9,
      "FechaCheckIn": "2023-04-23",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 10,
      "IDHabitacion": 10,
      "FechaCheckIn": "2025-07-22",
      "HoraCheckIn": "11:00"
    },
    {
      "IDCliente": 7,
      "IDHabitacion": 20,
      "FechaCheckIn": "2022-09-08",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 7,
      "IDHabitacion": 5,
      "FechaCheckIn": "2023-03-10",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 10,
      "IDHabitacion": 2,
      "FechaCheckIn": "2025-01-28",
      "HoraCheckIn": "11:00"
    },
    {
      "IDCliente": 40,
      "IDHabitacion": 7,
      "FechaCheckIn": "2024-10-03",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 1,
      "IDHabitacion": 4,
      "FechaCheckIn": "2023-02-16",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 23,
      "IDHabitacion": 1,
      "FechaCheckIn": "2024-08-25",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 33,
      "IDHabitacion": 10,
      "FechaCheckIn": "2025-04-01",
      "HoraCheckIn": "12:00"
    },
    {
      "IDCliente": 8,
      "IDHabitacion": 20,
      "FechaCheckIn": "2022-10-22",
      "HoraCheckIn": "14:00"
    },
    {
      "IDCliente": 30,
      "IDHabitacion": 12,
      "FechaCheckIn": "2023-09-14",
      "HoraCheckIn": "11:00"
    },
    {
      "IDCliente": 48,
      "IDHabitacion": 11,
      "FechaCheckIn": "2023-08-25",
      "HoraCheckIn": "14:00"
    },
    {
      "IDCliente": 39,
      "IDHabitacion": 25,
      "FechaCheckIn": "2024-01-24",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 9,
      "IDHabitacion": 3,
      "FechaCheckIn": "2025-06-11",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 43,
      "IDHabitacion": 21,
      "FechaCheckIn": "2025-02-01",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 11,
      "IDHabitacion": 16,
      "FechaCheckIn": "2023-05-23",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 2,
      "IDHabitacion": 26,
      "FechaCheckIn": "2022-08-20",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 16,
      "IDHabitacion": 27,
      "FechaCheckIn": "2024-01-26",
      "HoraCheckIn": "8:00"
    },
    {
      "IDCliente": 49,
      "IDHabitacion": 10,
      "FechaCheckIn": "2023-01-12",
      "HoraCheckIn": "10:00"
    },
    {
      "IDCliente": 43,
      "IDHabitacion": 12,
      "FechaCheckIn": "2025-02-12",
      "HoraCheckIn": "8:00"
    },
    {
      "IDCliente": 32,
      "IDHabitacion": 11,
      "FechaCheckIn": "2022-12-26",
      "HoraCheckIn": "11:00"
    },
    {
      "IDCliente": 29,
      "IDHabitacion": 8,
      "FechaCheckIn": "2024-12-13",
      "HoraCheckIn": "11:00"
    },
    {
      "IDCliente": 31,
      "IDHabitacion": 1,
      "FechaCheckIn": "2024-05-07",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 44,
      "IDHabitacion": 18,
      "FechaCheckIn": "2023-04-25",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 21,
      "IDHabitacion": 18,
      "FechaCheckIn": "2023-04-18",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 1,
      "IDHabitacion": 18,
      "FechaCheckIn": "2024-12-26",
      "HoraCheckIn": "12:00"
    },
    {
      "IDCliente": 48,
      "IDHabitacion": 9,
      "FechaCheckIn": "2023-11-12",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 38,
      "IDHabitacion": 24,
      "FechaCheckIn": "2023-07-23",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 8,
      "IDHabitacion": 2,
      "FechaCheckIn": "2022-08-03",
      "HoraCheckIn": "8:00"
    },
    {
      "IDCliente": 34,
      "IDHabitacion": 13,
      "FechaCheckIn": "2024-08-13",
      "HoraCheckIn": "12:00"
    },
    {
      "IDCliente": 10,
      "IDHabitacion": 12,
      "FechaCheckIn": "2023-11-29",
      "HoraCheckIn": "8:00"
    },
    {
      "IDCliente": 21,
      "IDHabitacion": 27,
      "FechaCheckIn": "2023-12-07",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 48,
      "IDHabitacion": 24,
      "FechaCheckIn": "2025-06-18",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 49,
      "IDHabitacion": 26,
      "FechaCheckIn": "2024-05-17",
      "HoraCheckIn": "14:00"
    },
    {
      "IDCliente": 24,
      "IDHabitacion": 10,
      "FechaCheckIn": "2023-04-26",
      "HoraCheckIn": "9:00"
    },
    {
      "IDCliente": 38,
      "IDHabitacion": 6,
      "FechaCheckIn": "2024-11-10",
      "HoraCheckIn": "13:00"
    },
    {
      "IDCliente": 7,
      "IDHabitacion": 30,
      "FechaCheckIn": "2022-11-08",
      "HoraCheckIn": "9:00"
    }
  ]);



db.createCollection("Reviews", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IdCliente", "IdHabitación", "Calificación", "Comentario", "Fecha"],
            properties: {
                IdCliente: { bsonType: "int" },
                IdHabitación: { bsonType: "int" },
                Calificación: { bsonType: "int" },
                Comentario: { bsonType: "string" },
                Fecha: { bsonType: "date" }
            }
        }
    }
});

db.Reviews.insertMany([
  {
    "IDCliente": 30,
    "Comentario": "Hospital despite executive certain another need former pick.",
    "Puntuacion": 5,
    "FechaReview": "2024-10-16"
  },
  {
    "IDCliente": 12,
    "Comentario": "Argue rock simple would improve stock keep activity exist friend tend.",
    "Puntuacion": 4,
    "FechaReview": "2022-11-13"
  },
  {
    "IDCliente": 45,
    "Comentario": "Exactly rule although trip morning girl write eight.",
    "Puntuacion": 5,
    "FechaReview": "2024-11-15"
  },
  {
    "IDCliente": 12,
    "Comentario": "West least development wonder white thousand woman little none member.",
    "Puntuacion": 1,
    "FechaReview": "2024-05-13"
  },
  {
    "IDCliente": 28,
    "Comentario": "Price me as entire government glass loss seem former believe.",
    "Puntuacion": 4,
    "FechaReview": "2024-02-26"
  },
  {
    "IDCliente": 21,
    "Comentario": "Rate great can individual resource property field set entire.",
    "Puntuacion": 5,
    "FechaReview": "2024-10-20"
  },
  {
    "IDCliente": 19,
    "Comentario": "Truth game produce catch pattern fill recent officer middle miss sit.",
    "Puntuacion": 3,
    "FechaReview": "2023-12-05"
  },
  {
    "IDCliente": 33,
    "Comentario": "Into share try form evening address become themselves every serious billion medical.",
    "Puntuacion": 5,
    "FechaReview": "2024-10-25"
  },
  {
    "IDCliente": 50,
    "Comentario": "Throughout same in per discuss second a size around.",
    "Puntuacion": 2,
    "FechaReview": "2024-07-23"
  },
  {
    "IDCliente": 40,
    "Comentario": "Figure card must religious though above garden do important performance.",
    "Puntuacion": 2,
    "FechaReview": "2023-04-26"
  },
  {
    "IDCliente": 14,
    "Comentario": "Force several indeed wear million product might lead such rate something follow know.",
    "Puntuacion": 2,
    "FechaReview": "2024-04-20"
  },
  {
    "IDCliente": 45,
    "Comentario": "Off Mrs wind opportunity attention lead seat never.",
    "Puntuacion": 2,
    "FechaReview": "2024-01-30"
  },
  {
    "IDCliente": 15,
    "Comentario": "Age local summer military available those realize.",
    "Puntuacion": 5,
    "FechaReview": "2024-01-02"
  },
  {
    "IDCliente": 10,
    "Comentario": "Since mean country drop thing power number site pull.",
    "Puntuacion": 2,
    "FechaReview": "2022-09-21"
  },
  {
    "IDCliente": 36,
    "Comentario": "Prevent others hold participant sister capital respond evening run up according.",
    "Puntuacion": 1,
    "FechaReview": "2024-05-17"
  },
  {
    "IDCliente": 31,
    "Comentario": "Bar item significant my generation moment attorney campaign huge town.",
    "Puntuacion": 4,
    "FechaReview": "2023-12-09"
  },
  {
    "IDCliente": 40,
    "Comentario": "Blue seven feel return power morning agency read ball throughout ground include ten.",
    "Puntuacion": 3,
    "FechaReview": "2024-02-12"
  },
  {
    "IDCliente": 49,
    "Comentario": "Political goal PM hundred pick mouth according opportunity police meet theory note cell.",
    "Puntuacion": 1,
    "FechaReview": "2023-10-18"
  },
  {
    "IDCliente": 1,
    "Comentario": "True throughout dinner talk production health four art these remain deal not.",
    "Puntuacion": 1,
    "FechaReview": "2023-12-27"
  },
  {
    "IDCliente": 11,
    "Comentario": "Break debate town research organization maybe nature pressure involve attorney exactly.",
    "Puntuacion": 3,
    "FechaReview": "2024-09-17"
  },
  {
    "IDCliente": 41,
    "Comentario": "Instead quite edge speech everyone fact campaign expert might skin hold save.",
    "Puntuacion": 5,
    "FechaReview": "2023-03-25"
  },
  {
    "IDCliente": 23,
    "Comentario": "Direction official term doctor guy bag knowledge realize.",
    "Puntuacion": 4,
    "FechaReview": "2025-01-24"
  },
  {
    "IDCliente": 22,
    "Comentario": "Life see truth many rest pattern movie unit need style article.",
    "Puntuacion": 3,
    "FechaReview": "2025-01-18"
  },
  {
    "IDCliente": 9,
    "Comentario": "Paper large fund yeah go plan near process I capital time traditional treat oil.",
    "Puntuacion": 4,
    "FechaReview": "2024-01-17"
  },
  {
    "IDCliente": 48,
    "Comentario": "Experience nice business break perform base.",
    "Puntuacion": 4,
    "FechaReview": "2025-03-31"
  },
  {
    "IDCliente": 45,
    "Comentario": "Ok artist take friend job suffer area star language.",
    "Puntuacion": 4,
    "FechaReview": "2025-03-07"
  },
  {
    "IDCliente": 7,
    "Comentario": "Right power traditional represent go quite democratic standard meeting might.",
    "Puntuacion": 2,
    "FechaReview": "2023-02-16"
  },
  {
    "IDCliente": 29,
    "Comentario": "Say reach certain recognize different financial.",
    "Puntuacion": 4,
    "FechaReview": "2024-08-20"
  },
  {
    "IDCliente": 42,
    "Comentario": "Leader grow order travel guess describe also social near wall order necessary both.",
    "Puntuacion": 1,
    "FechaReview": "2025-06-19"
  },
  {
    "IDCliente": 50,
    "Comentario": "Upon nothing natural economic receive mind find.",
    "Puntuacion": 1,
    "FechaReview": "2022-11-11"
  },
  {
    "IDCliente": 36,
    "Comentario": "Partner such performance month heavy guess.",
    "Puntuacion": 4,
    "FechaReview": "2023-07-03"
  },
  {
    "IDCliente": 40,
    "Comentario": "Statement she agency nor across build hundred movie national light.",
    "Puntuacion": 3,
    "FechaReview": "2025-01-08"
  },
  {
    "IDCliente": 27,
    "Comentario": "Long call necessary conference capital tough guy.",
    "Puntuacion": 4,
    "FechaReview": "2024-05-24"
  },
  {
    "IDCliente": 42,
    "Comentario": "Visit word American pattern model amount wish attention apply begin.",
    "Puntuacion": 3,
    "FechaReview": "2025-07-25"
  },
  {
    "IDCliente": 41,
    "Comentario": "Civil truth just weight answer new development this.",
    "Puntuacion": 3,
    "FechaReview": "2023-11-02"
  },
  {
    "IDCliente": 28,
    "Comentario": "Necessary western hour allow early center international not.",
    "Puntuacion": 2,
    "FechaReview": "2024-08-06"
  },
  {
    "IDCliente": 44,
    "Comentario": "Who become fine coach can move no business watch understand way we.",
    "Puntuacion": 3,
    "FechaReview": "2025-04-24"
  },
  {
    "IDCliente": 6,
    "Comentario": "More area alone clear professor already trip more western popular.",
    "Puntuacion": 3,
    "FechaReview": "2025-07-25"
  },
  {
    "IDCliente": 16,
    "Comentario": "Young window yes side market hold.",
    "Puntuacion": 2,
    "FechaReview": "2024-06-02"
  },
  {
    "IDCliente": 42,
    "Comentario": "Chair nature action visit high energy ok everything rather start leader image.",
    "Puntuacion": 5,
    "FechaReview": "2024-11-22"
  }
]);
