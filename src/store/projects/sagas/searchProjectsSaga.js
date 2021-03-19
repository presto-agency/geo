import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {SEARCH_PROJECTS_END, SEARCH_PROJECTS_ERROR, SEARCH_PROJECTS_START} from "store/constants";
import ApiClient from "service/ApiClient";
import routes from 'routes';

const apiClient = new ApiClient();

function* searchProjects({ payload }) {
    try {
        const result = yield call(apiClient.getProjectsByQuery, payload.query);
        yield put({
            type: SEARCH_PROJECTS_END,
            payload: result
        });
        yield put(push(routes.searchResult));
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