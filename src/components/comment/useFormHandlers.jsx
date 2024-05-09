import {clearAddCommentInfo, addComment} from "@/states/feature/comment/addComment";
import {useDispatch} from "react-redux";
import showToast from "../toast";

const useFormHandlers = ({postId}) => {
	const dispatch = useDispatch();

	const onSubmit = (data, e) => {
		if (e) e.preventDefault();
		data = {...data, postId};
		showToast("You submitted the following values:", JSON.stringify(data, null, 2));
		dispatch(addComment(data));
	};

	const onError = (errors) => {
		showToast("Error", Object.values(errors)[0].message);
	};

	const clearInfo = () => {
		dispatch(clearAddCommentInfo());
	};

	return {onSubmit, onError, clearInfo};
};

export default useFormHandlers;
