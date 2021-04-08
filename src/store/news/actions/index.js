import {GET_NEWS_START, GET_SIMILAR_NEWS_START, GET_SINGLE_ARTICLE_START} from "../../constants";

export const getNews = (pageNumber) => ({
    type: GET_NEWS_START,
    payload: pageNumber
});

export const getSingleArticle = (id) => ({
    type: GET_SINGLE_ARTICLE_START,
    payload: id
});

export const getSimilarNews = (date) => ({
    type: GET_SIMILAR_NEWS_START,
    payload: date
});