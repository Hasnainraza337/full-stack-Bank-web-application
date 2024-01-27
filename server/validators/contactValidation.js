const { z } = require("zod")

// schema create by using zod
const contactSchema = z.object({
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
    message: z
        .string({ required_error: "Message is required" })
        .min(5, { message: "Message must be at least 5 charcters" })
        .max(300, { message: "Message cannot  more than 300 charcters" }),


})


module.exports = contactSchema;