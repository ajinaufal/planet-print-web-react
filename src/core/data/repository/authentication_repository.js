export class AuthenticationRepository {
  constructor({ datasource }) {
    this.datasource = datasource;
  }

  async login(params) {
    const repo = await this.datasource.login(params);
    return repo;
  }

  async register(params) {
    const repo = await this.datasource.register(params);
    return repo;
  }
}
