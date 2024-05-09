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

export const logIn = createAction("logInSlice/logIn");
export const logInStatus = (state) => state?.logInSlice;

export const {logInProgress, logInFailure, logInSuccess, clearLogInInfo} = logInSlice.actions;
export default logInSlice.reducer;
