import { takeLatest, put, call } from 'redux-saga/effects';
import ApiClient from "service/ApiClient";
import {GET_SINGLE_ARTICLE_END,
    GET_SINGLE_ARTICLE_ERROR,
    GET_SINGLE_ARTICLE_START,
    GET_NEXT_NEWS, GET_NEXT_NEWS_ERROR} from "store/constants";
import {locoScroll} from "components/SmoothScroll";

const apiClient = new ApiClient();

function* getSingleArticle({ payload }) {
    try {
        const article = yield call(apiClient.getArticleById, payload);
        yield put({
            type: GET_SINGLE_ARTICLE_END,
            payload: article
        });
        yield locoScroll.update();

        const nextNews = yield call(apiClient.getNextNews, article.createdAt);
        try {
            yield put({
                type: GET_NEXT_NEWS,
                payload: nextNews[0] || {}
            });
        } catch ({ message }) {
            yield put({
                type: GET_NEXT_NEWS_ERROR,
                payload: message
            });
        }
    } catch ({ message }) {
        yield put({
            type: GET_SINGLE_ARTICLE_ERROR,
            payload: message
        });
    }
}

export default function* getSingleArticleSaga () {
    yield takeLatest(GET_SINGLE_ARTICLE_START, getSingleArticle);
}
