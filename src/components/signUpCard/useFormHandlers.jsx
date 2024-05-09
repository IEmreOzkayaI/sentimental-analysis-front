import {clearSignUpInfo, signUp} from "@/states/feature/auth/signup";
import {useDispatch} from "react-redux";
import showToast from "../toast";

const useFormHandlers = () => {
	const dispatch = useDispatch();
	const onSubmit = (data, e) => {
		if (e) e.preventDefault();

		showToast("You submitted the following values:", JSON.stringify(data, null, 2));

		dispatch(signUp(data));
	};

	const onError = (errors) => {
		showToast("Error", Object.values(errors)[0].message);
	};

	const clearInfo = () => {
		dispatch(clearSignUpInfo());
	};

	return {onSubmit, onError, clearInfo};
};

export default useFormHandlers;
