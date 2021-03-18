import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_SERVICES_END, GET_SERVICES_ERROR, GET_SERVICES_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getServices() {
    try {

        const data = yield call(apiClient.getServices);

        yield put({
            type: GET_SERVICES_END,
            payload: data
        });

    } catch ({ message }) {

        yield put({
            type: GET_SERVICES_ERROR,
            payload: message
        });

    }
}

export default function* getServicesSaga () {
    yield takeLatest(GET_SERVICES_START, getServices);
}