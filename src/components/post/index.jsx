import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquareDiff, Share2, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const TTooltip = ({children, content}) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>{content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

// eslint-disable-next-line react/display-name, react/prop-types
const Post = ({children}) => {
	return (
		<div className='flex w-full'>
			<div className='flex flex-col p-4 gap-2 w-full'>{children}</div>
		</div>
	);
};

// eslint-disable-next-line react/display-name, react/prop-types
Post.User = ({name, email, title}) => (
	<div className='flex items-center justify-between'>
		<div className='flex items-center gap-4 justify-between w-full'>
			<div className='flex items-center gap-4'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className='flex flex-col'>
					<div className='font-bold'>{name}</div>
					<div className='text-gray-400'>{email}</div>
				</div>
			</div>
			<div className='font-bold'>{title}</div>
		</div>
	</div>
);

// eslint-disable-next-line react/display-name, react/prop-types
Post.Content = ({children}) => <div className='font-regular text-md mt-4'>{children}</div>;

// eslint-disable-next-line react/display-name, react/prop-types
Post.Footer = ({date, sentiment, id, interaction = true}) => (
	<div className='flex items-center justify-between mt-[-5px]'>
		{interaction && (
			<div>
				<TTooltip content='Like'>
					<Button variant='ghost' className='hover:bg-transparent py-0'>
						<ThumbsUp className='w-5 h-5' />
					</Button>
				</TTooltip>

				<Link to={`/post/${id}`}>
					<TTooltip content='Comment'>
						<Button variant='ghost' className='hover:bg-transparent py-0'>
							<MessageSquareDiff className='w-5 h-5' />
						</Button>
					</TTooltip>
				</Link>
				<TTooltip content='Share'>
					<Button variant='ghost' className='hover:bg-transparent  py-0'>
						<Share2 className='w-5 h-5' />
					</Button>
				</TTooltip>
			</div>
		)}
		<div>
			{sentiment === "Positive" && <span className='bg-green-100 rounded w-fit h-fit px-3 py-1 text-center mr-5 text-black font-normal text-xs'>{sentiment}</span>}
			{sentiment === "Neutral" && <span className='bg-yellow-100 rounded w-fit h-fit px-3  py-1 text-center mr-5 text-black  font-normal text-xs'>{sentiment}</span>}
			{sentiment === "Negative" && <span className='bg-red-100  rounded w-fit h-fit px-3 py-1 text-center mr-5 text-black  font-normal text-xs'>{sentiment}</span>}
		</div>
		<div className='text-gray-400'>{date}</div>
	</div>
);

export default Post;
