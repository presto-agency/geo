import {CLOSE_MODAL, OPEN_MODAL} from "store/constants";

export const openModal = (type) => ({
    type: OPEN_MODAL,
    payload: type
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});