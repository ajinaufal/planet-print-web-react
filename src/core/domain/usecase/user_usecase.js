import {
    LocalFailure,
    RepositoryFailure,
    ServerFailure,
    UsecaseFailure,
} from '../../services/exception_service';

export class UserUsecase {
    constructor({ repository }) {
        this.repository = repository;
    }

    async listUser(params) {
        try {
            const resp = await this.repository?.user?.list(params);
            return resp;
        } catch (error) {
            if (
                error instanceof ServerFailure ||
                error instanceof LocalFailure ||
                error instanceof RepositoryFailure
            ) {
                return error;
            }
            throw new UsecaseFailure(error.message);
        }
    }

    async deleteUser(params) {
        try {
            const resp = await this.repository?.user?.delete(params);
            return resp;
        } catch (error) {
            if (
                error instanceof ServerFailure ||
                error instanceof LocalFailure ||
                error instanceof RepositoryFailure
            ) {
                return error;
            }
            throw new UsecaseFailure(error.message);
        }
    }
}
