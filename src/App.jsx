import {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "./components/navbar";
import Redirect from "./components/redirect";
import {FormCard} from "./components/formCard";
import {SignUpCard} from "./SignUpCard";
import LogInCard from "./LogInCard";

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

	const LazyPostScreen = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/postScreen")), 2000));
	});

	return (
		<Suspense fallback={<Redirect success={false} text={systemWarning.redirect_message} />} key={"suspense"}>
			<Navbar isOpen={false} />
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<LazyLanding />} />
				<Route path='/home' element={<LazyHome />} />
				<Route path='signUp' element={<FormCard child={<SignUpCard />} />} />
				<Route path='login' element={<FormCard child={<LogInCard />} />} />
				<Route path='post/:id' element={<LazyPostScreen />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
