import { ResponseLoginDataEntities } from '../../../domain/entities/response/response_login_entities';
import { localStorageEnums } from '../../../utils/enums/local_storage';

export class UserLocalDatasources {
    get() {
        return new ResponseLoginDataEntities(
            JSON.parse(localStorage.getItem(localStorageEnums.userLocal) || '{}')
        );
    }

    update(params) {
        if (params) localStorage.setItem(localStorageEnums.userLocal, JSON.stringify(params));
    }

    delete() {
        return localStorage.removeItem(localStorageEnums.userLocal);
    }
}
