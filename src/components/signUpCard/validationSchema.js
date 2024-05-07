import {z} from "zod";

const validationSchema = z.object({
	name: z
		.string({
			message: "Name is required",
		})
		.min(1, "Name is required"),
	surname: z
		.string({
			message: "Surname is required",
		})
		.min(1, "Surname is required"),
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

export const defaultValues = {name: "", surname: "", email: "", password: ""};

export default validationSchema;
