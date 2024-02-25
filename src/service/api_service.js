import axios from 'axios';

export class ApiService {
    constructor({ token }) {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:4000/api',
            timeout: 60000,
            headers: {
                'Content-Type': this.contentType,
                'secret-key':
                    '0929f289ae7c3c6ef8983eb6562a7e636a2166a0ba6325a848a6723b2f68bcfb684312e52c1ecbd70b5510fc888b81d9c5a50af2bb71af41ed82d191272ae6a7',
                Authorization: token,
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error?.response) {
                    if (error.response.status === 401) this.redirectToLogin();
                    return error.response;
                }
                return {
                    status: 500,
                    message: error?.message,
                    config: error?.config,
                    data: {
                        status: 'failure',
                        data: {},
                        error_message:
                            'Check your internet connection, ensure you are connected to the internet and try refreshing the page',
                    },
                };
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
        window.location.href = '/login';
    }

    updateContentType(contentType) {
        if (contentType) {
            const headers = this.axiosInstance.defaults.headers;
            headers['Content-Type'] = contentType;
            this.axiosInstance.defaults.headers = headers;
        }
    }

    async get(url) {
        const response = await this.axiosInstance.get(url);
        return response;
    }

    async post(url, data) {
        const response = await this.axiosInstance.post(url, data);
        return response;
    }

    async put(url, data) {
        const response = await this.axiosInstance.put(url, data);
        return response;
    }

    async delete(url) {
        const response = await this.axiosInstance.delete(url);
        return response;
    }
}

export default ApiService;
