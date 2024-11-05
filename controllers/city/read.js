
import City from "../../models/City.js";


let allCities = async (req,res,next) => {
    try {

     let {city}=req.query
     console.log(city);
     
     let query = {}
     if (city) {
        query.city = { $regex:'^'+ city+'.*', $options: "i" };
     }
        
        let all = await  City.find(query)

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}
let getCity = async (req, res, next) => {
    try {
        console.log(req.params);
        
        let name = req.params.city;
        let all = await City.find({ city: name });
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error); 
    }
};

let cityById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  City.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}



export { allCities, getCity, cityById } 
