import {useDispatch} from "react-redux";
import showToast from "../toast";
import {clearAddPostInfo,addPost} from "@/states/feature/post/addPost";

const useFormHandlers = () => {
	const dispatch = useDispatch();

	const onSubmit = (data, e) => {
		if (e) e.preventDefault();
		showToast("You submitted the following values:", JSON.stringify(data, null, 2));
		dispatch(addPost(data));
	};

	const onError = (errors) => {
		showToast("Error", Object.values(errors)[0].message);
	};

	const clearInfo = () => {
		dispatch(clearAddPostInfo());
	};

	return {onSubmit, onError, clearInfo};
};

export default useFormHandlers;
