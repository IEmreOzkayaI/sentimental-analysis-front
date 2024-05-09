import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	getPostDetailProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	getPostDetailFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	getPostDetailSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearGetPostDetailInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const getPostDetailSlice = createSlice({
	name: "getPostDetailSlice",
	initialState,
	reducers,
});

export const getPostDetail = createAction("getPostDetailSlice/getPostDetail");
export const getPostDetailStatus = (state) => state?.getPostDetailSlice;

export const {getPostDetailProgress, getPostDetailFailure, getPostDetailSuccess, clearGetPostDetailInfo} = getPostDetailSlice.actions;
export default getPostDetailSlice.reducer;
