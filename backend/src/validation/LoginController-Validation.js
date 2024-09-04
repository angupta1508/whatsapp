const z = require('zod');

module.exports = {
    registerSchema: z.object({
        username: z.string({ required_error: "This field is required" })
            .trim()
            .min(3, { message: "Username must be at least of 3 chars" }),
        email: z.string().email({ message: "Invalid Email Address" }),
        password: z.string({ required_error: "Password is required" })
            .min(6, { message: "Password must be at least 6 characters long" }),
        cpassword: z.string({ required_error: "Confirm Password is required" })
    }).refine((data) => data.password === data.cpassword, {
        message: "Passwords do not match",
        path: ["cpassword"],
    }),

    loginSchema: z.object({
        email: z.string({required_error:"This field is required"}).email({ message: "Invalid Email Address" }),
        password: z.string({ required_error: "Password is required" })
            .min(6, { message: "Password must be at least 6 characters long" }),
    })
}
