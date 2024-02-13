export class AuthenticationRepository {
    constructor(datasources) {
        this.remote = datasources.authentication;
    }

    async login(params) {
        return await this.remote.login(params);
    }

    async register(params) {
        return await this.remote.register(params);
    }

    async logout() {
        return await this.remote.logout();
    }
}
