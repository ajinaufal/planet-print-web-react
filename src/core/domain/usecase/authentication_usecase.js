export class AuthenticationUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async login(params) {
    const resp = await this.repository.auth.login(params);
  }

  async register(params) {
    const resp = await this.repository.auth.register(params);
  }
}
