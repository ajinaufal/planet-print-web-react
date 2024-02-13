export class CategoryRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/category/');
    }

    async create(params) {
        return await this.apiService.post('/category/create', params);
    }

    async delete(params) {
        return await this.apiService.post('/category/delete', params);
    }

    async update(params) {
        return await this.apiService.post('/category/update', params);
    }
}
