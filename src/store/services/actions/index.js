import {MOVE_SERVICES_CAROUSEL, GET_SERVICES_START} from "store/constants";

export const moveServicesCarousel = (id) => ({
    type: MOVE_SERVICES_CAROUSEL,
    payload: id
});

export const getServices = () => ({
    type: GET_SERVICES_START,
    payload: null
});