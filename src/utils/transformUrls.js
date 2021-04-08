import paginationParams from "constants/paginationParams";

export const transformProjectUrl = (start, category, location, sort) => {
    let startParam = !!paginationParams.limit ? `_start=${start}&_limit=${paginationParams.limit}` : '';
    let categoryParam = !!category ? `&project_categories.name_eq=${category}` : '';
    let locationParam = !!location ? `&country_eq=${location}`: '';
    let sortParam = !!sort ? `&_sort=createdAt:${sort}` : '';

    return `${startParam}${categoryParam}${locationParam}${sortParam}`;
};

export const transformNewsUrl = (start, query, category, sort) => {
    let startParam = !!paginationParams.limit ? `_start=${start}&_limit=${paginationParams.limit}` : '';
    let queryParam = !!query ? `&title_contains=${query}` : '';
    let categoryParam = !!category ? `&category=${category}` : '';
    let sortParam = !!sort ? `&_sort=createdAt:${sort}` : '';

    return `${startParam}${queryParam}${categoryParam}${sortParam}`;
};