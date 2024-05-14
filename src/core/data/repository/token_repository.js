import { EitherService } from '../../services/either_service';
import { LocalFailure, RepositoryFailure } from '../../services/exception_service';

export class TokenRepository {
  constructor(datasource) {
    this.datasource = datasource;
  }

  insert(token) {
    try {
      const resp = this.datasource?.token?.update(token);
      return EitherService.right({ token: resp });
    } catch (error) {
      if (error instanceof LocalFailure) {
        return EitherService.left(error);
      } else {
        return EitherService.left(new RepositoryFailure(error.message));
      }
    }
  }
}
