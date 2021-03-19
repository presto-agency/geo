import {GET_HOMEPAGE_END, GET_HOMEPAGE_ERROR, GET_HOMEPAGE_START} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOMEPAGE_START:
            return {
                ...state,
                loading: true
            };
        case GET_HOMEPAGE_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_HOMEPAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}