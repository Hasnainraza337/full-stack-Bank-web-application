const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const userMiddleware = async (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP,Token not provided" })
    }

    // Assuming the token formet "bearer <jwtToken>",removing the bearer prefix
    const jwtToken = token.replace("Bearer", "").trim()
    // console.log("withot bearer", jwtToken)
    try {
        const isVarified = jwt.verify(jwtToken, process.env.SECRET_KEY)

        const userData = await User.findOne({ email: isVarified.email }).select({
            password: 0
        })

        req.user = userData;
        req.userId = userData._id;
        req.token = token;
        // console.log(userData)
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized, Invalid Token" })
    }

}

module.exports = userMiddleware;
