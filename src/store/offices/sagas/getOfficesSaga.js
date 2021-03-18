import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_OFFICES_END, GET_OFFICES_ERROR, GET_OFFICES_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getOffices() {
    try{
        const data = yield call(apiClient.getOffices);

        yield put({
           type: GET_OFFICES_END,
           payload: data
        });
    } catch ({ message }) {
        yield put({
            type: GET_OFFICES_ERROR,
            payload: message
        });
    }
}

export default function* getOfficesSaga () {
    yield takeLatest(GET_OFFICES_START, getOffices);
}