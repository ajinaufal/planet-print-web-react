import { localStorageEnums } from '../../../utils/enums/local_storage';

export class UserLocalDatasources {
    get() {
        return localStorage.getItem(localStorageEnums.userLocal);
    }

    update(params) {
        return localStorage.setItem(localStorageEnums.userLocal, JSON.stringify(params));
    }

    delete(params) {
        return localStorage.removeItem(localStorageEnums.userLocal);
    }
}
