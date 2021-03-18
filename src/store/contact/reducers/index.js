import {SUBMIT_CONTACT_ERROR} from "store/constants";
import {SUBMIT_CONTACT_END, SUBMIT_CONTACT_START} from "../../constants";

const initialState = {
    loading: false,
    error: null
};

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_CONTACT_START:
            return {
                ...state,
                loading: true,
            };
        case SUBMIT_CONTACT_END:
            return {
                ...state,
                loading: false
            };
        case SUBMIT_CONTACT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}