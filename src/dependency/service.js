import ApiService from '../service/api_service';

export function serviceDependency() {
    const apiService = new ApiService();

    return { apiService };
}
