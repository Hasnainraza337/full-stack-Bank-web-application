const { z } = require("zod")

// schema create by using zod
const loginSchema = z.object({

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 charcters" })
        .max(30, { message: "Email cannot  more than 30 charcters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 charcters" })
        .max(500, { message: "Password cannot  more than 500 charcters" }),

})


module.exports = loginSchema;