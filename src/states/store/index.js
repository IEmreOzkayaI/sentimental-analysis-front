import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import signUpSlice from "../feature/auth/signup";
import logInSlice from "../feature/auth/signup";

import signUpSaga from "../services/auth/signup";
import logInSaga from "../services/auth/login";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		logInSlice,
		signUpSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(logInSaga);
sagaMiddleware.run(signUpSaga);

export default store;
