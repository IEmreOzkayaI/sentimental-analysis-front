import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Toaster } from "../ui/toaster";
import { onError, onSubmit } from "./action";
import validationSchema from "./validationSchema";
 
const LogInCard = () => {
	const form = useForm({resolver: zodResolver(validationSchema), mode: "onSubmit"});

	return (
		<div className='mx-auto grid w-[350px] gap-6'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit, onError)}>
					<div className='grid gap-2 text-center'>
						<h1 className='text-3xl font-bold'>Login</h1>
						<p className='text-balance text-muted-foreground mb-5'>Enter your email below to login to your account</p>
					</div>
					<div className='grid gap-4'>
						<FormField
							control={form.control}
							name='email'
							render={({field}) => (
								<FormItem>
									<div className='grid gap-2'>
										<Label htmlFor='email'>Email</Label>
										<Input id='email' type='text' placeholder='m@example.com' {...field} />
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
										<div className='flex items-center'>
											<Label htmlFor='password'>Password</Label>
											<a className='ml-auto inline-block text-sm underline'>Forgot your password?</a>
										</div>
										<Input id='password' type='password' {...field} />
									</div>
								</FormItem>
							)}
						/>

						<Button type='submit' className='w-full'>
							Login
						</Button>
					</div>
				</form>
			</Form>
			<div className='mt-4 text-center text-sm'>
				Don&apos;t have an account?{" "}
				<Link to={"/signup"} className='underline'>
					Sign up
				</Link>
			</div>
			<Toaster />
		</div>
	);
};

export default LogInCard;
