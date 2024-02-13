export class AuthenticationRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async login(params) {
        return await this.apiService.post('/auth/login', params);
    }

    async register(params) {
        return await this.apiService.post('/auth/register', params);
    }

    async logout() {
        return await this.apiService.get('/auth/logout');
    }
}
