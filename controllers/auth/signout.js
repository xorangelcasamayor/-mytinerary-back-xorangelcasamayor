import User from "../../models/User.js"

const signOut = async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: false}
        )
        console.log(req);
        return res.status(200).json({
            succes: true,
            message: "disconect" 
        })
        
    } catch (error) {
        next(error)
    }
}

export default signOut