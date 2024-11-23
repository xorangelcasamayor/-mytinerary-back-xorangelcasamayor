import { Schema, model } from "mongoose";


let collectionActivities = 'activities';

let activitySchema = new Schema({
  name: {type: String,required: true,trim: true},
  description: { type: String,required: true,trim: true },
  location: { type: String,required: true},
  schedule: {type: String,required: true,enum: ['Morning', 'Afternoon', 'Night', 'All day','Evening','Full Day']},
  city: {type: Schema.Types.ObjectId, ref: 'cities',required: true  },
  itineraries: [{type: Schema.Types.ObjectId,ref: 'itineraries'}],
  image: {type: String,required:true },
}, {
  timestamps: true 
});



let Activity = model(collectionActivities, activitySchema);
export default Activity;
