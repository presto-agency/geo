import {
    GET_PROJECTS_START,
    SEARCH_PROJECTS_START,
    GET_SINGLE_PROJECT_START,
    GET_SIMILAR_PROJECTS_START,
    LOAD_MORE_PROJECTS_START,
    GET_PROJECTS_CATEGORIES_START
} from "store/constants";

export const getProjects = (params) => ({
    type: GET_PROJECTS_START,
    payload: params
});

export const loadMoreProjects = (params) => ({
    type: LOAD_MORE_PROJECTS_START,
    payload: params
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

export const getProjectsCategories = (categories) => ({
    type: GET_PROJECTS_CATEGORIES_START,
    payload: categories
});