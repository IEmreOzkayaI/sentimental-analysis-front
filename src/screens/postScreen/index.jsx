import Comment from "@/components/comment";
import Post from "@/components/post";
import React from "react";

const PostScreen = () => {
	return (
		<main className='grid grid-cols-6 gap-4 p-4 lg:gap-6 lg:p-6'>
			<div className='col-start-2 col-end-6 flex flex-1 items-center justify-left px-20 rounded-lg shadow-sm bg-slate-950 text-white'>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
					<Post.Footer date={"12:00 PM - 12/12/2021"} />
				</Post>
			</div>
			<Comment />
			<div className='col-start-2 col-end-6 flex flex-col items-center max-h-[500px] overflow-auto justify-left px-20 rounded-lg border border-dashed'>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} date={"12:00 PM - 12/12/2021"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
				</Post>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} date={"12:00 PM - 12/12/2021"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
				</Post>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} date={"12:00 PM - 12/12/2021"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
				</Post>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} date={"12:00 PM - 12/12/2021"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
				</Post>
				<Post>
					<Post.User name={"John Doe"} email={"johndoe@gmail.com"} date={"12:00 PM - 12/12/2021"} />
					<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
				</Post>
			</div>
		</main>
	);
};

export default PostScreen;
