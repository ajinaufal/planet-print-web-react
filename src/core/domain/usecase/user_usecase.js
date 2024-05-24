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
      console.log('test repo : ', this.repository);
      const resp = await this.repository?.user?.list(params);
      return resp;
    } catch (error) {
      console.log(error);
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
