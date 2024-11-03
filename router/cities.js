import { Router } from "express";
import { allCities, getCity, cityById } from "../controllers/city/read.js";
import { createCity,createAllCities } from "../controllers/city/create.js";
import {updateCity} from "../controllers/city/update.js"
import { deleteCity } from "../controllers/city/delete.js";

const router=Router();

router.get('/all',allCities)
router.get('/name/:city',getCity)
router.get('/id/:id',cityById)
router.post('/create',createCity)
router.post('/createAll',createAllCities)
router.put('/update/:id',updateCity)
router.delete('/delete/:id',deleteCity)

export default router