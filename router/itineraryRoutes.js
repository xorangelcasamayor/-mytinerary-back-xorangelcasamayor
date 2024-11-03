import { Router } from "express";
import { getAllItineraries, getItinerariesByCity, itineraryById } from "../controllers/Itinerary/read.js"; 
import { createItinerary } from "../controllers/itinerary/create.js";
import { deleteItinerary } from "../controllers/Itinerary/delete.js";
import { updateItinerary } from "../controllers/Itinerary/update.js";


const routerItinerary = Router();

routerItinerary.get('/all', getAllItineraries); 
routerItinerary.get('/itinerary/:itinerary', getItinerariesByCity);
routerItinerary.get('/id/:id', itineraryById); 
routerItinerary.post('/create', createItinerary); 
routerItinerary.put('/update/:id', updateItinerary); 
routerItinerary.delete('/delete/:id', deleteItinerary); 

export default routerItinerary;
