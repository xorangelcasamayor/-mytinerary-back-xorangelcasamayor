import User from "../models/User.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcryptjs from "bcryptjs";
export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENTE_ID,
            clientSecret: process.env.GOOGLE_CLIENTE_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK,
        },
        async (accessToken, refreshToken, profile, done) => {


            try {
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {

                    let hashPassword =  bcryptjs.hashSync(
                        profile.id,
                        10
                    )
                    user = new User({
                        name: profile.name.givenName,
                        lastName: profile.name.familyName,
                        password: profile.id,
                        country:null,
                        email: profile.emails[0].value,
                        photoUrl: profile.photos[0].value,

                    });
                    await user.save();
                    console.log(user, "se creo un nuevo usuario");
                    
                }

                console.log(user, "se encontro un usuario");
                
                return done(null, user);

            } catch (error) {
                return done(error, null);

            }

        }
    )
)
