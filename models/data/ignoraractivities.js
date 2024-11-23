  
import 'dotenv/config.js';
import '../../config/database.js';
import Activity from '../ingnorarActivity.js';


let activities = [
    {
      name: "Cultural Walking Tour",
      description: "A walking tour through the historic parts of Buenos Aires, exploring iconic landmarks.",
      location: "Buenos Aires, Argentina",
      schedule: "Morning",
      city: "64fa501d4bbe915a1f740580",  // ID de Buenos Aires
      itineraries: ["673c2fad1514a77480095125"],  // ID de itinerario
      image: "https://robohash.org/culturaltour.png"
    },
    {
      name: "Urban Adventure",
      description: "Discover the urban culture and nightlife of São Paulo through this guided experience.",
      location: "São Paulo, Brasil",
      schedule: "Evening",
      city: "64fa501d4bbe915a1f740581",  // ID de São Paulo
      itineraries: ["673c2fad1514a77480095126"],  // ID de itinerario
      image: "https://robohash.org/urbanadventure.png"
    },
    {
      name: "Historical Sites Tour",
      description: "Visit the most important historical sites in Mexico City, including museums and monuments.",
      location: "Mexico City, México",
      schedule: "Morning",
      city: "64fa501d4bbe915a1f740582",  // ID de Ciudad de México
      itineraries: ["673c2fad1514a77480095127"],  // ID de itinerario
      image: "https://robohash.org/historicalsites.png"
    },
    {
      name: "Nature and Hiking Expedition",
      description: "An adventurous day trip to the mountains around Bogotá, Colombia, perfect for nature lovers.",
      location: "Bogotá, Colombia",
      schedule: "Full Day",
      city: "64fa501d4bbe915a1f740583",  // ID de Bogotá
      itineraries: ["673c2fad1514a77480095128"],  // ID de itinerario
      image: "https://robohash.org/naturehiking.png"
    },
    {
      name: "Museum and Culture Walk",
      description: "A cultural tour that takes you through the best museums and galleries of Lima, Peru.",
      location: "Lima, Perú",
      schedule: "Afternoon",
      city: "64fa501d4bbe915a1f740584",  // ID de Lima
      itineraries: ["673c2fad1514a77480095129"],  // ID de itinerario
      image: "https://robohash.org/museumwalk.png"
    },
    {
      name: "Explore Santiago's Landmarks",
      description: "Explore the iconic landmarks and history of Santiago, Chile, including its ancient buildings and parks.",
      location: "Santiago, Chile",
      schedule: "Morning",
      city: "64fa501d4bbe915a1f740585",  // ID de Santiago
      itineraries: ["673c2fad1514a7748009512a"],  // ID de itinerario
      image: "https://robohash.org/exploresantiago.png"
    },
    {
      name: "Relax at Montevideo Beaches",
      description: "Enjoy a relaxing day at the beautiful beaches of Montevideo, Uruguay, with a light cultural experience.",
      location: "Montevideo, Uruguay",
      schedule: "All day",
      city: "64fa501d4bbe915a1f740586",  // ID de Montevideo
      itineraries: ["673c2fad1514a7748009512b"],  // ID de itinerario
      image: "https://robohash.org/montevideobeaches.png"
    },
    {
      name: "City and Culture in Quito",
      description: "Take a cultural walking tour through the historic neighborhoods of Quito, Ecuador.",
      location: "Quito, Ecuador",
      schedule: "Morning",
      city: "64fa501d4bbe915a1f740587",  // ID de Quito
      itineraries: ["673c2fad1514a7748009512c"],  // ID de itinerario
      image: "https://robohash.org/quitoculture.png"
    },
    {
      name: "Adventure in the Andes",
      description: "Explore the breathtaking views and hiking trails in the Andes mountains near La Paz, Bolivia.",
      location: "La Paz, Bolivia",
      schedule: "Full Day",
      city: "64fa501d4bbe915a1f740589",  // ID de La Paz
      itineraries: ["673c2fad1514a7748009512d"],  // ID de itinerario
      image: "https://robohash.org/andesadventure.png"
    },
    {
      name: "Cultural Exploration in Asunción",
      description: "Discover the local culture, markets, and traditions of Asunción, Paraguay.",
      location: "Asunción, Paraguay",
      schedule: "Afternoon",
      city: "64fa501d4bbe915a1f74058a",  // ID de Asunción
      itineraries: ["673c2fad1514a7748009512e"],  // ID de itinerario
      image: "https://robohash.org/asuncionexplore.png"
    },
    {
      name: "Cultural & Adventure Tour in Cuzco",
      description: "Experience both the cultural richness and adventurous spirit of Cuzco, Peru, on this tour.",
      location: "Cuzco, Perú",
      schedule: "Full Day",
      city: "64fa501d4bbe915a1f74058b",  // ID de Cuzco
      itineraries: ["673c2fad1514a7748009512f"],  // ID de itinerario
      image: "https://robohash.org/cuzcoadventure.png"
    },
    {
      name: "Medellín City Tour",
      description: "Explore the beautiful city of Medellín, Colombia, and learn about its history and culture.",
      location: "Medellín, Colombia",
      schedule: "Morning",
      city: "64fa501d4bbe915a1f74058c",  // ID de Medellín
      itineraries: ["673c2fad1514a77480095130"],  // ID de itinerario
      image: "https://robohash.org/medellincitytour.png"
    },
    {
      name: "Rio de Janeiro Adventure",
      description: "Experience Rio de Janeiro's lively culture and adventurous activities like hiking and sightseeing.",
      location: "Rio de Janeiro, Brasil",
      schedule: "Afternoon",
      city: "64fa501d4bbe915a1f74058d",  // ID de Rio de Janeiro
      itineraries: ["673c2fad1514a77480095131"],  // ID de itinerario
      image: "https://robohash.org/riodejaneiroadventure.png"
    },
    {
      name: "Cuban Beach Relaxation",
      description: "Relax on Cuba's beautiful beaches while learning about its rich cultural history.",
      location: "Havana, Cuba",
      schedule: "All day",
      city: "64fa501d4bbe915a1f74058e",  // ID de La Habana
      itineraries: ["673c2fad1514a77480095132"],  // ID de itinerario
      image: "https://robohash.org/cubanbeach.png"
    },
    {
      name: "Buenos Aires City Exploration",
      description: "Tour the beautiful city of Buenos Aires, visiting parks, museums, and local landmarks.",
      location: "Buenos Aires, Argentina",
      schedule: "Full Day",
      city: "67292d22052e4240f3e1b7f6",  // ID de Buenos Aires
      itineraries: ["673c2fad1514a77480095133"],  // ID de itinerario
      image: "https://robohash.org/buenosairesexplore.png"
    },
        {
          name: "Cultural Walking Tour",
          description: "A walking tour through the historic parts of Buenos Aires, exploring iconic landmarks.",
          location: "Buenos Aires, Argentina",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f740580",  // ID de Buenos Aires
          itineraries: ["673c2fad1514a77480095125"],  // ID de itinerario
          image: "https://robohash.org/culturaltour.png"
        },
        {
          name: "Urban Adventure",
          description: "Discover the urban culture and nightlife of São Paulo through this guided experience.",
          location: "São Paulo, Brasil",
          schedule: "Evening",
          city: "64fa501d4bbe915a1f740581",  // ID de São Paulo
          itineraries: ["673c2fad1514a77480095126"],  // ID de itinerario
          image: "https://robohash.org/urbanadventure.png"
        },
        {
          name: "Historical Sites Tour",
          description: "Visit the most important historical sites in Mexico City, including museums and monuments.",
          location: "Mexico City, México",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f740582",  // ID de Ciudad de México
          itineraries: ["673c2fad1514a77480095127"],  // ID de itinerario
          image: "https://robohash.org/historicalsites.png"
        },
        {
          name: "Nature and Hiking Expedition",
          description: "An adventurous day trip to the mountains around Bogotá, Colombia, perfect for nature lovers.",
          location: "Bogotá, Colombia",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740583",  // ID de Bogotá
          itineraries: ["673c2fad1514a77480095128"],  // ID de itinerario
          image: "https://robohash.org/naturehiking.png"
        },
        {
          name: "Museum and Culture Walk",
          description: "A cultural tour that takes you through the best museums and galleries of Lima, Peru.",
          location: "Lima, Perú",
          schedule: "Afternoon",
          city: "64fa501d4bbe915a1f740584",  // ID de Lima
          itineraries: ["673c2fad1514a77480095129"],  // ID de itinerario
          image: "https://robohash.org/museumwalk.png"
        },
        {
          name: "Explore Santiago's Landmarks",
          description: "Explore the iconic landmarks and history of Santiago, Chile, including its ancient buildings and parks.",
          location: "Santiago, Chile",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f740585",  // ID de Santiago
          itineraries: ["673c2fad1514a7748009512a"],  // ID de itinerario
          image: "https://robohash.org/exploresantiago.png"
        },
        {
          name: "Relax at Montevideo Beaches",
          description: "Enjoy a relaxing day at the beautiful beaches of Montevideo, Uruguay, with a light cultural experience.",
          location: "Montevideo, Uruguay",
          schedule: "All day",
          city: "64fa501d4bbe915a1f740586",  // ID de Montevideo
          itineraries: ["673c2fad1514a7748009512b"],  // ID de itinerario
          image: "https://robohash.org/montevideobeaches.png"
        },
        {
          name: "City and Culture in Quito",
          description: "Take a cultural walking tour through the historic neighborhoods of Quito, Ecuador.",
          location: "Quito, Ecuador",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f740587",  // ID de Quito
          itineraries: ["673c2fad1514a7748009512c"],  // ID de itinerario
          image: "https://robohash.org/quitoculture.png"
        },
        {
          name: "Adventure in the Andes",
          description: "Explore the breathtaking views and hiking trails in the Andes mountains near La Paz, Bolivia.",
          location: "La Paz, Bolivia",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740589",  // ID de La Paz
          itineraries: ["673c2fad1514a7748009512d"],  // ID de itinerario
          image: "https://robohash.org/andesadventure.png"
        },
        {
          name: "Cultural Exploration in Asunción",
          description: "Discover the local culture, markets, and traditions of Asunción, Paraguay.",
          location: "Asunción, Paraguay",
          schedule: "Afternoon",
          city: "64fa501d4bbe915a1f74058a",  // ID de Asunción
          itineraries: ["673c2fad1514a7748009512e"],  // ID de itinerario
          image: "https://robohash.org/asuncionexplore.png"
        },
        {
          name: "Cultural & Adventure Tour in Cuzco",
          description: "Experience both the cultural richness and adventurous spirit of Cuzco, Peru, on this tour.",
          location: "Cuzco, Perú",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f74058b",  // ID de Cuzco
          itineraries: ["673c2fad1514a7748009512f"],  // ID de itinerario
          image: "https://robohash.org/cuzcoadventure.png"
        },
        {
          name: "Medellín City Tour",
          description: "Explore the beautiful city of Medellín, Colombia, and learn about its history and culture.",
          location: "Medellín, Colombia",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f74058c",  // ID de Medellín
          itineraries: ["673c2fad1514a77480095130"],  // ID de itinerario
          image: "https://robohash.org/medellincitytour.png"
        },
        {
          name: "Rio de Janeiro Adventure",
          description: "Experience Rio de Janeiro's lively culture and adventurous activities like hiking and sightseeing.",
          location: "Rio de Janeiro, Brasil",
          schedule: "Afternoon",
          city: "64fa501d4bbe915a1f74058d",  // ID de Rio de Janeiro
          itineraries: ["673c2fad1514a77480095131"],  // ID de itinerario
          image: "https://robohash.org/riodejaneiroadventure.png"
        },
        {
          name: "Cuban Beach Relaxation",
          description: "Relax on Cuba's beautiful beaches while learning about its rich cultural history.",
          location: "Havana, Cuba",
          schedule: "All day",
          city: "64fa501d4bbe915a1f74058e",  // ID de La Habana
          itineraries: ["673c2fad1514a77480095132"],  // ID de itinerario
          image: "https://robohash.org/cubanbeach.png"
        },
        {
          name: "Buenos Aires City Exploration",
          description: "Tour the beautiful city of Buenos Aires, visiting parks, museums, and local landmarks.",
          location: "Buenos Aires, Argentina",
          schedule: "Full Day",
          city: "67292d22052e4240f3e1b7f6",  // ID de Buenos Aires
          itineraries: ["673c2fad1514a77480095133"],  // ID de itinerario
          image: "https://robohash.org/buenosairesexplore.png"
        },
        {
          name: "Gastronomy Tour in São Paulo",
          description: "Taste the diverse and vibrant food of São Paulo with this food tour.",
          location: "São Paulo, Brasil",
          schedule: "Afternoon",
          city: "64fa501d4bbe915a1f740581",  // ID de São Paulo
          itineraries: ["673c2fad1514a77480095134"],  // ID de itinerario
          image: "https://robohash.org/gastronomysp.png"
        },
        {
          name: "Tulum Adventure",
          description: "Explore the stunning beaches and historic ruins around Mexico City.",
          location: "Mexico City, México",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740582",  // ID de Ciudad de México
          itineraries: ["673c2fad1514a77480095135"],  // ID de itinerario
          image: "https://robohash.org/tulumadventure.png"
        },
        {
          name: "Andes Culture and Hiking",
          description: "Explore the culture and beauty of the Andes near Bogotá, Colombia, on this hiking tour.",
          location: "Bogotá, Colombia",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740583",  // ID de Bogotá
          itineraries: ["673c2fad1514a77480095136"],  // ID de itinerario
          image: "https://robohash.org/andesbogota.png"
        },
        {
          name: "Peruvian Food Tour",
          description: "Enjoy a culinary tour through the heart of Lima, tasting traditional Peruvian dishes.",
          location: "Lima, Perú",
          schedule: "Evening",
          city: "64fa501d4bbe915a1f740584",  // ID de Lima
          itineraries: ["673c2fad1514a77480095137"],  // ID de itinerario
          image: "https://robohash.org/peruvianfood.png"
        },
        {
          name: "Chilean Wine Tasting",
          description: "Experience a wine-tasting tour through the best wineries of Santiago, Chile.",
          location: "Santiago, Chile",
          schedule: "Afternoon",
          city: "64fa501d4bbe915a1f740585",  // ID de Santiago
          itineraries: ["673c2fad1514a77480095138"],  // ID de itinerario
          image: "https://robohash.org/chileanwines.png"
        },
        {
          name: "Montevideo Architecture Tour",
          description: "Tour the diverse architectural styles of Montevideo, Uruguay, from colonial to modern.",
          location: "Montevideo, Uruguay",
          schedule: "Morning",
          city: "64fa501d4bbe915a1f740586",  // ID de Montevideo
          itineraries: ["673c2fad1514a77480095139"],  // ID de itinerario
          image: "https://robohash.org/montevideotour.png"
        },
        {
          name: "Quito Adventure",
          description: "Discover the landscapes of Quito, Ecuador, with a guided hike through the surrounding mountains.",
          location: "Quito, Ecuador",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740587",  // ID de Quito
          itineraries: ["673c2fad1514a7748009513a"],  // ID de itinerario
          image: "https://robohash.org/quitoadventure.png"
        },
        {
          name: "La Paz City & Nature Tour",
          description: "Tour the urban areas of La Paz, Bolivia, and enjoy a day of exploration in nature.",
          location: "La Paz, Bolivia",
          schedule: "Full Day",
          city: "64fa501d4bbe915a1f740589",  // ID de La Paz
          itineraries: ["673c2fad1514a7748009513b"],  // ID de itinerario
          image: "https://robohash.org/lapazcitynature.png"
        },
            {
              name: "Night Tour Buenos Aires",
              description: "Un recorrido nocturno para ver los monumentos iluminados de Buenos Aires.",
              location: "Buenos Aires, Argentina",
              schedule: "Night",
              city: "64fa501d4bbe915a1f740580",
              itineraries: ["673c2fad1514a77480095125"],
              image: "https://example.com/images/night_tour_buenos_aires.jpg"
            },
            {
              name: "São Paulo Street Art Tour",
              description: "Recorrido por las principales obras de arte urbano en São Paulo.",
              location: "São Paulo, Brasil",
              schedule: "Afternoon",
              city: "64fa501d4bbe915a1f740581",
              itineraries: ["673c2fad1514a77480095126"],
              image: "https://example.com/images/street_art_sao_paulo.jpg"
            },
            {
              name: "Cultural Exploration Mexico City",
              description: "Explora los museos y galerías más importantes de la Ciudad de México.",
              location: "Mexico City, México",
              schedule: "Full Day",
              city: "64fa501d4bbe915a1f740582",
              itineraries: ["673c2fad1514a77480095127"],
              image: "https://example.com/images/cultural_exploration_mexico_city.jpg"
            },
            {
              name: "Botanical Gardens Bogotá",
              description: "Visita los hermosos jardines botánicos en Bogotá.",
              location: "Bogotá, Colombia",
              schedule: "Morning",
              city: "64fa501d4bbe915a1f740583",
              itineraries: ["673c2fad1514a77480095128"],
              image: "https://example.com/images/botanical_gardens_bogota.jpg"
            },
            {
              name: "Lima's Historic Downtown",
              description: "Recorrido por el centro histórico de Lima, Perú, patrimonio mundial.",
              location: "Lima, Perú",
              schedule: "Evening",
              city: "64fa501d4bbe915a1f740584",
              itineraries: ["673c2fad1514a77480095129"],
              image: "https://example.com/images/lima_historic_downtown.jpg"
            },
            {
              name: "Andean Adventure Santiago",
              description: "Aventura en las montañas de los Andes, cerca de Santiago.",
              location: "Santiago, Chile",
              schedule: "Full Day",
              city: "64fa501d4bbe915a1f740585",
              itineraries: ["673c2fad1514a77480095130"],
              image: "https://example.com/images/andean_adventure_santiago.jpg"
            },
            {
              name: "Montevideo Nightlife Tour",
              description: "Explora la vida nocturna de Montevideo, con visitas a bares y clubes.",
              location: "Montevideo, Uruguay",
              schedule: "Night",
              city: "64fa501d4bbe915a1f740586",
              itineraries: ["673c2fad1514a77480095131"],
              image: "https://example.com/images/nightlife_tour_montevideo.jpg"
            },
            {
              name: "Quito City View",
              description: "Sube al Teleférico y disfruta de vistas impresionantes de Quito.",
              location: "Quito, Ecuador",
              schedule: "All day",
              city: "64fa501d4bbe915a1f740587",
              itineraries: ["673c2fad1514a77480095132"],
              image: "https://example.com/images/quito_city_view.jpg"
            },
            {
              name: "Caracas Mountain Escapade",
              description: "Escapada a las montañas alrededor de Caracas, perfecta para un día de naturaleza.",
              location: "Caracas, Venezuela",
              schedule: "All day",
              city: "64fa501d4bbe915a1f740588",
              itineraries: ["673c2fad1514a77480095133"],
              image: "https://example.com/images/caracas_mountain.jpg"
            },
            {
              name: "La Paz Historical Walking Tour",
              description: "Recorrido histórico por La Paz, Bolivia, visitando sitios emblemáticos.",
              location: "La Paz, Bolivia",
              schedule: "Morning",
              city: "64fa501d4bbe915a1f740589",
              itineraries: ["673c2fad1514a77480095134"],
              image: "https://example.com/images/la_paz_walking_tour.jpg"
            },
            {
              name: "Asunción Market Exploration",
              description: "Visita al Mercado 4 de Asunción, donde podrás comprar artesanías y productos locales.",
              location: "Asunción, Paraguay",
              schedule: "Afternoon",
              city: "64fa501d4bbe915a1f74058a",
              itineraries: ["673c2fad1514a77480095135"],
              image: "https://example.com/images/asuncion_market.jpg"
            },
            {
              name: "Cuzco Inca Trail",
              description: "Caminata por el famoso Camino Inca, explorando ruinas arqueológicas.",
              location: "Cuzco, Perú",
              schedule: "Full Day",
              city: "64fa501d4bbe915a1f74058b",
              itineraries: ["673c2fad1514a77480095136"],
              image: "https://example.com/images/inca_trail_cuzco.jpg"
            },
            {
              name: "Medellín Botanical Gardens",
              description: "Relájate en los hermosos jardines botánicos de Medellín.",
              location: "Medellín, Colombia",
              schedule: "Morning",
              city: "64fa501d4bbe915a1f74058c",
              itineraries: ["673c2fad1514a77480095137"],
              image: "https://example.com/images/medellin_botanical_gardens.jpg"
            },
            {
              name: "Sugarloaf Mountain Rio de Janeiro",
              description: "Disfruta de la vista panorámica desde el cerro Pan de Azúcar en Río.",
              location: "Rio de Janeiro, Brasil",
              schedule: "All day",
              city: "64fa501d4bbe915a1f74058d",
              itineraries: ["673c2fad1514a77480095138"],
              image: "https://example.com/images/sugarloaf_mountain_rio.jpg"
            },
            {
              name: "Cuban Music Tour Havana",
              description: "Disfruta de una experiencia musical única en La Habana.",
              location: "Havana, Cuba",
              schedule: "Evening",
              city: "64fa501d4bbe915a1f74058e",
              itineraries: ["673c2fad1514a77480095139"],
              image: "https://example.com/images/cuban_music_havana.jpg"
            },
            {
              name: "Buenos Aires Tango Show",
              description: "Asiste a un espectáculo de tango en el corazón de Buenos Aires.",
              location: "Buenos Aires, Argentina",
              schedule: "Night",
              city: "64fa501d4bbe915a1f740580",
              itineraries: ["673c2fad1514a77480095125"],
              image: "https://example.com/images/tango_show_buenos_aires.jpg"
            },
            {
              name: "São Paulo Museum Visit",
              description: "Visita al Museo de Arte de São Paulo (MASP), uno de los más importantes de Brasil.",
              location: "São Paulo, Brasil",
              schedule: "Morning",
              city: "64fa501d4bbe915a1f740581",
              itineraries: ["673c2fad1514a77480095126"],
              image: "https://example.com/images/masp_sao_paulo.jpg"
            },
            {
              name: "Mexico City Night Lights",
              description: "Un tour nocturno por los edificios iluminados de la Ciudad de México.",
              location: "Mexico City, México",
              schedule: "Night",
              city: "64fa501d4bbe915a1f740582",
              itineraries: ["673c2fad1514a77480095127"],
              image: "https://example.com/images/mexico_city_night_lights.jpg"
            },
            {
              name: "Bogotá Museums Tour",
              description: "Recorrido por los principales museos de Bogotá, incluyendo el Museo del Oro.",
              location: "Bogotá, Colombia",
              schedule: "Full Day",
              city: "64fa501d4bbe915a1f740583",
              itineraries: ["673c2fad1514a77480095128"],
              image: "https://example.com/images/bogota_museums.jpg"
            },
            {
              name: "Lima Beach Day",
              description: "Disfruta de un día en la playa en las costas de Lima.",
              location: "Lima, Perú",
              schedule: "All day",
              city: "64fa501d4bbe915a1f740584",
              itineraries: ["673c2fad1514a77480095129"],
              image: "https://example.com/images/lima_beach_day.jpg"
            },
            {
              name: "Santiago Local Cuisine",
              description: "Tour gastronómico para probar los platos típicos de Santiago.",
              location: "Santiago, Chile",
              schedule: "Afternoon",
              city: "64fa501d4bbe915a1f740585",
              itineraries: ["673c2fad1514a77480095130"],
              image: "https://example.com/images/santiago_local_cuisine.jpg"
            },
            {
              name: "Montevideo Historic Sites",
              description: "Visita a los principales sitios históricos de Montevideo.",
              location: "Montevideo, Uruguay",
              schedule: "Morning",
              city: "64fa501d4bbe915a1f740586",
              itineraries: ["673c2fad1514a77480095131"],
              image: "https://example.com/images/montevideo_historic_sites.jpg"
            },
            {
              name: "Quito Historic Church Tour",
              description: "Visita a las iglesias más emblemáticas de Quito.",
              location: "Quito, Ecuador",
              schedule: "Afternoon",
              city: "64fa501d4bbe915a1f740587",
              itineraries: ["673c2fad1514a77480095132"],
              image: "https://example.com/images/quito_churches.jpg"
            }
         
          
  ]
  
      

      Activity.insertMany(activities)
        .then(() => {
          console.log('Activities seeded successfully');
        })
        .catch((error) => {
          console.error('Error seeding activities:', error);
        });
      