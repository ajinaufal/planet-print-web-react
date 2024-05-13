import axios from 'axios';

export class ApiService {
    constructor({ domain, token }) {
        this.datasourceLocal = datasourceLocal;
        this.axiosInstance = axios.create({
            baseURL: domain,
            timeout: 60000,
            headers: { Authorization: token ? `bearer ${token}` : '' },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return error?.response;
            }
        );

        this.axiosInstance.interceptors.request.use(
            (config) => config,
            (error) => {
                console.error('Request error:', error);
                return Promise.reject(error);
            }
        );
    }

    redirectToLogin() {
        this.datasourceLocal?.branchLocal?.delete();
        this.datasourceLocal?.customerLocal?.delete();
        this.datasourceLocal?.userLocal?.delete();
        window.location.href = '/login';
    }

    jsonContentType() {
        const headers = this.axiosInstance.defaults.headers;
        headers['Content-Type'] = 'application/json';
        this.axiosInstance.defaults.headers = headers;
    }

    formContentType() {
        const headers = this.axiosInstance.defaults.headers;
        headers['Content-Type'] = 'multipart/form-data';
        this.axiosInstance.defaults.headers = headers;
    }

    async get(url, data = {}) {
        this.jsonContentType();
        const response = await this.axiosInstance.get(url, { data });
        return response;
    }

    async post(url, data) {
        this.jsonContentType();
        const response = await this.axiosInstance.post(url, data);
        return response;
    }

    async put(url, data) {
        this.jsonContentType();
        const response = await this.axiosInstance.put(url, data);
        return response;
    }

    async delete(url) {
        this.jsonContentType();
        const response = await this.axiosInstance.delete(url);
        return response;
    }

    async upload(url, data, onUploadProgress) {
        this.formContentType();
        const response = await this.axiosInstance.post(url, data, { onUploadProgress });
        return response;
    }
}

export default ApiService;
