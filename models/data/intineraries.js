import 'dotenv/config.js';
import '../../config/database.js';
import Itinerary from "../Itinerary.js";

const itineraries = [
    {
        "userName": "Juan Pérez",
        "userPhoto": "https://robohash.org/juanperez.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Cultura", "#Aventura", "#Historia", "#Exploración", "#Viajes"],
        "city": "64fa501d4bbe915a1f740580"
    },
    {
        "userName": "Ana Gómez",
        "userPhoto": "https://robohash.org/anagomez.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Gastronomía", "#Viajes", "#Comida", "#Cultura", "#Sabor"],
        "city": "64fa501d4bbe915a1f740580"
    },
    {
        "userName": "Diego Fernández",
        "userPhoto": "https://robohash.org/diegofernandez.png",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Cultura", "#Música", "#Entretenimiento", "#Fiestas", "#Vibras"],
        "city": "64fa501d4bbe915a1f740580"
    },
    {
        "userName": "Sofía Martínez",
        "userPhoto": "https://robohash.org/sofiamartinez.png",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Cultura", "#Arquitectura", "#Arte", "#Historia", "#Diseño"],
        "city": "64fa501d4bbe915a1f740580"
    },
    {
        "userName": "Lucas Silva",
        "userPhoto": "https://robohash.org/lucassilva.png",
        "price": 2,
        "duration": 2,
        "hashtags": ["#Noche", "#Diversión", "#Fiesta", "#Música", "#Social"],
        "city": "64fa501d4bbe915a1f740581"
    },
    {
        "userName": "Thiago Costa",
        "userPhoto": "https://robohash.org/thiagocosta.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Cerveza", "#Nocturno", "#Diversión", "#Relax", "#Amigos"],
        "city": "64fa501d4bbe915a1f740581"
    },
    {
        "userName": "Fernanda Lima",
        "userPhoto": "https://robohash.org/fernandalima.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Cultura", "#Gastronomía", "#Delicias", "#Viajes", "#Comida"],
        "city": "64fa501d4bbe915a1f740581"
    },
    {
        "userName": "María Rodríguez",
        "userPhoto": "https://robohash.org/mariarodriguez.png",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Playas", "#Relax", "#Naturaleza", "#Verano", "#Sol"],
        "city": "64fa501d4bbe915a1f74058d"
    },
    {
        "userName": "Mariana Silva",
        "userPhoto": "https://robohash.org/marianasilva.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Fiestas", "#Diversión", "#Celebración", "#Amigos", "#Música"],
        "city": "64fa501d4bbe915a1f74058d"
    },
    {
        "userName": "Carlos López",
        "userPhoto": "https://robohash.org/carloslopez.png",
        "price": 1,
        "duration": 1,
        "hashtags": ["#Naturaleza", "#Senderismo", "#Aventura", "#Ejercicio", "#Exploración"],
        "city": "64fa501d4bbe915a1f740587"
    },
    {
        "userName": "María López",
        "userPhoto": "https://robohash.org/marialopez.png",
        "price": 1,
        "duration": 1,
        "hashtags": ["#Senderismo", "#Naturaleza", "#Aventura", "#Salud", "#Ejercicio"],
        "city": "64fa501d4bbe915a1f740587"
    },
    {
        "userName": "Nicolás Vargas",
        "userPhoto": "https://robohash.org/nicolasvargas.png",
        "price": 2,
        "duration": 2,
        "hashtags": ["#Cultura", "#Música", "#Arte", "#Diversión", "#Entretenimiento"],
        "city": "64fa501d4bbe915a1f740587"
    },
    {
        "userName": "Lucía Fernández",
        "userPhoto": "https://robohash.org/luciafernandez.png",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Arte", "#Cultura", "#Historia", "#Creatividad", "#Inspiración"],
        "city": "64fa501d4bbe915a1f740589"
    },
    {
        "userName": "Juliana Castro",
        "userPhoto": "https://robohash.org/julianacastro.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Aventura", "#Caminatas", "#Naturaleza", "#Exploración", "#Ejercicio"],
        "city": "64fa501d4bbe915a1f740589"
    },
    {
        "userName": "Fernando Castro",
        "userPhoto": "https://robohash.org/fernandocastro.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Aventura", "#Caminatas", "#Naturaleza", "#Salud", "#Ejercicio"],
        "city": "64fa501d4bbe915a1f74058b"
    },
    {
        "userName": "Santiago López",
        "userPhoto": "https://robohash.org/santiagolopez.png",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Caminatas", "#Naturaleza", "#Aventura", "#Exploración", "#Ejercicio"],
        "city": "64fa501d4bbe915a1f74058b"
    },
    {
        "userName": "Isabel Torres",
        "userPhoto": "https://robohash.org/isabeltorres.png",
        "price": 5,
        "duration": 6,
        "hashtags": ["#Gastronomía", "#Cultura", "#Comida", "#Viajes", "#Delicias"],
        "city": "64fa501d4bbe915a1f74058c"
    },
    {
        "userName": "Juan Carlos",
        "userPhoto": "https://robohash.org/juancarlos.png",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Bailes", "#Noche", "#Diversión", "#Fiesta", "#Música"],
        "city": "64fa501d4bbe915a1f74058c"
    },
    {
        "userName": "Isabella Torres",
        "userPhoto": "https://robohash.org/isabellatorres.png",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Fiestas", "#Noche", "#Diversión", "#Celebración", "#Amigos"],
        "city": "64fa501d4bbe915a1f74058c"
    },
    {
        "userName": "Ricardo González",
        "userPhoto": "https://robohash.org/ricardogonzalez.png",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Fiestas", "#Noche", "#Diversión", "#Celebración", "#Música"],
        "city": "64fa501d4bbe915a1f740588"
    },
    {
        "userName": "Claudia Pérez",
        "userPhoto": "https://robohash.org/claudiaperez.png",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Cultura", "#Gastronomía", "#Delicias", "#Comida", "#Viajes"],
        "city": "64fa501d4bbe915a1f740588"
    },
    {
        "userName": "Clara Jiménez",
        "userPhoto": "https://robohash.org/clarajimenez.png",
        "price": 1,
        "duration": 2,
        "hashtags": ["#Historia", "#Arquitectura", "#Cultura", "#Exploración", "#Arte"],
        "city": "64fa501d4bbe915a1f74058e"
    },
    {
        "userName": "David Morales",
        "userPhoto": "https://robohash.org/davidmorales.png",
        "price": 4,
        "duration": 5,
        "hashtags": ["#Cultura", "#Arte", "#Historia", "#Exploración", "#Viajes"],
        "city": "64fa501d4bbe915a1f74058e"
    },
    {
        "userName": "Verónica Ramos",
        "userPhoto": "https://robohash.org/veronicramos.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Cultura", "#Gastronomía", "#Comida", "#Delicias", "#Viajes"],
        "city": "64fa501d4bbe915a1f74058e"
    },
    {
        "userName": "María González",
        "userPhoto": "https://robohash.org/mariagonzalez.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Cultura", "#Historia", "#Exploración", "#Arte", "#Viajes"],
        "city": "64fa501d4bbe915a1f740583"
    },
    {
        "userName": "Luis Miguel",
        "userPhoto": "https://robohash.org/luismiguel.png",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Gastronomía", "#Aventura", "#Delicias", "#Cultura", "#Comida"],
        "city": "64fa501d4bbe915a1f740583"
    },
    {
        "userName": "Alberto Pérez",
        "userPhoto": "https://robohash.org/albertoperez.png",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Cultura", "#Cerveza", "#Nocturno", "#Diversión", "#Amigos"],
        "city": "64fa501d4bbe915a1f740584"
    },
    {
        "userName": "Tatiana Herrera",
        "userPhoto": "https://robohash.org/tatianaherrera.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Gastronomía", "#Viajes", "#Delicias", "#Comida", "#Cultura"],
        "city": "64fa501d4bbe915a1f740584"
    },
    {
        "userName": "Fernando González",
        "userPhoto": "https://robohash.org/fernandogonzalez.png",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Historia", "#Arquitectura", "#Cultura", "#Arte", "#Exploración"],
        "city": "64fa501d4bbe915a1f740585"
    },
    {
        "userName": "María Luisa",
        "userPhoto": "https://robohash.org/marialuisa.png",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Cultura", "#Aventura", "#Exploración", "#Naturaleza", "#Viajes"],
        "city": "64fa501d4bbe915a1f740585"
    },
    {
        "userName": "Andrés Castro",
        "userPhoto": "https://robohash.org/andrescastro.png",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Cerveza", "#Música", "#Diversión", "#Nocturno", "#Fiestas"],
        "city": "64fa501d4bbe915a1f740586"
    },
    {
        "userName": "Camila Fernández",
        "userPhoto": "https://robohash.org/camilafernandez.png",
        "price": 3,
        "duration": 2,
        "hashtags": ["#Cultura", "#Historia", "#Arte", "#Exploración", "#Creatividad"],
        "city": "64fa501d4bbe915a1f740586"
    },
    {
        "userName": "Álvaro Reyes",
        "userPhoto": "https://robohash.org/alvaroreyes.png",
        "price": 2,
        "duration": 3,
        "hashtags": ["#Naturaleza", "#Senderismo", "#Aventura", "#Exploración", "#Salud"],
        "city": "64fa501d4bbe915a1f74058a"
    },
    {
        "userName": "Luciana Martínez",
        "userPhoto": "https://robohash.org/lucianamartinez.png",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Cultura", "#Fiestas", "#Diversión", "#Celebración", "#Música"],
        "city": "64fa501d4bbe915a1f74058a"
    }
];

Itinerary.insertMany(itineraries)
  .then(() => {
    console.log('Itinerarios insertados correctamente');
  })
  .catch(error => {
    console.error('Error al insertar itinerarios:', error);
  });
