import {z} from "zod";

const validationSchema = z.object({
	email: z
		.string({
			message: "Email is required",
		})
		.email("Invalid email address"),
	password: z
		.string({
			message: "Password is required",
		})
		.min(6, "Password must be at least 6 characters long"),
});

export default validationSchema;
