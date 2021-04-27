import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_HOMEPAGE_ERROR, GET_HOMEPAGE_END, GET_HOMEPAGE_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getHomePage() {
    try {
        const data = yield call(apiClient.getHome);
        yield put({
            type: GET_HOMEPAGE_END,
            payload: data[0]
        });
    } catch ({ message }) {
        yield put({
            type: GET_HOMEPAGE_ERROR,
            payload: message
        });
    }
}

export default function* getHomePageSaga() {
    yield takeEvery(GET_HOMEPAGE_START, getHomePage);
}