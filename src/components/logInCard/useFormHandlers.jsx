import {clearLogInInfo, logIn} from "@/states/feature/auth/login";
import {useDispatch} from "react-redux";
import showToast from "../toast";

const useFormHandlers = () => {
	const dispatch = useDispatch();

	const onSubmit = (data, e) => {
		if (e) e.preventDefault();

		showToast("You submitted the following values:", JSON.stringify(data, null, 2));
		dispatch(logIn(data));
	};

	const onError = (errors) => {
		showToast("Error", Object.values(errors)[0].message);
	};

	const clearInfo = () => {
		dispatch(clearLogInInfo());
	};

	return {onSubmit, onError, clearInfo};
};

export default useFormHandlers;
