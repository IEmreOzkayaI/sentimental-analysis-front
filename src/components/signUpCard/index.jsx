import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {Toaster} from "../ui/toaster";
import {onError, onSubmit} from "./action";
import validationSchema from "./validationSchema";

export function SignUpCard() {
	const form = useForm({resolver: zodResolver(validationSchema)});

	return (
		<>
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
									name='firstName'
									render={({field}) => (
										<FormItem>
											<div className='grid gap-2'>
												<Label htmlFor='first-name'>First name</Label>
												<Input id='first-name' placeholder='Max' {...field} />
											</div>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='lastName'
									render={({field}) => (
										<FormItem>
											<div className='grid gap-2'>
												<Label htmlFor='last-name'>Last name</Label>
												<Input id='last-name' placeholder='Robinson' {...field} />
												{/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
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
											<Input id='email' type='text' {...field} />
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
											<Input id='password' type='password' {...field} />
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
