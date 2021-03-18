import {GET_SERVICES_END, GET_SERVICES_ERROR, GET_SERVICES_START, MOVE_SERVICES_CAROUSEL} from "store/constants";

const initialState = {
    loading: false,
    data: {},
    activeTab: null,
    error: null
};

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICES_START:
            return {
                ...state,
                loading: true
            };
        case GET_SERVICES_END:
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
        case MOVE_SERVICES_CAROUSEL:
            return {
                ...state,
                activeTab: action.payload
            };
        default:
            return state;
    }
}