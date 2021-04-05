import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_SIMILAR_PROJECTS_END, GET_SIMILAR_PROJECTS_ERROR, GET_SIMILAR_PROJECTS_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getSimilarProjects({ payload }) {
    try {
        const data = yield call(apiClient.getProjectByDisciplineId, payload);
        yield put({
            type: GET_SIMILAR_PROJECTS_END,
            payload: data
        });
    } catch ({ message }) {
        yield put({
            type: GET_SIMILAR_PROJECTS_ERROR,
            payload: message
        });
    }
}

export default function* getSimilarProjectsSaga () {
    yield takeLatest(GET_SIMILAR_PROJECTS_START, getSimilarProjects);
}