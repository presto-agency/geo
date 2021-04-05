import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_PROJECTS_END, GET_PROJECTS_ERROR, GET_PROJECTS_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getProjects() {
    try {
        const posts = yield call(apiClient.getProjects);
        const postsCount = yield call(apiClient.getProjectsCount);
        yield put({
            type: GET_PROJECTS_END,
            payload: { posts, postsCount }
        });
    } catch ({ message }) {
        yield put({
            type: GET_PROJECTS_ERROR,
            payload: message
        });
    }
}

export default function* getProjectsSaga () {
    yield takeLatest(GET_PROJECTS_START, getProjects);
}