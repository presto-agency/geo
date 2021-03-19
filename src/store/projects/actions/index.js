import {GET_PROJECTS_START, SEARCH_PROJECTS_START} from "store/constants";

export const getProjects = () => ({
    type: GET_PROJECTS_START,
    payload: null
});

export const searchProjects = (query) => ({
    type: SEARCH_PROJECTS_START,
    payload: query
});