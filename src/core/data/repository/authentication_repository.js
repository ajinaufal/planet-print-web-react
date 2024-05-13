import { LoginResponseEntities } from '../../domain/entities/response/login_response_entities';
import { RegisterResponseEntities } from '../../domain/entities/response/register_response_entities';
import { EitherService } from '../../services/either_service';
import { RepositoryFailure, ServerFailure } from '../../services/exception_service';

export class AuthenticationRepository {
  constructor(datasource) {
    this.datasource = datasource;
  }

  async login(params) {
    try {
      const resp = await this.datasource.auth.login(params);
      return EitherService.right(new LoginResponseEntities(resp?.data));
    } catch (error) {
      if (error instanceof ServerFailure) {
        return EitherService.left(error);
      } else {
        return EitherService.left(new RepositoryFailure(error.message));
      }
    }
  }

  async register(params) {
    try {
      const resp = await this.datasource.auth.register(params);
      return EitherService.right(new RegisterResponseEntities(resp?.data));
    } catch (error) {
      if (error instanceof ServerFailure) {
        return EitherService.left(error);
      } else {
        return EitherService.left(new RepositoryFailure(error.message));
      }
    }
  }
}
