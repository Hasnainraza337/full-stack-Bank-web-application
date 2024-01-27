const { z } = require("zod")

// schema create by using zod
const signupSchema = z.object({
    userName: z
        .string({ required_error: "UserName is required" })
        .trim()
        .min(3, { message: "UserName must be at least 3 charcters" })
        .max(30, { message: "UserName cannot  more than 30 charcters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 charcters" })
        .max(30, { message: "Email cannot  more than 30 charcters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(11, { message: "Phone must be at least 11 charcters" })
        .max(15, { message: "Phone cannot  more than 15 charcters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 charcters" })
        .max(500, { message: "Password cannot  more than 500 charcters" }),

})


module.exports = signupSchema;