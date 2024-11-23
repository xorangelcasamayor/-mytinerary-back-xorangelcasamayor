import {Schema,model} from "mongoose";

let collectionUsers = 'users'
let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photoUrl: { type: String, default: null },
    country: { type: String, required: true }
},{
    timestamps:true
})

let User = model(collectionUsers,schema)
export default User