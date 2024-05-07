import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	signUpProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	signUpFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	signUpSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearSignUpInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const signUpSlice = createSlice({
	name: "signUpSlice",
	initialState,
	reducers,
});

export const signUp = createAction("signUpSlice/signUp");
export const signUpStatus = (state) => state?.signUpSlice;

export const {signUpProgress, signUpFailure, signUpSuccess, clearSignUpInfo} = signUpSlice.actions;
export default signUpSlice.reducer;
