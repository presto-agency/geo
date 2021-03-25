import {
    GET_PROJECTS_START,
    SEARCH_PROJECTS_START,
    GET_SINGLE_PROJECT_START,
    GET_SIMILAR_PROJECTS_START} from "store/constants";

export const getProjects = () => ({
    type: GET_PROJECTS_START,
    payload: null
});

export const searchProjects = (query) => ({
    type: SEARCH_PROJECTS_START,
    payload: query
});

export const getSingleProject = (id) => ({
   type: GET_SINGLE_PROJECT_START,
   payload: id
});

export const getSimilarProjects = (disciplineId) => ({
    type: GET_SIMILAR_PROJECTS_START,
    payload: disciplineId
});