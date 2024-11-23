import { Router } from "express";
import { getAllActivities, getActivitiesByCity,getActivityById } from "../controllers/activity/read.js";
import { createActivity } from "../controllers/Activity/create.js";
import { deleteActivity } from "../controllers/Activity/delete.js";
import { updateActivity } from "../controllers/Activity/update.js";

const routerActivities = Router();

routerActivities.get('/all', getAllActivities);
routerActivities.get('/activity/:activity', getActivitiesByCity);
routerActivities.get('/id/:id', getActivityById);
routerActivities.post('/create', createActivity);
routerActivities.put('/update/:id', updateActivity);
routerActivities.delete('/delete/:id', deleteActivity);

export default routerActivities;