import { RequestLoginEntities } from '../entities/request/request_login_entities';

export class AuthenticationUsecase {
    constructor(reposiotry) {
        this.authentication = reposiotry.authentication;
        this.user = reposiotry.user;
    }

    async login(params) {
        const resp = await this.authentication.login(new RequestLoginEntities(params));

        if (resp?.status === 200) this.user.update({});
    }

    async register(params) {
        const resp = await this.authentication.register()
    }
}
