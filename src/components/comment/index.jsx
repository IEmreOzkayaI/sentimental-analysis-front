import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/components/ui/use-toast";
import {Toaster} from "../ui/toaster";
import {Separator} from "@/components/ui/separator";

const FormSchema = z.object({
	comment: z
		.string()
		.min(10, {
			message: "Comment must be at least 10 characters.", // Updated the field name in the message
		})
		.max(160, {
			message: "Comment must not be longer than 160 characters.", // Corrected the max length message
		}),
});

const Comment = () => {
	const form = useForm({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data) {
		console.log(data);
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div className='col-start-2 col-end-6 flex flex-1 items-center border border-dashed justify-left px-2 py-2 rounded-lg shadow-sm'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 w-full'>
					<FormField
						control={form.control}
						name='comment' // Fixed to match the schema
						render={({field}) => (
							<FormItem className='relative'>
								<div className="flex justify-between">
									<FormLabel className='font-bold text-lg text-black'>Comment</FormLabel>
									<FormMessage className='text-white bg-black w-fit px-2 py-1 border rounded' />
								</div>
								<Separator className='my-4' />
								<FormControl>
									<Textarea placeholder='Tell us a little bit about yourself' className=' resize-none w-[90%]' {...field} />
								</FormControl>
								<Button type='submit' className=' absolute bottom-0 right-0'>
									Submit
								</Button>
							</FormItem>
						)}
					/>
				</form>
			</Form>
			<Toaster />
		</div>
	);
};

export default Comment;
