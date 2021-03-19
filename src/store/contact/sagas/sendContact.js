import { takeLatest, put, call } from 'redux-saga/effects';
import {SUBMIT_CONTACT_END, SUBMIT_CONTACT_ERROR, SUBMIT_CONTACT_START} from "store/constants";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* sendContact({ payload }) {
    try {
       yield call(apiClient.postContacts, payload);

       yield put({
           type: SUBMIT_CONTACT_END,
           payload: null
       });

    } catch ({ message }) {
        yield put({
            type: SUBMIT_CONTACT_ERROR,
            payload: message
        })
    }
}

export default function* sendContactSaga () {
    yield takeLatest(SUBMIT_CONTACT_START, sendContact);
}