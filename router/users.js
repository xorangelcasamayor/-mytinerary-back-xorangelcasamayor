import { Router } from "express";
import {allUser,userById}  from "../controllers/user/read.js";
import register from "../controllers/user/register.js";
import { update } from "../controllers/user/update.js";
import { deleteOne } from "../controllers/user/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const routerUsers = Router()

routerUsers.get('/all',passport.authenticate('jwt',{session:false}), allUser)

routerUsers.get('/id/:id',passport.authenticate('jwt',{session:false}),userById)
routerUsers.post('/register',validator(schemaUsersCreated),accountExists,createHash,register)
routerUsers.put('/update',passport.authenticate('jwt',{session:false}),update)
routerUsers.delete('/deleteOne',passport.authenticate('jwt',{session:false}),deleteOne)

export default routerUsers