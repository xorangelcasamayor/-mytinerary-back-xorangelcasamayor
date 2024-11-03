import Itinerary from '../../models/Itinerary.js';

let createItinerary = async (req, res, next) => {

  try {
    let itineraries = req.body
    let allitinearies = await Itinerary.create(itineraries)
   return res.status(201).json(
    {response:allitinearies
    
  })
    
  } catch (error) {
    next(error);
  }
};




export { createItinerary };
