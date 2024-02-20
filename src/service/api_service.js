import axios from 'axios';
// import { localStorageEnums } from '../utils/enums/local_storage';

export class ApiService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:4000/api',
            timeout: 60000,
            headers: {
                'Content-Type': this.contentType,
                'secret-key': process.env.API_KEY,
                // Authorization: this.getToken(),
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => {
                if (response.status === 401) console.log('can tag');
                return response;
            },
            (error) => {
                if (error?.response) return error.response;
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

    // getToken() {
    //     const user = new UserInfoEntities(
    //         JSON.parse(localStorage.getItem(localStorageEnums.userInfo))
    //     );
    //     return `Bearer ${user.token}`;
    // }

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
