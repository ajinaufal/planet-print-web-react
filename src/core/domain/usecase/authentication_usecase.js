import {
  LocalFailure,
  RepositoryFailure,
  ServerFailure,
  UsecaseFailure,
} from '../../services/exception_service';

export class AuthenticationUsecase {
  constructor({ repository }) {
    this.repository = repository;
  }

  async login(params) {
    try {
      const resp = await this.repository?.auth?.login(params);

      if (resp.isLeft()) return resp;

      resp.fold(
        (error) => {
          console.log(error.message);
        },
        (data) => {
          console.log(data.token);
        }
      );

      const { token } = resp.getRight();
      this.repository?.token?.insert(token);

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

  async register(params) {
    const resp = await this.repository.auth.register(params);
    return resp;
  }
}
