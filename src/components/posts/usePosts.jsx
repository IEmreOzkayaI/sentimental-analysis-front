import {clearGetPostInfo, getPost} from "@/states/feature/post/getPost";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
const usePosts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost());
		return () => {
			dispatch(clearGetPostInfo());
		};
	}, []);

	const clearInfo = () => {
		dispatch(clearGetPostInfo());
	};
	return {clearInfo};
};

export default usePosts;
