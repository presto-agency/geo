import {GET_SOCIAL_END, GET_SOCIAL_ERROR, GET_SOCIAL_START} from "store/constants";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export default function socialReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SOCIAL_START:
            return {
                ...state,
                loading: true
            };
        case GET_SOCIAL_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_SOCIAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}