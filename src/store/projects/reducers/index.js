import {
    GET_PROJECTS_START,
    GET_PROJECTS_END,
    GET_PROJECTS_ERROR,
    SEARCH_PROJECTS_END,
    SEARCH_PROJECTS_ERROR,
    SEARCH_PROJECTS_START} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null,
    selected: {
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
                data: action.payload
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
        default:
            return state;
    }
}