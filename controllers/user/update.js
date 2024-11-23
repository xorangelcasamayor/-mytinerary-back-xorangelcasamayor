import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body

        let upd = await User.findOneAndUpdate(
            { name: user.name },
            
        )

        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }
}

export { update }