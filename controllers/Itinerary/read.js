import Itinerary from '../../models/Itinerary.js';
import '../../models/City.js';


let getAllItineraries = async (req, res, next) => {
  try {
    let { city } = req.query; 
    let query = {};
    
    if (city) {
      query.city = city; 
    }

    let itineraries = await Itinerary.find(query).populate('city', 'country').exec()
    return res.status(200).json({
      response: itineraries
    });
  } catch (error) {
    next(error); 
  }
};


let getItinerariesByCity = async (req, res, next) => {
  try {
   
    let name = req.params.itinerary;
    console.log(req.params);
    
    let all = await Itinerary.find({ city: name});
    console.log(all);
    
    return res.status(200).json({
      
      response:  all
    });

  } catch (error) {
    next(error); 
  }
};


let itineraryById = async (req, res, next) => {
  try {
   let roleQuery = req.params.id
    let itinerary = await Itinerary.findById(roleQuery);
    
    return res.status(200).json({
      response: itinerary
    });
  } catch (error) {
    next(error); 
  }
};

export { getAllItineraries, getItinerariesByCity, itineraryById };


