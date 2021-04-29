import {GET_SERVICES_PAGE_END, GET_SERVICES_PAGE_ERROR, GET_SERVICES_PAGE_START} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function servicesPageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICES_PAGE_START:
            return {
                ...state,
                loading: true
            };
        case GET_SERVICES_PAGE_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_SERVICES_PAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}