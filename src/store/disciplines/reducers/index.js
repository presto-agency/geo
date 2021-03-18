import {
    SWITCH_DISCIPLINES,
    SWITCH_DISCIPLINES_ERROR,
    GET_DISCIPLINES_ERROR,
    GET_DISCIPLINES_START,
    GET_DISCIPLINES_END } from "store/constants";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function disciplinesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DISCIPLINES_START:
            return {
                ...state,
                loading: true
            };
        case GET_DISCIPLINES_END:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_DISCIPLINES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SWITCH_DISCIPLINES:
            return {
                ...state,
                data: action.payload
            };
        case SWITCH_DISCIPLINES_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}