import {z} from "zod";

const validationSchema = z.object({
	title: z
		.string({
			message: "Title is required",
		})
		.min(5, "Title must be at least 5 characters long"),
	content: z
		.string({
			message: "Content is required",
		})
		.min(5, "Content must be at least 10 characters long"),
});

export const defaultValues = {title: "", content: ""};

export default validationSchema;
