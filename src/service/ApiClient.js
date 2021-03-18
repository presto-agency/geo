const _baseURL = process.env.REACT_APP_API_URL;

export default class ApiClient {

    async getSources(url, method = 'GET', body = null) {

        const response = await fetch(`${_baseURL}/${url}`, {
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

    getDisciplines = async () => {
        return await this.getSources('disciplines');
    };

    getServices = async () => {
        return await this.getSources('services');
    };

    getProjectByDisciplineId = async (id = '') => {
        return await this.getSources(`projects?discipline.id_eq=${id}`);
    };

    getOffices = async () => {
        return await this.getSources('offices');
    };

    postContacts = async (data) => {
        return await this.getSources('clients-contacts', 'POST', data);
    };

}