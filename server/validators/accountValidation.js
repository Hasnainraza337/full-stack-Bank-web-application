const { z } = require("zod")

// schema create by using zod
const accountSchema = z.object({
    fullName: z
        .string({ required_error: "UserName is required" })
        .trim()
        .min(3, { message: "UserName must be at least 3 characters" })
        .max(30, { message: "UserName cannot be more than 30 characters" }),
    idCard: z
        .string({ required_error: "CNIC number is required" })
        .refine(value => /^[0-9]{13}$/.test(value), {
            message: "CNIC number must be exactly 13 numeric characters",
        }),
    branchCode: z
        .number({ required_error: "Branch Code is required" })
        .int()
        .min(1, { message: "Branch Code should be more than 0" })
        .max(99, { message: "Branch Code cannot be more than 99" }),
    accountNumber: z
        .string({ required_error: "Account Number is required" })
        .refine(value => /^[0-9]{9}$/.test(value), {
            message: "Account Number must be exactly 9 numeric characters",
        }),
    accountType: z
        .string({ required_error: "Account Type is required" })
        .min(5, { message: "Account Type must be at least 5 characters" })
        .max(300, { message: "Account Type cannot be more than 300 characters" }),
    deposit: z
        .number({ required_error: "First Deposit is required" })
        .int()
        .min(500, { message: "Minimum deposit is 500 Rs" }),
});


module.exports = accountSchema;