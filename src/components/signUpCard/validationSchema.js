import {z} from "zod";

const validationSchema = z.object({
	firstName: z
		.string({
			message: "First name is required",
		})
		.min(1, "First name is required"),
	lastName: z
		.string({
			message: "Last name is required",
		})
		.min(1, "Last name is required"),
	email: z
		.string({
			message: "Email is required",
		})
		.email("Invalid email address"),
	password: z
		.string({
			message: "Password is required",
		})
		.min(6, "Password must be at least 6 characters"),
});

export default validationSchema;
