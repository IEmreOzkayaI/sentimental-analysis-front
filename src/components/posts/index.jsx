import Post from "../post";

const Posts = () => {
	return (
		<main className='grid grid-cols-6 gap-4 p-4 lg:gap-6 lg:p-6'>
			{[...Array(10).keys()].map((_, index) => (
				<div key={index} className='col-start-2 col-end-6 flex flex-1 items-center justify-left px-20 rounded-lg border border-dashed shadow-sm'>
					<Post>
						<Post.User name={"John Doe"} email={"johndoe@gmail.com"} />
						<Post.Content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </Post.Content>
						<Post.Footer date={"12:00 PM - 12/12/2021"} />
					</Post>
				</div>
			))}
		</main>
	);
};

export default Posts;
