const useLogOut = () => {
	const logOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.replace("/");
	};

	return {logOut};
};

export default useLogOut;
