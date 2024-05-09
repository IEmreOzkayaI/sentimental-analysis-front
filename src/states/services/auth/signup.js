import API from "@/states/const";
import { signUp, signUpFailure, signUpProgress, signUpSuccess } from "@/states/feature/auth/signup";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

export default function* signUpSaga() {
	yield all([signUpWatcher()]);
}
function* signUpWatcher() {
	yield takeLatest(signUp, signUpStatus);
}

function* signUpStatus(action) {
	try {
		yield put(signUpProgress());
		const signUpResponse = yield call(signUpWrapper, action.payload);
		yield put(signUpSuccess(signUpResponse));
	} catch (err) {
		yield put(signUpFailure(err));
	}
}

function* signUpWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.post(`${API.BACKEND_BASE_URL}${API.SIGNUP}`, payload, {
				withCredentials: true,
			})
			.then((res) => {
				const data = res.data;
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
