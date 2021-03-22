import { takeLatest, put, call } from 'redux-saga/effects';
import {SEARCH_PROJECTS_END, SEARCH_PROJECTS_ERROR, SEARCH_PROJECTS_START, CLOSE_MODAL} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* searchProjects({ payload }) {

    try {
        const result = yield call(apiClient.getProjectsByQuery, payload.query);
        yield put({
            type: SEARCH_PROJECTS_END,
            payload: result
        });
    } catch ({ message }) {
        yield put({
            type: SEARCH_PROJECTS_ERROR,
            payload: message
        });
    }
}

export default function* searchProjectsSaga() {
    yield takeLatest(SEARCH_PROJECTS_START, searchProjects);
}