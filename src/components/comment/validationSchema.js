import {z} from "zod";

const validationSchema = z.object({
	comment: z
		.string()
		.min(10, {
			message: "Comment must be at least 10 characters.", // Updated the field name in the message
		})
		.max(160, {
			message: "Comment must not be longer than 160 characters.", // Corrected the max length message
		}),
});

export const defaultValues = {comment: ""};

export default validationSchema;
