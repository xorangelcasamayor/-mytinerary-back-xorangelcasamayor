import { Router } from "express";
import { signIn, verificacionToken } from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js"; 
import passport from "../middlewares/passport.js";  
import signOut from "../controllers/auth/signout.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";


const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist ,isValidadPassword,generateToken,signIn)
routerAuth.get('/validateToken',passport.authenticate('jwt',{session:false}),verificacionToken)
routerAuth.post('/signOut',passport.authenticate('jwt',{session:false}),signOut)
routerAuth.get('/signIn/google',passportGoogle.authenticate('google',{scope: ['profile', 'email'],session: false})) 
routerAuth.get('/signIn/google/callback',passportGoogle.authenticate('google',{session: false,failureRedirect: '/login'}),generateToken,signInGoogle)
export default routerAuth