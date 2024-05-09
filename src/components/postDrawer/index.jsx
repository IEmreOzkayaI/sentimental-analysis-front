import {Button} from "@/components/ui/button";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Separator} from "@/components/ui/separator";
import {Textarea} from "@/components/ui/textarea";
import {zodResolver} from "@hookform/resolvers/zod";
import {set, useForm} from "react-hook-form";
import {Toaster} from "../ui/toaster";
import useFormHandlers from "./useFormHandler";
import validationSchema, {defaultValues} from "./validationSchema";
import {Input} from "@/components/ui/input";
import showToast from "../toast";
import Loading from "../loading";
import {useSelector} from "react-redux";
import {addPostStatus} from "@/states/feature/post/addPost";

const PostDrawer = () => {
	const form = useForm({resolver: zodResolver(validationSchema), mode: "onSubmit", defaultValues});
	const {onSubmit, onError, clearInfo} = useFormHandlers();
	const {data, error, isLoading} = useSelector(addPostStatus);

	if (data) {
		showToast("Success", "Post added successfully");
		clearInfo();
		setTimeout(() => {
			window.location.reload();
		}, 1500);	}

	if (error) {
		showToast("Error",error.message);
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='font-bold w-[200px]'>POST</Button>
			</DrawerTrigger>
			<DrawerContent className='h-[300px] p-5'>
			{isLoading && <div className="z-10"><Loading /></div>}
				<div className='flex flex-1 items-start justify-left px-2 py-2 rounded-lg'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-6 w-full'>
							<FormField
								control={form.control}
								name='title'
								render={({field}) => (
									<FormItem className='flex'>
										<Input id='title' type='text' placeholder='TITLE' {...field} autoComplete='title' className='border-0 rounded-none focus-visible:ring-0 focus-visible:shadow-none mb-[-1rem]' />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='content' // Fixed to match the schema
								render={({field}) => (
									<FormItem className='relative'>
										<Separator className='my-4' />
											<Textarea id='content' placeholder='Tell us a little bit about yourself' className=' resize-none w-[90%] h-[180px]' {...field} />
										<Button type='submit' className=' absolute bottom-0 right-0 font-bold'>
											Submit
										</Button>
									</FormItem>
								)}
							/>
						</form>
					</Form>
					<Toaster />
				</div>
			</DrawerContent>
		</Drawer>
	);
};
export default PostDrawer;
