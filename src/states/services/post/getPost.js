import API from "@/states/const";
import {getPostFailure, getPostProgress, getPostSuccess, getPost} from "@/states/feature/post/getPost";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([getPostWatcher()]);
}
function* getPostWatcher() {
	yield takeLatest(getPost, getPostStatus);
}

function* getPostStatus() {
	try {
		yield put(getPostProgress());
		const getPostResponse = yield call(getPostWrapper);
		yield put(getPostSuccess(getPostResponse));
	} catch (err) {
		yield put(getPostFailure(err));
	}
}

function* getPostWrapper() {
	return yield new Promise((resolve, reject) => {
		axios
			.get(`${API.BACKEND_BASE_URL}${API.POST}`, {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
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
