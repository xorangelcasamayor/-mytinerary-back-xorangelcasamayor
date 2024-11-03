import { Schema, model } from "mongoose";

let collection = "cities";
let schema = new Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    foundation: { type: Date, required: true },
    population: { type: Number, required: true },
    likes: { type: Number, default: 0 }, 
   
}, {
    timestamps: true
});

let City = model(collection, schema);
export default City;
