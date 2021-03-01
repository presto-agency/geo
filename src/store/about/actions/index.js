import {SHOW_IN_VIEWPORT} from "store/constants";

export const showInViewport = (isVisible) => ({
    type: SHOW_IN_VIEWPORT,
    payload: isVisible
});