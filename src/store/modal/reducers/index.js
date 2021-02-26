import {CLOSE_MODAL, OPEN_MODAL} from "store/constants";

const initialState = {
    loading: false,
    isOpen: false,
    type: null,
    error: null
};

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                type: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                type: null
            };
        default:
            return state;
    }
}