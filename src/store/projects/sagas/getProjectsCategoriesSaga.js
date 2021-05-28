import { takeLatest, put, call } from 'redux-saga/effects';
import ApiClient from "service/ApiClient";
import {
    GET_PROJECTS_CATEGORIES_END,
    GET_PROJECTS_CATEGORIES_ERROR,
    GET_PROJECTS_CATEGORIES_START
} from "store/constants";

const apiClient = new ApiClient();

function* getProjectsCategories() {
    try {
         const data = yield call(apiClient.getProjectsCategories);
         yield put({
             type: GET_PROJECTS_CATEGORIES_END,
             payload: data
         });
    } catch ({ message }) {
        yield put({
            type: GET_PROJECTS_CATEGORIES_ERROR,
            payload: message
        })
    }
}

export default function* getProjectsCategoriesSaga () {
    yield takeLatest(GET_PROJECTS_CATEGORIES_START, getProjectsCategories);
}