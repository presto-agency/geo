import { takeEvery, call, put } from 'redux-saga/effects';
import {GET_SERVICES_PAGE_END, GET_SERVICES_PAGE_ERROR, GET_SERVICES_PAGE_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getServicesPage() {
    try {
        const data = yield call(apiClient.getServicesPage);
        yield put({
            type: GET_SERVICES_PAGE_END,
            payload: data
        });
    } catch ({ message }) {
        yield put({
            type: GET_SERVICES_PAGE_ERROR,
            payload: message
        });
    }
}

export default function* getServicesPageSaga () {
    yield takeEvery(GET_SERVICES_PAGE_START, getServicesPage);
}