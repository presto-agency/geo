import paginationParams from "constants/paginationParams";
import { transformProjectUrl, transformNewsUrl } from "utils/transformUrls";
const _baseURL = process.env.REACT_APP_API_URL;

export default class ApiClient {

    async getSources(url, method = 'GET', body = null) {
        const response = await fetch(`${_baseURL}/api/${url}`, {
            method: method,
            body: !!body ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if(!response.ok) {
            throw new Error(`Could don't fetch received ${response.status}`);
        }

        return response.json();
    }

    /*
    GET
     */
    getDisciplines = async () => {
        return await this.getSources('disciplines');
    };

    getServices = async () => {
        return await this.getSources('services');
    };

    getProjects = async (start = paginationParams.start, category = '', location = '', sort = 'DESC') => {
        return await this.getSources(`projects?${transformProjectUrl(start, category, location, sort)}`);
    };

    getProjectsCount = async (start = paginationParams.start, category = '', location = '', sort = 'DESC') => {
        return await this.getSources(`projects/count?${transformProjectUrl(start, category, location, sort)}`);
    };

    getProjectByDisciplineId = async ({ disciplineId, projectId }) => {
        return await this.getSources(`projects?discipline.id_eq=${disciplineId}&id_ne=${projectId}`);
    };

    getProjectsByQuery = async (query) => {
        return await this.getSources(`projects?name_contains=${query}`);
    };

    getProjectById = async (id) => {
        return await this.getSources(`projects/${id}`);
    };

    getProjectsCategories = async () => {
        return await  this.getSources('project-catogiries');
    }

    getNews = async (start = paginationParams.start, query = '', category = '', sort = 'ASC') => {
        return await this.getSources(`news-items?${transformNewsUrl(start, query, category, sort)}`);
    };

    getNewsCount = async (start = paginationParams.start, query = '', category = '', sort = 'ASC') => {
        return await this.getSources(`news-items/count?${transformNewsUrl(start, query, category, sort)}`);
    };

    getArticleById = async (id) => {
        return await this.getSources(`news-items/${id}`);
    };

    getSimilarNews = async (category = '', articleId) => {
        return await this.getSources(`news-items?category=${category}&id_ne=${articleId}&_limit=2`);
    };

    getNextNews = async (createdDate = '') => {
        return await this.getSources(`news-items?createdAt_gt=${createdDate}`);
    };

    getOffices = async () => {
        return await this.getSources('offices');
    };

    getSocial = async () => {
        return await this.getSources('social-links');
    };

    /*
    GET Pages
     */

    getHome = async () => {
        return await this.getSources('home');
    };

    getAbout = async () => {
        return await this.getSources('about-us');
    };

    getServicesPage = async () => {
        return await this.getSources('services-page');
    };

    /*
    POST
     */
    postContacts = async (data) => {
        return await this.getSources('clients-contacts', 'POST', data);
    };

}