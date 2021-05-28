import {
    GET_PROJECTS_START,
    GET_PROJECTS_END,
    GET_PROJECTS_ERROR,
    SEARCH_PROJECTS_END,
    SEARCH_PROJECTS_ERROR,
    SEARCH_PROJECTS_START,
    GET_SINGLE_PROJECT_END,
    GET_SINGLE_PROJECT_ERROR,
    GET_SINGLE_PROJECT_START,
    GET_SIMILAR_PROJECTS_END,
    GET_SIMILAR_PROJECTS_ERROR,
    GET_SIMILAR_PROJECTS_START,
    LOAD_MORE_PROJECTS_END,
    LOAD_MORE_PROJECTS_ERROR,
    LOAD_MORE_PROJECTS_START, GET_PROJECTS_CATEGORIES_START, GET_PROJECTS_CATEGORIES_END, GET_PROJECTS_CATEGORIES_ERROR
} from "store/constants";

const initialState = {
    loading: false,
    data: [],
    totalCount: null,
    currentPage: 1,
    filters: {
        category: '',
        location: '',
        sort: '',
    },
    error: null,
    selected: {
        loading: false,
        data: {},
        error: null
    },
    singleProject: {
        loading: false,
        data: {},
        error: null
    },
    similar: {
        loading: false,
        data: {},
        error: null
    },
    categories: {
        loading: false,
        data: [],
        error: null
    }
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS_START:
            return {
                ...state,
                loading: true
            };
        case GET_PROJECTS_END:
            return {
                ...state,
                loading: false,
                data: action.payload.posts,
                totalCount: action.payload.postsCount,
                currentPage: action.payload.currPage,
                filters: {
                    ...state.filters,
                    category: action.payload.category,
                    location: action.payload.location,
                    sort: action.payload.sort
                }
            };
        case GET_PROJECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // search //
        case SEARCH_PROJECTS_START:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    loading: true
                }
            };
        case SEARCH_PROJECTS_END:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    loading: false,
                    data: action.payload
                }
            };
        case SEARCH_PROJECTS_ERROR:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    loading: false,
                    error: action.payload
                }
            };
        // single project //
        case GET_SINGLE_PROJECT_START:
            return {
                ...state,
                singleProject: {
                    ...state.singleProject,
                    loading: true
                }
            };
        case GET_SINGLE_PROJECT_END:
            return {
                ...state,
                singleProject: {
                    ...state.singleProject,
                    loading: false,
                    data: action.payload
                }
            };
        case GET_SINGLE_PROJECT_ERROR:
            return {
                ...state,
                singleProject: {
                    ...state.singleProject,
                    loading: false,
                    error: action.payload
                }
            };
        // similar projects //
        case GET_SIMILAR_PROJECTS_START:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: true
                }
            };
        case GET_SIMILAR_PROJECTS_END:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: false,
                    data: action.payload
                }
            };
        case GET_SIMILAR_PROJECTS_ERROR:
            return {
                ...state,
                similar: {
                    ...state.similar,
                    loading: false,
                    error: action.payload
                }
            };
        // load more projects //
        case LOAD_MORE_PROJECTS_START:
            return {
                ...state,
                loading: true
            };
        case LOAD_MORE_PROJECTS_END:
            return {
                ...state,
                loading: false,
                data: [
                    ...state.data,
                    ...action.payload.posts
                ],
                currentPage: action.payload.currPage,
                filters: {
                    ...state.filters,
                    category: action.payload.category,
                    location: action.payload.location,
                    sort: action.payload.sort
                }
            };
        case LOAD_MORE_PROJECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        // projects categories //
        case GET_PROJECTS_CATEGORIES_START:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: true
                }
            };
        case GET_PROJECTS_CATEGORIES_END:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: false,
                    data: action.payload
                }
            };
        case GET_PROJECTS_CATEGORIES_ERROR:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
}