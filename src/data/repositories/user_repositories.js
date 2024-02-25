export class UserRepository {
    constructor(datasources) {
        this.local = datasources.userLocal;
    }

    getUserLocal() {
        return this.local.get();
    }

    updateUserLocal(params) {
        return this.local.update(params);
    }

    deleteUserLocal() {
        return this.local.delete();
    }
}
