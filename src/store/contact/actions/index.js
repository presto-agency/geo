import {SUBMIT_CONTACT_START} from "store/constants";

export const submitContact = (data) => ({
    type: SUBMIT_CONTACT_START,
    payload: data
});