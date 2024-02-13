export class ProductRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/product/');
    }

    async create(params) {
        return await this.apiService.post('/product/create', params);
    }

    async delete(params) {
        return await this.apiService.post('/product/delete', params);
    }

    async update(params) {
        return await this.apiService.post('/product/update', params);
    }
}
