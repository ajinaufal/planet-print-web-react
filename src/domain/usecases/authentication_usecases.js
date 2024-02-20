export class AuthenticationUsecase {
    constructor(reposiotry) {
        this.authentication = reposiotry.authentication;
        this.user = reposiotry.user;
    }

    async login(params) {
        // const resp = await this.authentication.login(new RequestLoginEntities(params));

        // if (resp?.status === 200) console.log(resp.data);

        console.log('test masuk');
    }

    async register(params) {
        const resp = await this.authentication.register(params);

        if (resp?.status === 200) console.log(resp.data);
    }
}
