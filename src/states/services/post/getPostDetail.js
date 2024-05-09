import API from "@/states/const";
import {getPostDetailFailure, getPostDetailProgress, getPostDetailSuccess, getPostDetail} from "@/states/feature/post/getPostDetail";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([getPostDetailWatcher()]);
}
function* getPostDetailWatcher() {
	yield takeLatest(getPostDetail, getPostDetailStatus);
}

function* getPostDetailStatus(action) {
	try {
		yield put(getPostDetailProgress());
		const getPostDetailResponse = yield call(getPostDetailWrapper, action.payload);
		yield put(getPostDetailSuccess(getPostDetailResponse));
	} catch (err) {
		yield put(getPostDetailFailure(err));
	}
}

function* getPostDetailWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.get(`${API.BACKEND_BASE_URL}${API.POST}?id=${payload}`, {
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
