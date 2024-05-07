const Protected = ({child, path}) => {
	// if no token, redirect to login
	if (path === "auth" && !localStorage.getItem("token")) {
		return <>{child}</>;
	}
	if (path === "auth" && localStorage.getItem("token")) {
		window.location.replace("/home");
		return;
	}
	if (path !== "auth" && !localStorage.getItem("token")) {
		window.location.replace("/");
		return;
	}
	if (path !== "auth" && localStorage.getItem("token")) {
		return <>{child}</>;
	}
};

export default Protected;
