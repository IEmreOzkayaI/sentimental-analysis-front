import {useEffect} from "react";
import Image from "../../assets/placeholder.svg";
import {Skeleton} from "@/components/ui/skeleton";
import {useState} from "react";

export function FormCard({child}) {
	const [skeleton, setSkeleton] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSkeleton(false);
		}, 1000);
	}, []);

	return (
		<div className='w-screen h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:bg-'>
			<div className='flex items-center justify-center py-12'>
				{skeleton && (
					<div className='flex-col  space-y-4'>
						<Skeleton className='h-[225px] w-[250px] rounded-xl' />
						<Skeleton className='h-10 w-[250px]' />
						<Skeleton className='h-4 w-[250px]' />
					</div>
				)}
				{!skeleton && child}
			</div>
			{skeleton && (
				<div className='hidden bg-white lg:block'>
					<Skeleton className='h-full w-full object-cover ' />
				</div>
			)}
			{!skeleton && (
				<div className='hidden bg-muted lg:block'>
					<img src={Image} alt='Image' width='1920' height='1080' className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale' />
				</div>
			)}
		</div>
	);
}
