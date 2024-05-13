import { EitherService } from '../../services/either_service';
import { RepositoryFailure, ServerFailure } from '../../services/exception_service';

export class AuthenticationRepository {
  constructor(datasource) {
    this.datasource = datasource;
  }

  async login(params) {
    try {
      const repo = await this.datasource.auth.login(params);
      return EitherService.right(repo);
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
      const repo = await this.datasource.auth.register(params);
      return EitherService.right(repo);
    } catch (error) {
      if (error instanceof ServerFailure) {
        return EitherService.left(error);
      } else {
        return EitherService.left(new RepositoryFailure(error.message));
      }
    }
  }
}
