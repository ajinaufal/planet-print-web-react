import { RequestLoginEntities } from '../entities/request/request_login_entities';
import { ResponseLoginEntities } from '../entities/response/response_login_entities';

export class AuthenticationUsecase {
    constructor(reposiotry) {
        this.authentication = reposiotry.authentication;
        this.user = reposiotry.user;
    }

    async login(params) {
        const resp = await this.authentication.login(new RequestLoginEntities(params));
        if (resp?.status === 200) this.user.updateUserLocal(resp?.data?.data);

        return {
            request: new RequestLoginEntities(resp?.config?.data),
            data: new ResponseLoginEntities(resp?.data),
            status: resp?.status,
            message: resp?.data?.message,
        };
    }

    async register(params) {
        const resp = await this.authentication.register(params);

        return {
            data: resp?.data?.data,
            status: resp?.status,
            message: resp?.data?.message,
        };
    }
}
