import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Separator} from "@/components/ui/separator";
import {Textarea} from "@/components/ui/textarea";
import {Toaster} from "../ui/toaster";
import useFormHandlers from "./useFormHandlers";
import validationSchema, {defaultValues} from "./validationSchema";
import showToast from "../toast";
import Loading from "../loading";
import {useSelector} from "react-redux";
import {addCommentStatus} from "@/states/feature/comment/addComment";

const Comment = ({postId}) => {
	const form = useForm({resolver: zodResolver(validationSchema), mode: "onSubmit", defaultValues});
	const {onSubmit, onError, clearInfo} = useFormHandlers({postId});
	const {data, error, isLoading} = useSelector(addCommentStatus);

	if (data) {
		showToast("Success", "Comment added successfully");
		window.location.reload();
		clearInfo();
	}

	if (error) {
		showToast("Error",error.message);
	}

	return (
		<div className='col-start-2 col-end-6 flex flex-1 items-center border border-dashed justify-left px-2 py-2 rounded-lg shadow-sm'>
			{isLoading && <Loading />}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-6 w-full'>
					<FormField
						control={form.control}
						name='comment'
						render={({field}) => (
							<FormItem className='relative'>
								<div className='flex justify-between'>
									<FormLabel className='font-bold text-lg text-black'>Comment</FormLabel>
									<FormMessage className='text-white bg-black w-fit px-2 py-1 border rounded' />
								</div>
								<Separator className='my-4' />
								<FormControl>
									<Textarea placeholder="Let's comment ..." className=' resize-none w-[90%]' {...field} />
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
