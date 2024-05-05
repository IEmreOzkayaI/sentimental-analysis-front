import {MessageSquareDiff} from "lucide-react";
import {Button} from "../ui/button";
import {ThumbsUp} from "lucide-react";
import {Share2} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Link} from "react-router-dom";

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
	return <div className='flex flex-col p-4 gap-2 w-full'>{children}</div>;
};

// eslint-disable-next-line react/display-name, react/prop-types
Post.User = ({name, email,date}) => (
	<div className='flex items-center justify-between'>
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src='https://github.com/shadcn.png' />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className='flex flex-col'>
				<div className='font-bold'>{name}</div>
				<div className='text-gray-400'>{email}</div>
			</div>
		</div>
        <div className='text-gray-400'>{date}</div>
	</div>
);

// eslint-disable-next-line react/display-name, react/prop-types
Post.Content = ({children}) => <div className='font-regular text-md mt-4'>{children}</div>;

// eslint-disable-next-line react/display-name, react/prop-types
Post.Footer = ({date}) => (
	<div className='flex items-center justify-between mt-[-5px]'>
		<div>
			<TTooltip content='Like'>
				<Button variant='ghost' className='hover:bg-transparent py-0'>
					<ThumbsUp className='w-5 h-5' />
				</Button>
			</TTooltip>

			<Link to='/post/1'>
				<TTooltip content='Comment'>
					<Button variant='ghost' className='hover:bg-transparent  py-0'>
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
		<div className='text-gray-400'>{date}</div>
	</div>
);

export default Post;
