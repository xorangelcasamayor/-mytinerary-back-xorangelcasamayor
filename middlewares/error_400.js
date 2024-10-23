const error_400 = (error,req,res,next)=>{
    console.log(error);
if (error.nombre="BadRequestError"){
    return res.status(400).json({
        success: false,
        message: error,
        message: "error"
    
})
}
next(error)
}
export default error_400  