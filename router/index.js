import { Router } from "express";
import cityRouter from "./cities.js";        


const router = Router(); 


router.use('/cities', cityRouter);


export default router; 
