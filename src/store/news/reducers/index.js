import {
    GET_NEWS_END, GET_NEWS_ERROR, GET_NEWS_START,
    GET_NEXT_NEWS, GET_NEXT_NEWS_ERROR,
    GET_SIMILAR_NEWS_END, GET_SIMILAR_NEWS_ERROR, GET_SIMILAR_NEWS_START,
    GET_SINGLE_ARTICLE_END, GET_SINGLE_ARTICLE_ERROR, GET_SINGLE_ARTICLE_START
} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null,
    totalCount: null,
    currentPage: 1,
    filters: {
        query: '',
        category: '',
        sort: ''
    },
    singleArticle: {
        loading: false,
        data: {},
        error: null
    },
    similar: {
        loading: false,
        data: {},
        error: null
    },
    nextArticle: {
        data: {},
        error: null
    }
};

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS_START:
            return {
                ...state,
                loading: true
            };
        case GET_NEWS_END:
            return {
                ...state,
                loading: false,
                data: action.payload.news,
                totalCount: action.payload.newsCount,
                currentPage: action.payload.currentPage,
                filters: {
                    ...state.filters,
                    query: action.payload.query,
                    category: action.payload.category,
                    sort: action.payload.sort
                }
            };
        case GET_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_SINGLE_ARTICLE_START:
            return {
                ...state,
                singleArticle: {
                    ...state.singleArticle,
                    loading: true
                }
            };
        case GET_SINGLE_ARTICLE_END:
            return {
                ...state,
                singleArticle: {
                    ...state.singleArticle,
                    loading: false,
                    data: action.payload
                }
            };
        case GET_SINGLE_ARTICLE_ERROR:
            return {
                ...state,
                singleArticle: {
                    ...state.singleArticle,
                    loading: false,
                    error: action.payload
                }
            };
        case GET_SIMILAR_NEWS_START:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: true
                }
            };
        case GET_SIMILAR_NEWS_END:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: false,
                    data: action.payload
                }
            };
        case GET_SIMILAR_NEWS_ERROR:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: false,
                    error: action.payload
                }
            };
        case GET_NEXT_NEWS:
            return {
                ...state,
                nextArticle: {
                    ...state.nextArticle,
                    data: action.payload,
                }
            };
        case GET_NEXT_NEWS_ERROR:
            return {
                ...state,
                nextArticle: {
                    ...state.nextArticle,
                    error: action.payload
                }
            };
        default:
            return state;
    }
}