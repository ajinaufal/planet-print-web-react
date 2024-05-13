export class AuthenticationUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async login(params) {
    try {
      const resp = await this.repository.auth.login(params);
      return resp;
    } catch (error) {
      
    }
  }

  async register(params) {
    const resp = await this.repository.auth.register(params);
    return resp;
  }
}
