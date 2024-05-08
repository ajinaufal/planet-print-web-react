import axios from 'axios';
export class ApiService {
  constructor({ url, datasourceLocal, apiKey }) {
    this.datasourceLocal = datasourceLocal;
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: 60000,
      headers: {
        'Content-Type': this.contentType,
        Authorization: this.token(),
        'api-key': apiKey,
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.response) {
          if (error.response.status === 401 && window.location.pathname === '/login')
            return error.response;
          if (error.response.status === 401) this.redirectToLogin();
          return error.response;
        }
        return {
          status: 500,
          message: error?.message,
          config: error?.config,
          data: {
            status: 'failure',
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

  token() {
    const user = this.datasourceLocal.userLocal.get();
    if (user) return `bearer ${user?.token}`;
    return '';
  }

  redirectToLogin() {
    this.datasourceLocal?.branchLocal?.delete();
    this.datasourceLocal?.customerLocal?.delete();
    this.datasourceLocal?.userLocal?.delete();
    window.location.href = '/login';
  }

  updateContentType(contentType) {
    if (contentType) {
      const headers = this.axiosInstance.defaults.headers;
      headers['Content-Type'] = contentType;
      this.axiosInstance.defaults.headers = headers;
    }
  }

  async get(url, data = {}) {
    const response = await this.axiosInstance.get(url, { data });
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
