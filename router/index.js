
import { Router } from 'express';
import cityRouter from './cities.js';
import itineraryRouter from './itineraryRoutes.js'; 

const router = Router();


router.use('/cities', cityRouter);


router.use('/itineraries', itineraryRouter); 

export default router;
