import ApiService from '../services/api_service';

export function ServiceInjector(datasourceLocal) {
    const domain = 'http://localhost:4000/';
    const token = datasourceLocal?.token?.get() || '';
    const api = new ApiService({ domain, token });

    return { api };
}
