import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_SOCIAL_END, GET_SOCIAL_ERROR, GET_SOCIAL_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getSocial() {
    try {
        const data = yield call(apiClient.getSocial);
        yield put({
            type: GET_SOCIAL_END,
            payload: data.socialLinks
        })
    } catch ({ message }) {
        yield put({
            type: GET_SOCIAL_ERROR,
            payload: message
        });
    }
}

export default function* getSocialSaga() {
    yield takeLatest(GET_SOCIAL_START, getSocial);
}