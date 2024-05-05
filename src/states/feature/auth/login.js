import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	logInProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	logInFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	logInSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearLogInInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const logInSlice = createSlice({
	name: "logInSlice",
	initialState,
	reducers,
});

export const logIn = createAction("logIn/logIn");
export const logInData = (state) => state.logInSlice.data;

export const {logInProgress, logInFailure, logInSuccess, clearLogInInfo} = logInSlice.actions;
export default logInSlice.reducer;
