

import Itinerary from "../Itinerary.js";
import 'dotenv/config.js';
import '../../config/database.js';




const itineraries = [
  // Medellín
  { userName: "Andrés Castro", userPhoto: "https://robohash.org/andrescastro.png", price: 4, duration: 5, hashtags: ["#adventure", "#culture", "#local"], city: "64fa501d4bbe915a1f74058c", description: "Explore Medellín’s vibrant culture and hidden gems. Perfect for those seeking adventure and local experiences." , photo: "https://vivex.com.co/wp-content/uploads/2022/05/Sitios-Turisticos-de-Antioquia.jpg" },
  { userName: "Camila Fernández", userPhoto: "https://robohash.org/camilafernandez.png", price: 3, duration: 3, hashtags: ["#explore", "#food", "#nature"], city: "64fa501d4bbe915a1f74058c", description: "A mix of nature, food, and exploration. Ideal for foodies and nature lovers alike." , photo: "https://vivex.com.co/wp-content/uploads/2022/05/Sitios-Turisticos-de-Antioquia.jpg"},
  { userName: "Carlos Méndez", userPhoto: "https://robohash.org/carlosmendez.png", price: 5, duration: 4, hashtags: ["#local", "#history", "#explore"], city: "64fa501d4bbe915a1f74058c", description: "Dive into Medellín’s rich history and local life, exploring unique cultural landmarks." , photo:" https://vivex.com.co/wp-content/uploads/2022/05/Sitios-Turisticos-de-Antioquia.jpg"},
  { userName: "Lucía Pérez", userPhoto: "https://robohash.org/luciaperez.png", price: 4, duration: 3, hashtags: ["#sightseeing", "#culture", "#vacation"], city: "64fa501d4bbe915a1f74058c", description: "A relaxed sightseeing tour through the cultural heart of Medellín, perfect for a short vacation." , photo: "https://vivex.com.co/wp-content/uploads/2022/05/Sitios-Turisticos-de-Antioquia.jpg"},
  { userName: "Javier López", userPhoto: "https://robohash.org/javierlopez.png", price: 3, duration: 2, hashtags: ["#food", "#nature", "#explore"], city: "64fa501d4bbe915a1f74058c", description: "Quick getaway to explore Medellín’s nature and food scene." , photo:"https://vivex.com.co/wp-content/uploads/2022/05/Sitios-Turisticos-de-Antioquia.jpg" },

  // Rio de Janeiro
  { userName: "Luis Gómez", userPhoto: "https://robohash.org/luisgomez.png", price: 5, duration: 4, hashtags: ["#beach", "#explore", "#adventure"], city: "64fa501d4bbe915a1f74058d", description: "An adventurous Rio tour focusing on beautiful beaches and exploration." , photo: "https://media.istockphoto.com/id/505625094/es/foto/brasil-viajes-collage-de.jpg?s=612x612&w=0&k=20&c=FcJJuqXVTB8fVHUXI03jlIpBHPRQ1YKGrk6xNs34mik=" },
  { userName: "Fernanda Costa", userPhoto: "https://robohash.org/fernandacosta.png", price: 3, duration: 2, hashtags: ["#christtheredeemer", "#brazil", "#culture"], city: "64fa501d4bbe915a1f74058d", description: "Short cultural experience in Rio, featuring the iconic Christ the Redeemer." , photo: "https://media.istockphoto.com/id/505625094/es/foto/brasil-viajes-collage-de.jpg?s=612x612&w=0&k=20&c=FcJJuqXVTB8fVHUXI03jlIpBHPRQ1YKGrk6xNs34mik="},
  { userName: "Isabela Silva", userPhoto: "https://robohash.org/isabelasilva.png", price: 4, duration: 3, hashtags: ["#tourism", "#adventure", "#explore"], city: "64fa501d4bbe915a1f74058d", description: "Tour Rio with an emphasis on adventure and sightseeing.",photo:"https://media.istockphoto.com/id/505625094/es/foto/brasil-viajes-collage-de.jpg?s=612x612&w=0&k=20&c=FcJJuqXVTB8fVHUXI03jlIpBHPRQ1YKGrk6xNs34mik=" },
  { userName: "Carlos Martins", userPhoto: "https://robohash.org/carlosmartins.png", price: 4, duration: 5, hashtags: ["#nightlife", "#culture", "#citytour"], city: "64fa501d4bbe915a1f74058d", description: "Enjoy Rio’s nightlife, culture, and a thorough city tour during your stay." , photo: "https://media.istockphoto.com/id/505625094/es/foto/brasil-viajes-collage-de.jpg?s=612x612&w=0&k=20&c=FcJJuqXVTB8fVHUXI03jlIpBHPRQ1YKGrk6xNs34mik=" },

  // Habana
  { userName: "José Martínez", userPhoto: "https://robohash.org/josemartinez.png", price: 4, duration: 5, hashtags: ["#historic", "#architecture", "#culture"], city: "64fa501d4bbe915a1f74058e", description: "Step back in time and immerse yourself in Havana’s historic architecture and cultural wonders." , photo: "https://i.pinimg.com/originals/79/25/fe/7925fea559a842fd2e15017d68d9ff83.jpg" },
  { userName: "Laura Díaz", userPhoto: "https://robohash.org/lauradiaz.png", price: 3, duration: 4, hashtags: ["#explore", "#cuba", "#music"], city: "64fa501d4bbe915a1f74058e", description: "Experience the vibrant music scene and explore the heart of Cuba.", photo: "https://i.pinimg.com/originals/79/25/fe/7925fea559a842fd2e15017d68d9ff83.jpg" },
  { userName: "Juan Pérez", userPhoto: "https://robohash.org/juanperez.png", price: 5, duration: 3, hashtags: ["#vintage", "#explore", "#local"], city: "64fa501d4bbe915a1f74058e", description: "Discover Havana’s vintage charm, local spots, and hidden treasures." , photo: "https://i.pinimg.com/originals/79/25/fe/7925fea559a842fd2e15017d68d9ff83.jpg"},

  // Buenos Aires
  { userName: "Luciana Martínez", userPhoto: "https://robohash.org/lucianamartinez.png", price: 2, duration: 4, hashtags: ["#food", "#tango", "#culture"], city: "67292d22052e4240f3e1b7f6", description: "A perfect mix of food, tango, and cultural immersion in Buenos Aires." , photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpg" },
  { userName: "Diego Rodríguez", userPhoto: "https://robohash.org/diegorodriguez.png", price: 3, duration: 2, hashtags: ["#argentina", "#citytour", "#history"], city: "67292d22052e4240f3e1b7f6", description: "Explore Argentina’s rich history with a city tour of Buenos Aires." , photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpg" },
  { userName: "Valentina Pérez", userPhoto: "https://robohash.org/valentinaperez.png", price: 4, duration: 5, hashtags: ["#explore", "#culture", "#vacation"], city: "67292d22052e4240f3e1b7f6", description: "A culturally immersive vacation that explores the essence of Buenos Aires." , photo :"https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpg" },

  // São Paulo
  { userName: "Carlos García", userPhoto: "https://robohash.org/carlosgarcia.png", price: 3, duration: 2, hashtags: ["#urban", "#shopping", "#city"], city: "64fa501d4bbe915a1f740581", description: "Quick urban exploration and shopping tour in São Paulo’s bustling city center." , photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpghttps://www.shutterstock.com/image-photo/brazil-travel-collage-sao-paulo-260nw-1013042539.jpg" },
  { userName: "Ana Pérez", userPhoto: "https://robohash.org/anaperez.png", price: 4, duration: 3, hashtags: ["#art", "#culture", "#museums"], city: "64fa501d4bbe915a1f740581", description: "Dive into São Paulo’s art and culture with a visit to the city's best museums.", photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpghttps://www.shutterstock.com/image-photo/brazil-travel-collage-sao-paulo-260nw-1013042539.jpg"  },
  { userName: "Gustavo Almeida", userPhoto: "https://robohash.org/gustavoalmeida.png", price: 2, duration: 3, hashtags: ["#sightseeing", "#adventure", "#explore"], city: "64fa501d4bbe915a1f740581", description: "Explore the sights and adventures of São Paulo on a budget-friendly trip.", photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpghttps://www.shutterstock.com/image-photo/brazil-travel-collage-sao-paulo-260nw-1013042539.jpg" },
  { userName: "Juliana Souza", userPhoto: "https://robohash.org/julianasouza.png", price: 5, duration: 4, hashtags: ["#shopping", "#culture", "#art"], city: "64fa501d4bbe915a1f740581", description: "Enjoy shopping, culture, and art in the dynamic São Paulo cityscape.", photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpghttps://www.shutterstock.com/image-photo/brazil-travel-collage-sao-paulo-260nw-1013042539.jpg"  },
  { userName: "Ricardo Lima", userPhoto: "https://robohash.org/ricardolima.png", price: 3, duration: 5, hashtags: ["#citytour", "#brazil", "#nightlife"], city: "64fa501d4bbe915a1f740581", description: "A deep dive into São Paulo’s nightlife, history, and city tour." , photo: "https://i.pinimg.com/736x/e8/e0/33/e8e033764a28e8b081b5259e02e94068.jpghttps://www.shutterstock.com/image-photo/brazil-travel-collage-sao-paulo-260nw-1013042539.jpg" },

  // Lima
  { userName: "Miguel Torres", userPhoto: "https://robohash.org/migueltorres.png", price: 5, duration: 4, hashtags: ["#historical", "#food", "#explore"], city: "64fa501d4bbe915a1f74058b", description: "A historical and culinary journey through Lima’s vibrant streets.", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWWD8e3mGLIh6NoffK4rKgXpRxGOOOO9XdQ&s" },
  { userName: "Sara Mendoza", userPhoto: "https://robohash.org/saramendoza.png", price: 4, duration: 3, hashtags: ["#local", "#peru", "#explore"], city: "64fa501d4bbe915a1f74058b", description: "Explore the best local experiences in Lima and learn about Peru’s rich heritage.", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWWD8e3mGLIh6NoffK4rKgXpRxGOOOO9XdQ&s" },
  { userName: "Pedro Ruiz", userPhoto: "https://robohash.org/pedroruiz.png", price: 3, duration: 2, hashtags: ["#vacation", "#explore", "#food"], city: "64fa501d4bbe915a1f74058b", description: "A short vacation exploring Lima’s delicious food scene and vibrant city." , photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWWD8e3mGLIh6NoffK4rKgXpRxGOOOO9XdQ&s"},
  { userName: "Mónica Salazar", userPhoto: "https://robohash.org/monicasalazar.png", price: 2, duration: 3, hashtags: ["#culture", "#nature", "#tourism"], city: "64fa501d4bbe915a1f74058b", description: "Combine culture, nature, and tourism in a well-rounded visit to Lima.", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWWD8e3mGLIh6NoffK4rKgXpRxGOOOO9XdQ&s" },

  // Santiago
  { userName: "Gabriela Ríos", userPhoto: "https://robohash.org/gabrielarios.png", price: 3, duration: 5, hashtags: ["#mountains", "#adventure", "#hiking"], city: "64fa501d4bbe915a1f740585", description: "Explore the majestic mountains around Santiago through adventurous hikes." , photo: "https://i.pinimg.com/736x/ba/ac/c7/baacc7f9686d86e82831ac198f05e829.jpg"},
  { userName: "Juan Pérez", userPhoto: "https://robohash.org/juanperez.png", price: 2, duration: 4, hashtags: ["#nature", "#culture", "#sightseeing"], city: "64fa501d4bbe915a1f740585", description: "A great mix of nature, culture, and sightseeing in Santiago.", photo: "https://i.pinimg.com/736x/ba/ac/c7/baacc7f9686d86e82831ac198f05e829.jpg" },
  { userName: "Pedro Ramírez", userPhoto: "https://robohash.org/pedroramirez.png", price: 5, duration: 3, hashtags: ["#vacation", "#adventure", "#citytour"], city: "64fa501d4bbe915a1f740585", description: "A quick yet exciting vacation exploring the city of Santiago and its adventures.",photo: "https://i.pinimg.com/736x/ba/ac/c7/baacc7f9686d86e82831ac198f05e829.jpg" },

  // Caracas
  { userName: "Rafael Jiménez", userPhoto: "https://robohash.org/rafaeljimenez.png", price: 4, duration: 3, hashtags: ["#historic", "#culture", "#urban"], city: "64fa501d4bbe915a1f740588", description: "Explore Caracas' rich history and urban life with a cultural touch.", photo: "https://i.pinimg.com/736x/35/f0/8e/35f08e81196ee3207d3192a831ad9820.jpg" },
  { userName: "Margarita Gómez", userPhoto: "https://robohash.org/margaritagomez.png", price: 3, duration: 4, hashtags: ["#explore", "#urban", "#culture"], city: "64fa501d4bbe915a1f740588", description: "Dive into the urban culture and hidden gems of Caracas with this exciting tour." , photo: "https://i.pinimg.com/736x/35/f0/8e/35f08e81196ee3207d3192a831ad9820.jpg"},

  // Bogotá
  { userName: "Sofía Mendoza", userPhoto: "https://robohash.org/sofiamendoza.png", price: 2, duration: 4, hashtags: ["#nature", "#hiking", "#mountains"], city: "64fa501d4bbe915a1f740583", description: "Escape to the mountains of Bogotá for a refreshing hike in nature." , photo: "https://i.pinimg.com/736x/b9/ea/6e/b9ea6e18ac1ce50b6c235bf3bac48e48.jpg"},
  { userName: "Pedro Díaz", userPhoto: "https://robohash.org/pedrodiaz.png", price: 3, duration: 2, hashtags: ["#history", "#museums", "#culture"], city: "64fa501d4bbe915a1f740583", description: "Discover Bogotá’s rich history through its museums and cultural sites.", photo: "https://i.pinimg.com/736x/b9/ea/6e/b9ea6e18ac1ce50b6c235bf3bac48e48.jpg" },
  { userName: "Carlos López", userPhoto: "https://robohash.org/carloslopez.png", price: 4, duration: 3, hashtags: ["#explore", "#tourism", "#vacation"], city: "64fa501d4bbe915a1f740583", description: "Explore Bogotá’s best tourist attractions on a fun-filled vacation." , photo: "https://i.pinimg.com/736x/b9/ea/6e/b9ea6e18ac1ce50b6c235bf3bac48e48.jpg"},
  { userName: "Valentina Guzmán", userPhoto: "https://robohash.org/valentinaguzman.png", price: 5, duration: 5, hashtags: ["#adventure", "#citytour", "#explore"], city: "64fa501d4bbe915a1f740583", description: "Embark on an adventurous city tour through the heart of Bogotá." , photo: "https://i.pinimg.com/736x/b9/ea/6e/b9ea6e18ac1ce50b6c235bf3bac48e48.jpg"},

  // Montevideo
  { userName: "Verónica López", userPhoto: "https://robohash.org/veronicalopez.png", price: 3, duration: 3, hashtags: ["#beach", "#relax", "#vacation"], city: "64fa501d4bbe915a1f740586", description: "Relax on Montevideo’s beautiful beaches and enjoy a laid-back vacation." ,photo: "https://i.pinimg.com/736x/39/31/24/393124ac5c60348a43b033d4cce701f7.jpg"},
  { userName: "Ricardo Martínez", userPhoto: "https://robohash.org/ricardomartinez.png", price: 2, duration: 4, hashtags: ["#local", "#citytour", "#food"], city: "64fa501d4bbe915a1f740586", description: "Explore local food and take a city tour of Montevideo’s best spots." ,photo: "https://i.pinimg.com/736x/39/31/24/393124ac5c60348a43b033d4cce701f7.jpg"},

  // La Paz
  { userName: "Eduardo Fernández", userPhoto: "https://robohash.org/eduardofernandez.png", price: 4, duration: 3, hashtags: ["#mountains", "#culture", "#adventure"], city: "64fa501d4bbe915a1f740589", description: "Adventure through La Paz's mountainous terrain and discover its rich cultural heritage.", photo:"https://i.pinimg.com/736x/27/ec/3a/27ec3ab9ea424f83a3de311c24a99b52.jpg"},
  { userName: "Gabriela López", userPhoto: "https://robohash.org/gabrielalopez.png", price: 2, duration: 4, hashtags: ["#explore", "#bolivia", "#vacation"], city: "64fa501d4bbe915a1f740589", description: "Explore Bolivia’s natural beauty and culture during a relaxing vacation in La Paz.", photo:"https://i.pinimg.com/736x/27/ec/3a/27ec3ab9ea424f83a3de311c24a99b52.jpg"},
  { userName: "Alfredo Gómez", userPhoto: "https://robohash.org/alfredogomez.png", price: 3, duration: 5, hashtags: ["#nature", "#hiking", "#adventure"], city: "64fa501d4bbe915a1f740589", description: "A hiking-focused adventure through La Paz’s stunning nature.", photo: "https://i.pinimg.com/736x/27/ec/3a/27ec3ab9ea424f83a3de311c24a99b52.jpg" },

  // Quito
  { userName: "María Sánchez", userPhoto: "https://robohash.org/mariasanchez.png", price: 4, duration: 4, hashtags: ["#history", "#explore", "#local"], city: "64fa501d4bbe915a1f740587", description: "Explore Quito’s history and local life with an immersive tour.", photo:"https://i.pinimg.com/736x/a9/65/93/a96593b84a229f0f68780a9f2a42c6fb.jpg" },
  { userName: "Juan Sánchez", userPhoto: "https://robohash.org/juansanchez.png", price: 3, duration: 2, hashtags: ["#explore", "#nature", "#vacation"], city: "64fa501d4bbe915a1f740587", description: "Short, nature-filled vacation exploring the best of Quito." , photo:"https://i.pinimg.com/736x/a9/65/93/a96593b84a229f0f68780a9f2a42c6fb.jpg"},
  { userName: "Carlos Díaz", userPhoto: "https://robohash.org/carlosdiaz.png", price: 3, duration: 5, hashtags: ["#adventure", "#mountains", "#history"], city: "64fa501d4bbe915a1f740587", description: "An adventurous trip with history and breathtaking mountain views in Quito." , photo:"https://i.pinimg.com/736x/a9/65/93/a96593b84a229f0f68780a9f2a42c6fb.jpg"},

  // Asunción
  { userName: "Carlos López", userPhoto: "https://robohash.org/carloslopez.png", price: 3, duration: 2, hashtags: ["#history", "#urban", "#culture"], city: "64fa501d4bbe915a1f74058a", description: "A brief exploration of Asunción’s urban culture and history." , photo: "https://i.pinimg.com/736x/69/43/96/694396a94a4854e26f4d21dbb97c2661.jpg"},
  { userName: "Sofía García", userPhoto: "https://robohash.org/sofiagarcia.png", price: 4, duration: 3, hashtags: ["#culture", "#adventure", "#explore"], city: "64fa501d4bbe915a1f74058a", description: "Discover Asunción's cultural treasures and adventurous spots." , photo: "https://i.pinimg.com/736x/69/43/96/694396a94a4854e26f4d21dbb97c2661.jpg" },

  // Guatemala City
  { userName: "Lucía Gómez", userPhoto: "https://robohash.org/luciagomez.png", price: 2, duration: 4, hashtags: ["#explore", "#nature", "#culture"], city: "64fa501d4bbe915a1f740599", description: "Explore the natural beauty and cultural landmarks of Guatemala City.", photo: "https://i.pinimg.com/736x/fa/b6/58/fab658ad3fe152881985f4e41403f22f.jpg" },
  { userName: "Carlos López", userPhoto: "https://robohash.org/carloslopez.png", price: 3, duration: 3, hashtags: ["#vacation", "#explore", "#citytour"], city: "64fa501d4bbe915a1f740599", description: "A fun vacation in Guatemala City, including a city tour and exploration.", photo: "https://i.pinimg.com/736x/fa/b6/58/fab658ad3fe152881985f4e41403f22f.jpg" },
  { userName: "Sandra Ortiz", userPhoto: "https://robohash.org/sandraortiz.png", price: 4, duration: 2, hashtags: ["#adventure", "#vacation", "#local"], city: "64fa501d4bbe915a1f740599", description: "An adventurous yet relaxing vacation in Guatemala City, exploring local spots." , photo: "https://i.pinimg.com/736x/fa/b6/58/fab658ad3fe152881985f4e41403f22f.jpg" },

  // San Salvador
  { userName: "Jorge Pérez", userPhoto: "https://robohash.org/jorgeperez.png", price: 3, duration: 3, hashtags: ["#explore", "#adventure", "#culture"], city: "64fa501d4bbe915a1f74059a", description: "Experience adventure and culture on a tour through San Salvador.", photo: "https://i.pinimg.com/736x/ec/e2/a6/ece2a6c1bfe263bcc8fc8627b0105731.jpg" },
  { userName: "Lucía González", userPhoto: "https://robohash.org/luciagonzalez.png", price: "2", duration: 4, hashtags: ["#explore", "#history", "#culture"], city: "64fa501d4bbe915a1f74059a", description: "Explore San Salvador’s rich history and vibrant culture on a walking tour.", photo: "https://i.pinimg.com/736x/ec/e2/a6/ece2a6c1bfe263bcc8fc8627b0105731.jpg" }
];

  Itinerary.insertMany(itineraries)
  .then(() => {
    console.log('Itinerarios insertados correctamente');
  })
  .catch(error => {
    console.error('Error al insertar itinerarios:', error);
  });
