import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {signUpStatus} from "@/states/feature/auth/signup";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Loading from "../loading";
import showToast from "../toast";
import {Toaster} from "../ui/toaster";
import useFormHandlers from "./useFormHandlers";
import validationSchema, {defaultValues} from "./validationSchema";

export function SignUpCard() {
	const form = useForm({resolver: zodResolver(validationSchema), mode: "onSubmit", defaultValues});
	const {onSubmit, onError, clearInfo} = useFormHandlers();
	const {data, error, isLoading} = useSelector(signUpStatus);

	if (data) {
		showToast("Success", "Account created successfully! Redirecting to login page...");
		clearInfo();
		setTimeout(() => {
			window.location.replace("/login");
		}, 2000);
	}

	if (error) {
		showToast("Error",error.message);
	}

	return (
		<>
			{isLoading && <Loading />}
			<Card className='mx-auto max-w-sm'>
				<CardHeader>
					<CardTitle className='text-xl'>Sign Up</CardTitle>
					<CardDescription>Enter your information to create an account</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit, onError)} className='grid gap-4'>
							<div className='grid grid-cols-2 gap-4'>
								<FormField
									control={form.control}
									name='name'
									render={({field}) => (
										<FormItem>
											<div className='grid gap-2'>
												<Label htmlFor='name'>First name</Label>
												<Input id='name' placeholder='Max' {...field} autoComplete='name' />
											</div>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='surname'
									render={({field}) => (
										<FormItem>
											<div className='grid gap-2'>
												<Label htmlFor='surname'>Last name</Label>
												<Input id='surname' placeholder='Robinson' {...field} autoComplete='name' />
											</div>
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name='email'
								render={({field}) => (
									<FormItem>
										<div className='grid gap-2'>
											<Label htmlFor='email'>Email</Label>
											<Input id='email' type='text' placeholder='max_robinson@gmail.com' {...field} autoComplete='email' />
										</div>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='password'
								render={({field}) => (
									<FormItem>
										<div className='grid gap-2'>
											<Label htmlFor='password'>Password</Label>
											<Input id='password' type='password' placeholder='******' {...field} autoComplete='current-password' />
										</div>
									</FormItem>
								)}
							/>

							<Button type='submit' className='w-full'>
								Create an account
							</Button>
						</form>
					</Form>

					<div className='mt-4 text-center text-sm'>
						Already have an account?{" "}
						<Link to='/login' className='underline'>
							Log in
						</Link>
					</div>
				</CardContent>
			</Card>
			<Toaster />
		</>
	);
}
