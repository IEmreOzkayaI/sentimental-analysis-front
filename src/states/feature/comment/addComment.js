import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	addCommentProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	addCommentFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	addCommentSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearAddCommentInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const addCommentSlice = createSlice({
	name: "addCommentSlice",
	initialState,
	reducers,
});

export const addComment = createAction("addCommentSlice/addComment");
export const addCommentStatus = (state) => state?.addCommentSlice;

export const {addCommentProgress, addCommentFailure, addCommentSuccess, clearAddCommentInfo} = addCommentSlice.actions;
export default addCommentSlice.reducer;
