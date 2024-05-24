import { UserListResponseEntities } from '../../domain/entities/response/user_list_response_entities';
import { RepositoryFailure, ServerFailure } from '../../services/exception_service';
import { EitherService } from '../../services/either_service';

export class UserRepository {
  constructor({ datasource }) {
    this.datasource = datasource;
  }

  async list(params) {
    try {
      const resp = await this.datasource.user.list(params);
      return EitherService.right(new UserListResponseEntities(resp?.data));
    } catch (error) {
      if (error instanceof ServerFailure) {
        return EitherService.left(error);
      } else {
        return EitherService.left(new RepositoryFailure(error.message));
      }
    }
  }
}
