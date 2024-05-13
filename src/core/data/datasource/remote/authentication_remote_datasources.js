import { LoginResponseEntities } from '../../../domain/entities/response/login_response_entities';
import { ServerFailure } from '../../../services/exception_service';

export class AuthenticationRemoteDatasource {
    constructor({ service }) {
        this.api = service.api;
    }

    async login(params) {
        const resp = await this.api.post('/auth/login', params);
        if (resp.status == 200) return new LoginResponseEntities(resp?.data?.data);
        throw new ServerFailure(resp);
    }

    async register(params) {
        const resp = await this.api.post('/auth/register', params);
        if (resp.status == 200) return resp ;
        throw new ServerFailure(resp);
    }
}
