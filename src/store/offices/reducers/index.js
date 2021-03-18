import {GET_OFFICES_START, GET_OFFICES_END, GET_SERVICES_ERROR} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function officesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_OFFICES_START:
            return {
                ...state,
                loading: true
            };
        case GET_OFFICES_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_SERVICES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}