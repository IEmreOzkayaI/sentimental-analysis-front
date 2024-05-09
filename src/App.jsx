import {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Redirect from "./components/redirect";
import NotFound from "./screens/error";
import Protected from "./screens/protected";

const systemWarning = {
	redirect_message: "Be redirected to the page in 2 seconds.",
};

function App() {
	const LazyLanding = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/landing")), 1000));
	});

	const LazyHome = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/home")), 1000));
	});

	const LazyPost = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/post")), 1000));
	});

	const LazyLogIn = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/logIn")), 1000));
	});

	const LazySignUp = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/signUp")), 1000));
	});
	return (
		<Suspense fallback={<Redirect success={false} text={systemWarning.redirect_message} />} key={"suspense"}>
			<Navbar isOpen={localStorage.getItem("token")} />
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<LazyLanding />} />
				<Route path='home' element={<Protected child={<LazyHome />} />} />
				<Route path='signUp' element={<Protected child={<LazySignUp />} path="auth" />} />
				<Route path='login' element={<Protected child={<LazyLogIn />} path="auth" />} />
				<Route path='post/:id' element={<Protected child={<LazyPost />} />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
