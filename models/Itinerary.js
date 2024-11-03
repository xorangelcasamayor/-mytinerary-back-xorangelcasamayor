import { Schema, model } from "mongoose";

const collectionItineraries = 'itineraries';

const itinerarySchema = new Schema({
  userName: { type: String, required: true },
  userPhoto: { type: String, required: true },
  price: { type: Number, min: 1, max: 5, required: true },
  duration: { type: Number, required: true },
  hashtags: [{ type: String }], 
  city: { type: Schema.Types.ObjectId, ref: "cities",required: true }, 
}, {
  timestamps: true 
});

const Itinerary = model(collectionItineraries, itinerarySchema);
export default Itinerary;
