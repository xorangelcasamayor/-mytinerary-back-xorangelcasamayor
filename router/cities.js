import { Router } from "express";
import { allCities, getCity, cityById } from "../controllers/city/read.js";
import { createCity,createAllCities } from "../controllers/city/create.js";

const router=Router();

router.get('/all',allCities)
router.get('/name/:city',getCity)
router.get('/id/:id',cityById)
router.post('/create',createCity)
router.post('/createAll',createAllCities)
export default router