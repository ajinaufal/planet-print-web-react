export class CategoryRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/v1/category/');
    }

    async create(params) {
        return await this.apiService.post('/v1/category/create', params);
    }

    async delete(params) {
        return await this.apiService.post('/v1/category/delete', params);
    }

    async update(params) {
        return await this.apiService.post('/v1/category/update', params);
    }
}
