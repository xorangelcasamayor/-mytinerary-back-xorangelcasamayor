import City from "../../models/City.js";

let createCity = async (req,res,next) =>{
    try {
        let cities = req.body
        let all = await City.create(cities)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let createAllCities = async (req,res,next) =>{
    try {
        let cities= req.body
        let all = await City.insertMany(cities)
        return res.status(201).json({ response: all});
        
    } catch (error) {
        next(error);
    }    
};


export {createCity,createAllCities}

