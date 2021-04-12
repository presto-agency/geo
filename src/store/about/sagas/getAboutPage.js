import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_ABOUT_PAGE_END, GET_ABOUT_PAGE_ERROR, GET_ABOUT_PAGE_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getAboutPage() {
    try {
        const data = yield call(apiClient.getAbout);
        yield put({
            type: GET_ABOUT_PAGE_END,
            payload: data
        });
    } catch ({ message }) {
        yield put({
            type: GET_ABOUT_PAGE_ERROR,
            payload: message
        })
    }
}

export default function* getAboutPageSaga() {
    yield takeLatest(GET_ABOUT_PAGE_START, getAboutPage);
}