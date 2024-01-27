const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


// secure password by using becrypt
userSchema.pre("save", async function () {
    // console.log("pre", this)
    const user = this

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound)
        user.password = hashPassword
    } catch (error) {
        next(error)
    }

})

// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
    } catch (error) {
        console.log(error)
    }
}

// compare password
userSchema.methods.comparePassword = async function (password) {
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.log(error)
    }
}


const User = new mongoose.model("users", userSchema);

module.exports = User;