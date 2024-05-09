import {getPostStatus} from "@/states/feature/post/getPost";
import {useSelector} from "react-redux";
import Loading from "../loading";
import Post from "../post";
import showToast from "../toast";
import usePosts from "./usePosts";

const Posts = () => {
	const {clearInfo} = usePosts();
	const {data, error, isLoading} = useSelector(getPostStatus);
	const user = JSON.parse(localStorage.getItem("user"));

	if (error) {
		showToast("Error", error.message);
		clearInfo();
	}

	return (
		<main className='grid grid-cols-6 gap-4 p-4 lg:gap-6 lg:p-6'>
			{isLoading && <Loading />}
			{data &&
				data.map((post, index) =>
					post.user_id !== user.id ? (
						<div key={index} className='col-start-2 col-end-6 flex flex-1 items-center justify-left px-20 rounded-lg border border-dashed shadow-sm'>
							<Post>
								<Post.User name={`${post.name} ${post.surname}`} email={post.email} title={post.title} />
								<Post.Content>{post.content}</Post.Content>
								<Post.Footer date={post.date} sentiment={post.sentiment} id={post.id} />
							</Post>
						</div>
					) : (
						<div key={index} className='col-start-2 col-end-6 flex flex-1 items-center justify-left px-20 rounded-lg shadow-sm bg-slate-950 text-white'>
							<Post>
								<Post.User name={`${post.name} ${post.surname}`} email={post.email} title={post.title} />
								<Post.Content>{post.content}</Post.Content>
								<Post.Footer date={post.date} sentiment={post.sentiment} id={post.id} />
							</Post>
						</div>
					)
				)}
		</main>
	);
};

export default Posts;
