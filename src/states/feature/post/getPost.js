import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	getPostProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	getPostFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	getPostSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearGetPostInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const getPostSlice = createSlice({
	name: "getPostSlice",
	initialState,
	reducers,
});

export const getPost = createAction("getPostSlice/getPost");
export const getPostStatus = (state) => state?.getPostSlice;

export const {getPostProgress, getPostFailure, getPostSuccess, clearGetPostInfo} = getPostSlice.actions;
export default getPostSlice.reducer;
