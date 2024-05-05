import {logIn, logInFailure, logInProgress, logInSuccess} from "@/states/feature/auth/login";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([logInWatcher()]);
}
function* logInWatcher() {
	yield takeLatest(logIn, logInStatus);
}

function* logInStatus() {
	try {
		yield put(logInProgress());
		const logInResponse = yield call(logInWrapper);
		yield put(logInSuccess(logInResponse));
	} catch (err) {
		yield put(logInFailure(err));
	}
}

function* logInWrapper() {
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
