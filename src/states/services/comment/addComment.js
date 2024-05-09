import API from "@/states/const";
import {addComment, addCommentFailure, addCommentProgress, addCommentSuccess} from "@/states/feature/comment/addComment";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([addCommentWatcher()]);
}
function* addCommentWatcher() {
	yield takeLatest(addComment, addCommentStatus);
}

function* addCommentStatus(action) {
	try {
		yield put(addCommentProgress());
		const addCommentResponse = yield call(addCommentWrapper, action.payload);
		yield put(addCommentSuccess(addCommentResponse));
	} catch (err) {
		yield put(addCommentFailure(err));
	}
}

function* addCommentWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.post(`${API.BACKEND_BASE_URL}${API.COMMENT}`, payload, {
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
