import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Redirect from "./components/redirect";
import NotFound from "./screens/error";

const systemWarning = {
	redirect_message: "Be redirected to the page in 2 seconds.",
};

function App() {
	const LazyLanding = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/landing")), 2000));
	});

	const LazyHome = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/home")), 2000));
	});

	const LazyPost = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/post")), 2000));
	});

	const LazyLogIn = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/logIn")), 2000));
	});

	const LazySignUp = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/signUp")), 2000));
	});
	return (
		<Suspense fallback={<Redirect success={false} text={systemWarning.redirect_message} />} key={"suspense"}>
			<Navbar isOpen={false} />
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<LazyLanding />} />
				<Route path='/home' element={<LazyHome />} />
				<Route path='signUp' element={<LazySignUp />} />
				<Route path='login' element={<LazyLogIn />} />
				<Route path='post/:id' element={<LazyPost />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
