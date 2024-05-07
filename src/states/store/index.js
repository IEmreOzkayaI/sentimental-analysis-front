import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import signUpSlice from "../feature/auth/signup";
import signUpSaga from "../services/auth/signup";

import logInSaga from "../services/auth/login";
import logInSlice from "../feature/auth/login";

import addCommentSlice from "../feature/comment/addComment";
import addCommentSaga from "../services/comment/addComment";

import addPostSlice from "../feature/post/addPost";
import addPostSaga from "../services/post/addPost";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		logInSlice,
		signUpSlice,
		addCommentSlice,
		addPostSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(logInSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(addCommentSaga);
sagaMiddleware.run(addPostSaga);

export default store;
