import axios from 'axios';
export class ApiService {
  constructor({ domain }) {
    this.axiosInstance = axios.create({
      baseURL: domain,
      timeout: 60000,
      headers: {
        'Content-Type': this.contentType,
        Authorization: this.token(),
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return error.response;
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

  async upload(file, onUploadProgress) {
    const headers = this.axiosInstance.defaults.headers;
    headers['Content-Type'] = contentType;
    this.axiosInstance.defaults.headers = headers;

    const formData = new FormData();
    formData.append('file', file);

    const response = await this.axiosInstance.post(url, data, { onUploadProgress });

    // (progressEvent) => {
    //   const uploadPercentage = Math.round(
    //     (progressEvent.loaded / progressEvent.total) * 100
    //   );
    //   setProgress(uploadPercentage);
    // }
    return { response };
  }
}

export default ApiService;
