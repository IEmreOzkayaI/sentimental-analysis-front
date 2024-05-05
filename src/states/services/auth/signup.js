import {signUp, signUpFailure, signUpProgress, signUpSuccess} from "@/states/feature/auth/signup";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* signUpSaga() {
	yield all([signUpWatcher()]);
}
function* signUpWatcher() {
	yield takeLatest(signUp, signUpStatus);
}

function* signUpStatus() {
	try {
		yield put(signUpProgress());
		const signUpResponse = yield call(signUpWrapper);
		yield put(signUpSuccess(signUpResponse));
	} catch (err) {
		yield put(signUpFailure(err));
	}
}

function* signUpWrapper() {
	return yield new Promise((resolve, reject) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/todos/1`, {
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
