import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

function coneccionBaseDedatos(params) {
    try {
        mongoose.connect(process.env.URI_MONGO) 
        .then(()=>console.log("conectado a la base de datos"))
        .catch(error=>console.log(error))
    } catch (error) {
        console.log(error);
    }
    
}

coneccionBaseDedatos()