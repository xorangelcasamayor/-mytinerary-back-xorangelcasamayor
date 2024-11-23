
import User from "../../models/User.js";

const signInGoogle = async (req, res, next) => {
    try {
        console.log("SIGNIN GOOGLE", req.token);
        
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true },
            
        )
        const userData = {
            name: req.user.name,
            lastName: req.user.lastName,
            email: req.user.email,
            photoUrl: req.user.photoUrl, 
        };
        return res.redirect('http://localhost:5173/login?token=' + req.token);
    } catch (error) {
        next(error);
    }
};

export default signInGoogle;


    

