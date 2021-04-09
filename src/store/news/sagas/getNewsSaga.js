import { takeLatest, put, call } from 'redux-saga/effects';
import ApiClient from "service/ApiClient";
import {locoScroll} from "components/SmoothScroll";
import {GET_NEWS_END, GET_NEWS_ERROR, GET_NEWS_START} from "store/constants";

const apiClient = new ApiClient();

function* getNews({ payload: { start, currentPage, query, category, sort } }) {
    try {
        const news = yield call(apiClient.getNews, start, query, category, sort);
        const newsCount = yield call(apiClient.getNewsCount, start, query, category, sort);
        yield put({
            type: GET_NEWS_END,
            payload: { news, newsCount, currentPage, query, category, sort }
        });
        yield locoScroll.update();
    } catch ({ message }) {
        yield put({
            type: GET_NEWS_ERROR,
            payload: message
        });
    }
}

export default function* getNewsSaga () {
    yield takeLatest(GET_NEWS_START, getNews);
}