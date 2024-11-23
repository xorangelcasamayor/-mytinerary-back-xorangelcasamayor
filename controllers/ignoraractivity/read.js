// import Activity from "../../models/Activity.js";
// import "../../models/Itinerary.js";
// import "../../models/City.js";

// let getAllActivities = async (req, res, next) => {
//   try {
//     let { itinerary } = req.query;
//     let query = {};

//     if (itinerary) {
//       query.itineraries = itinerary; // Cambié 'itinerary' a 'itineraries' ya que es el campo en el modelo de Activity
//     }

//     // Buscar actividades, y poblar las referencias de itinerarios y ciudad
//     const activities = await Activity.find(query)
//       .populate("itineraries", " userName") // Poblar los itinerarios asociados
//       .populate("city", "description")
//       .exec();

//     return res.status(200).json({
//       response: activities,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Obtener actividades por ciudad
// let getActivitiesByCity = async (req, res, next) => {
//   try {
//     console.log(req.params); // Para depuración

//     let { city } = req.params; // Usar 'city' en lugar de 'activity'
//     let all = await Activity.find({ city: city }); // Filtrar por ciudad

//     console.log(all); // Para depuración

//     return res.status(200).json({
//       response: all,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Obtener actividad por ID
// let getActivityById = async (req, res, next) => {
//   try {
//     const { id } = req.params; // ID de la actividad
//     const activity = await Activity.findById(id)
//       .populate("itineraries", "userName") // Poblar los itinerarios asociados
//       .populate("city", "description")
//       .exec();

//     return res.status(200).json({
//       response: activity,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export { getAllActivities, getActivityById, getActivitiesByCity };

import Activity from "../../models/Activity.js";
import  "../../models/Itinerary.js";
import '../../models/City.js';

let getAllActivities = async (req, res, next) => {
  try {
    let { itinerary } = req.query;
    let query = {};

    if (itinerary) {
      query.itineraries = itinerary; // Cambié 'itinerary' a 'itineraries' ya que es el campo en el modelo de Activity
    }

    // Buscar actividades, y poblar las referencias de itinerarios y ciudad
    const activities = await Activity.find(query)
      .populate("itineraries", " userName") // Poblar los itinerarios asociados
      .populate("city", "description")
      .exec();

    return res.status(200).json({
      response: activities,
    });
  } catch (error) {
    next(error);
  }
};

// Obtener actividades por ciudad
let getActivitiesByCity = async (req, res, next) => {
  try {
    console.log(req.params); // Para depuración

    let { city } = req.params; // Usar 'city' en lugar de 'activity'
    let all = await Activity.find({ city: city }); // Filtrar por ciudad

    console.log(all); // Para depuración

    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error);
  }
};

// Obtener actividad por ID
let getActivityById = async (req, res, next) => {
  try {
    const { id } = req.params; // ID de la actividad
    const activity = await Activity.findById(id)
      .populate("itineraries", "userName") // Poblar los itinerarios asociados
      .populate("city", "description")
      .exec();

    return res.status(200).json({
      response: activity,
    });
  } catch (error) {
    next(error);
  }
};

export { getAllActivities, getActivityById, getActivitiesByCity };

