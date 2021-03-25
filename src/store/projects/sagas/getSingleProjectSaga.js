import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_SINGLE_PROJECT_END, GET_SINGLE_PROJECT_ERROR, GET_SINGLE_PROJECT_START} from "store/constants";
import ApiClient from "service/ApiClient";
import {locoScroll} from "components/SmoothScroll";

const apiClient = new ApiClient();

function* getSingleProject({ payload }) {
    try {
        const data = yield call(apiClient.getProjectById, payload);
        yield put({
            type: GET_SINGLE_PROJECT_END,
            payload: data
        });
        yield locoScroll.update();
    } catch ({ message }) {
        yield put({
            type: GET_SINGLE_PROJECT_ERROR,
            payload: message
        });
    }
}

export default function* getSingleProjectSaga () {
    yield takeLatest(GET_SINGLE_PROJECT_START, getSingleProject);
}