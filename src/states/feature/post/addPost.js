import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	addPostProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	addPostFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	addPostSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearAddPostInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const addPostSlice = createSlice({
	name: "addPostSlice",
	initialState,
	reducers,
});

export const addPost = createAction("addPostSlice/addPost");
export const addPostStatus = (state) => state?.addPostSlice;

export const {addPostProgress, addPostFailure, addPostSuccess, clearAddPostInfo} = addPostSlice.actions;
export default addPostSlice.reducer;
