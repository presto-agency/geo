import { takeLatest, put, call } from 'redux-saga/effects';
import ApiClient from "service/ApiClient";
import {locoScroll} from "components/SmoothScroll";
import {GET_NEWS_END, GET_NEWS_ERROR, GET_NEWS_START} from "../../constants";

const apiClient = new ApiClient();

function* getNews({ payload: { start } }) {
    try {
        const news = yield call(apiClient.getNews, start);
        const newsCount = yield call(apiClient.getNewsCount, start);
        yield put({
            type: GET_NEWS_END,
            payload: { news, newsCount }
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