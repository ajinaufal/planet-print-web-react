export class ProductRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/v1/product/');
    }

    async create(params) {
        return await this.apiService.post('/v1/product/create', params);
    }

    async delete(params) {
        return await this.apiService.post('/v1/product/delete', params);
    }

    async update(params) {
        return await this.apiService.post('/v1/product/update', params);
    }
}
