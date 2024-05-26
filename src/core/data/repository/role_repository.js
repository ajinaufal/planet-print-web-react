import { RoleListResponseEntities } from '../../domain/entities/response/role_list_response_entities';
import { EitherService } from '../../services/either_service';
import { RepositoryFailure, ServerFailure } from '../../services/exception_service';

export class RoleRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }

    async create(params) {
        try {
            const resp = await this.datasource.role.create(params);
            // return EitherService.right(new RegisterResponseEntities(resp?.data));
        } catch (error) {
            if (error instanceof ServerFailure) {
                return EitherService.left(error);
            } else {
                return EitherService.left(new RepositoryFailure(error.message));
            }
        }
    }

    async list() {
        try {
            const resp = await this.datasource.role.list();
            return EitherService.right(new RoleListResponseEntities(resp?.data));
        } catch (error) {
            if (error instanceof ServerFailure) {
                return EitherService.left(error);
            } else {
                return EitherService.left(new RepositoryFailure(error.message));
            }
        }
    }
}
