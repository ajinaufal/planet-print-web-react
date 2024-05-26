import { EitherService } from '../../services/either_service';
import {
    LocalFailure,
    RepositoryFailure,
    ServerFailure,
    UsecaseFailure,
} from '../../services/exception_service';

export class RoleUsecase {
    constructor({ repository }) {
        this.repository = repository;
    }

    async list() {
        try {
            const resp = await this.repository.role.list();
            return resp;
        } catch (error) {
            switch (true) {
                case error instanceof ServerFailure:
                    return error;
                case error instanceof LocalFailure:
                    return error;
                case error instanceof RepositoryFailure:
                    return error;
                default:
                    return EitherService.left(new UsecaseFailure(error.message));
            }
        }
    }
}
