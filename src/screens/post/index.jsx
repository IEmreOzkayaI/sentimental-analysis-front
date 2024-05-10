import Comment from "@/components/comment";
import Loading from "@/components/loading";
import Post from "@/components/post";
import showToast from "@/components/toast";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import NotFound from "../error";
import {getPostDetailStatus, getPostDetail, clearGetPostDetailInfo} from "@/states/feature/post/getPostDetail";

const Post_ = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const {data, error, isLoading} = useSelector(getPostDetailStatus);

	useEffect(() => {
		dispatch(getPostDetail(params.id));
		return () => {
			dispatch(clearGetPostDetailInfo());
		};
	}, []);

	if (error) {
		showToast("Error", error.message);
		return <NotFound />;
	}
	return (
		<main className='grid grid-cols-6 gap-4 p-4 lg:gap-6 lg:p-6'>
			{isLoading && <Loading />}
			{data && (
				<div className='col-start-2 col-end-6 flex flex-1 items-center justify-left px-20 rounded-lg shadow-sm bg-slate-950 text-white'>
					<Post>
						<Post.User name={`${data.name} ${data.surname}`} email={data.email} title={data.title} />
						<Post.Content>{data.content}</Post.Content>
						<Post.Footer date={data.date} sentiment={data.sentiment} id={data.id} interaction={false} />
					</Post>
				</div>
			)}
			<Comment postId={params.id} />

			{data &&
				data.comments &&
				data.comments.map((comment, index) => (
					<div key={index} className='col-start-2 col-end-6 flex flex-col items-center justify-left rounded-lg border border-dashed'>
						<Post>
							<Post.User name={`${comment.name} ${comment.surname}`} email={comment.email} title={comment.title} />
							<Post.Content>{comment.content}</Post.Content>
							<Post.Footer date={comment.date} sentiment={comment.sentiment} id={comment.id} interaction={false} />
						</Post>
					</div>
				))}
		</main>
	);
};

export default Post_;
