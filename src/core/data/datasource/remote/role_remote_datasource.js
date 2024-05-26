import { ServerFailure } from '../../../services/exception_service';

export class RoleRemoteDatasources {
    constructor({ service }) {
        this.api = service?.api;
    }

    async create(params) {
        const resp = await this.api.post('/role/create', params);
        return resp;
    }

    async list() {
        const resp = await this.api.get('/v1/role/');
        if (resp?.status == 200) return resp?.data;
        console.error(`Error remote source : ${resp?.data?.error_message}`);
        throw new ServerFailure(resp);
    }
}
