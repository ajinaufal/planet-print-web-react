export class ProductRemoteDatasources {
    constructor(service) {
        this.apiService = service.apiService;
    }

    async get() {
        return await this.apiService.get('/transaction/');
    }

    async approve(params) {
        return await this.apiService.post('/transaction/approve', params);
    }
}
