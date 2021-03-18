import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_DISCIPLINES_END, GET_DISCIPLINES_ERROR, GET_DISCIPLINES_START} from "store/constants";

import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getDisciplines() {
    try {
        const data = yield call(apiClient.getDisciplines);
        yield put({
            type: GET_DISCIPLINES_END,
            payload: data
        });
    } catch ({ message }) {
        yield put({
            type: GET_DISCIPLINES_ERROR,
            payload: message
        })
    }
}

export default function* getDisciplinesSaga () {
    yield takeEvery(GET_DISCIPLINES_START, getDisciplines);
}