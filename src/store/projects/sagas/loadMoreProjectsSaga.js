import { takeLatest, put, call } from 'redux-saga/effects';
import {LOAD_MORE_PROJECTS_END, LOAD_MORE_PROJECTS_ERROR, LOAD_MORE_PROJECTS_START} from "store/constants";
import {locoScroll} from "components/SmoothScroll";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* loadMoreProjects({ payload: { start, currPage, category, location, sort } }) {
    try {
        const posts = yield call(apiClient.getProjects, start, category, location, sort);
        yield put({
            type: LOAD_MORE_PROJECTS_END,
            payload: { posts, currPage, category, location, sort }
        });
        yield locoScroll.update();
    } catch ({ message }) {
        yield put({
           type: LOAD_MORE_PROJECTS_ERROR,
           payload: message
        });
    }
}

export default function* loadMoreProjectsSaga () {
    yield takeLatest(LOAD_MORE_PROJECTS_START, loadMoreProjects);
}