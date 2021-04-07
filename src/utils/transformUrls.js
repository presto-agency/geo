import paginationParams from "constants/paginationParams";

export const transformProjectUrl = (start, category, location, sort) => {
    let startParam = !!paginationParams.limit ? `_start=${start}&_limit=${paginationParams.limit}` : '';
    let categoryParam = !!category ? `&project_categories.name_eq=${category}` : '';
    let locationParam = !!location ? `&country_eq=${location}`: '';
    let sortParam = !!sort ? `&_sort=createdAt:${sort}` : '';

    return `${startParam}${categoryParam}${locationParam}${sortParam}`;
};