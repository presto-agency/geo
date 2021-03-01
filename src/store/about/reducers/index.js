import {SHOW_IN_VIEWPORT} from "store/constants";

const initialState = {
    loading: false,
    data: [],
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
        default:
            return state;
    }
}