export class DiscountRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/discount/');
    }

    async create(params) {
        return await this.apiService.post('/discount/create', params);
    }

    async delete(params) {
        return await this.apiService.post('/discount/delete', params);
    }
}
