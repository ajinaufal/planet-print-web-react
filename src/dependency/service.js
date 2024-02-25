import ApiService from '../service/api_service';

export function serviceDependency({ userLocal }) {
    const getUserlocal = userLocal?.get();
    const apiService = new ApiService({ token: getUserlocal?.token });

    return { apiService };
}
