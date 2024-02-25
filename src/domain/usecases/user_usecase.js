export class UserUsecase {
    constructor(reposiotry) {
        this.user = reposiotry.user;
    }

    getUserLocal() {
        const resp = this.user.getUserLocal();
        return resp;
    }
}
