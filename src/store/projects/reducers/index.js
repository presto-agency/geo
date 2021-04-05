import {
    GET_PROJECTS_START,
    GET_PROJECTS_END,
    GET_PROJECTS_ERROR,
    SEARCH_PROJECTS_END,
    SEARCH_PROJECTS_ERROR,
    SEARCH_PROJECTS_START,
    GET_SINGLE_PROJECT_END, 
    GET_SINGLE_PROJECT_ERROR,
    GET_SINGLE_PROJECT_START} from "store/constants";
import {GET_SIMILAR_PROJECTS_END, GET_SIMILAR_PROJECTS_ERROR, GET_SIMILAR_PROJECTS_START} from "../../constants";

const initialState = {
    loading: false,
    data: {},
    totalCount: null,
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
                totalCount: action.payload.postsCount
            };
        case GET_PROJECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
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
        default:
            return state;
    }
}