import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_PROJECTS_END, GET_PROJECTS_ERROR, GET_PROJECTS_START} from "store/constants";
import {locoScroll} from "components/SmoothScroll";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getProjects({ payload: { start, currentPage, category, location, sort } }) {
    try {
        const posts = yield call(apiClient.getProjects, start, category, location, sort);
        const postsCount = yield call(apiClient.getProjectsCount, start, category, location, sort);
        yield put({
            type: GET_PROJECTS_END,
            payload: { posts, postsCount, currentPage, category, location, sort }
        });
        yield location.update();
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