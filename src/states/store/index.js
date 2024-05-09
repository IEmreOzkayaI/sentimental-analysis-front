import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import signUpSlice from "../feature/auth/signup";
import signUpSaga from "../services/auth/signup";

import logInSlice from "../feature/auth/login";
import logInSaga from "../services/auth/login";

import addCommentSlice from "../feature/comment/addComment";
import addCommentSaga from "../services/comment/addComment";

import addPostSlice from "../feature/post/addPost";
import addPostSaga from "../services/post/addPost";

import getPostSlice from "../feature/post/getPost";
import getPostSaga from "../services/post/getPost";

import getPostDetailSlice from "../feature/post/getPostDetail";
import getPostDetailSaga from "../services/post/getPostDetail";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		logInSlice,
		signUpSlice,
		addCommentSlice,
		addPostSlice,
		getPostSlice,
		getPostDetailSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(logInSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(addCommentSaga);
sagaMiddleware.run(addPostSaga);
sagaMiddleware.run(getPostSaga);
sagaMiddleware.run(getPostDetailSaga);

export default store;
