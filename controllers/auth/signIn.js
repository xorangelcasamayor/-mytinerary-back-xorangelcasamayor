import User from "../../models/User.js";

const signIn = async (req, res, next) => {
    try {
       
        const user = await User.findOneAndUpdate(
            { email: req.body.email},
            { online: true },
            { new: true } 
        );

      
        const userData = {
            name:user.name,
            lastName:user.lastName,
            email:user.email,
            photoUrl:user.photoUrl, 
            
        };

        
        console.log('User Data:', userData);

        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: userData,
            token: req.token, 
        });

    } catch (error) {
        next(error);
    }
};

const verificacionToken = (req, res, next) => {
    return res.status(200).json({ success: true, user: req.user });
}

export { signIn, verificacionToken };
