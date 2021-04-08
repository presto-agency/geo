import { takeLatest, put, call } from 'redux-saga/effects';
import {GET_SIMILAR_NEWS_END, GET_SIMILAR_NEWS_ERROR, GET_SIMILAR_NEWS_START} from "store/constants";
import {locoScroll} from "components/SmoothScroll";
import ApiClient from "service/ApiClient";

const apiClient = new ApiClient();

function* getSimilarNews({ payload: { category, id } }) {
    try {
        const similarNews = yield call(apiClient.getSimilarNews, category, id);
        yield put({
            type: GET_SIMILAR_NEWS_END,
            payload: similarNews
        });
        yield locoScroll.update();
    } catch ({ message }) {
        yield put({
            type: GET_SIMILAR_NEWS_ERROR,
            payload: message
        })
    }
}

export default function* getSimilarNewsSaga () {
    yield takeLatest(GET_SIMILAR_NEWS_START, getSimilarNews);
}