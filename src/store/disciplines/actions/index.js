import {SWITCH_DISCIPLINES, SWITCH_DISCIPLINES_ERROR, GET_DISCIPLINES_START} from "store/constants";

export const switchDisciplines = (disciplines) => ({
    type: SWITCH_DISCIPLINES,
    payload: disciplines
});

export const switchDisciplinesError = (error) => ({
    type: SWITCH_DISCIPLINES_ERROR,
    payload: error
});

export const getDisciplines = () => ({
    type: GET_DISCIPLINES_START,
    payload: null
});