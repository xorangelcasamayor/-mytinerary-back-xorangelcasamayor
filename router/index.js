
import { Router } from 'express';
import cityRouter from './cities.js';
import itineraryRouter from './itineraryRoutes.js'; 

import usersRouter from './users.js'
import auth from './auth.js'
const router = Router();


router.use('/cities', cityRouter);

router.use('/users', usersRouter)
router.use('/itineraries', itineraryRouter); 
router.use('/auth', auth)


export default router;
