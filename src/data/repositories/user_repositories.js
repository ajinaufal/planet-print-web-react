export class UserRepository {
    constructor(datasources) {
        this.local = datasources.userLocal;
    }

    async getUserLocal() {
        return await this.local.get();
    }

    async updateUserLocal(params) {
        return await this.local.update(params);
    }

    async deleteUserLocal() {
        return await this.local.delete();
    }
}
