import API from "@/states/const";
import {logIn, logInFailure, logInProgress, logInSuccess} from "@/states/feature/auth/login";
import axios from "axios";
import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([logInWatcher()]);
}
function* logInWatcher() {
	yield takeLatest(logIn, logInStatus);
}

function* logInStatus(action) {
	try {
		yield put(logInProgress());
		const logInResponse = yield call(logInWrapper,action.payload);
		yield put(logInSuccess(logInResponse));
	} catch (err) {
		yield put(logInFailure(err));
	}
}

function* logInWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.post(`${API.BACKEND_BASE_URL}${API.LOGIN}`, payload, {
				withCredentials: true,
			})
			.then((res) => {
				const data = res.data;
				resolve(data);
			})
			.catch((err) => {
				reject(err.response.data);
			});
	});
}
