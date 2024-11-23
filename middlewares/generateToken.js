import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    console.log("entro en generate token",req.user);
    const email = req.user ? req.user.email : req.body.email
    const token = jwt.sign(
        {email: email},
        process.env.SECRET,
        {expiresIn: 60*60*24}
    )
    req.token = token
    console.log("token",token);
    
    return next()
}