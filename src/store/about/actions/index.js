import {SHOW_IN_VIEWPORT, GET_ABOUT_PAGE_START} from "store/constants";

export const showInViewport = (isVisible) => ({
    type: SHOW_IN_VIEWPORT,
    payload: isVisible
});

export const getAboutPage = () => ({
    type: GET_ABOUT_PAGE_START,
    payload: null
});