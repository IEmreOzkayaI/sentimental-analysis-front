import API from "@/states/const";
import {addPostFailure, addPostProgress, addPostSuccess, addPost} from "@/states/feature/post/addPost";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([addPostWatcher()]);
}
function* addPostWatcher() {
	yield takeLatest(addPost, addPostStatus);
}

function* addPostStatus(action) {
	try {
		yield put(addPostProgress());
		const addPostResponse = yield call(addPostWrapper, action.payload);
		yield put(addPostSuccess(addPostResponse));
	} catch (err) {
		yield put(addPostFailure(err));
	}
}

function* addPostWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.post(`${API.BACKEND_BASE_URL}${API.POST}`, payload, {
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
