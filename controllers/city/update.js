import { response } from "express";
import City from "../../models/City.js";


const updateCity = async (req, res, next) => {
    try {
        let city = req.body
      let upd = await City.updateOne(
            { _id: req.params._id },
            {itineraries: city.itineraries }
        )
        if (upd) {
            return res.status(200).json({
                response: upd
             });
           
        }  else{

        }


    } catch (error) {
        next(error);
    }}
    export {updateCity}