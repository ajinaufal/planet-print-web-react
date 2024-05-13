import localStorageEnum from '../../../enums/local_storage';

export class TokenLocalDatasource {
    constructor() {}

    get() {
        const jsonLocal = JSON.parse(localStorage.getItem(localStorageEnum.token) || '{}');
        if ((jsonLocal?.token || '').length != 0) return jsonLocal.token;
        return '';
    }

    update(token) {
        const params = {};
        if ((token || '').length > 0) params.token = token || '';
        return localStorage.setItem(localStorageEnum.userInfo, JSON.stringify(params));
    }

    delete() {
        return localStorage.removeItem(localStorageEnum.token);
    }
}
