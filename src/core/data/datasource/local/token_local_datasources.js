import { LocalFailure } from '../../../services/exception_service';
import localStorageEnum from '../../../utils/enums/local_storage';

export class TokenLocalDatasource {
    constructor() {}

    get() {
        try {
            const token = localStorage.getItem(localStorageEnum.token) || '';
            if (token?.length != 0) return token;
            return '';
        } catch (error) {
            console.error(`Error local source: ${error.message}`);
            throw new LocalFailure(error?.message);
        }
    }

    update(token) {
        try {
            if ((token || '').length > 0) {
                localStorage.setItem(localStorageEnum.token, token);
            }
            return token;
        } catch (error) {
            console.error(`Error local source: ${error.message}`);
            throw new LocalFailure(error?.message);
        }
    }

    delete() {
        try {
            return localStorage.removeItem(localStorageEnum.token);
        } catch (error) {
            console.error(`Error local source: ${error.message}`);
            throw new LocalFailure(error?.message);
        }
    }
}
