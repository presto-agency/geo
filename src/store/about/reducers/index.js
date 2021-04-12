import {SHOW_IN_VIEWPORT} from "store/constants";
import {GET_ABOUT_PAGE_END, GET_ABOUT_PAGE_ERROR, GET_ABOUT_PAGE_START} from "../../constants";

const initialState = {
    loading: false,
    data: {},
    isVisible: false,
    error: null
};

export default function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_IN_VIEWPORT:
            return {
                ...state,
                isVisible: action.payload
            };
        case GET_ABOUT_PAGE_START:
            return {
                ...state,
                loading: true
            };
        case GET_ABOUT_PAGE_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_ABOUT_PAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}