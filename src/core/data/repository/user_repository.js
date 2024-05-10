export class UserRepository {
  constructor({ datasource }) {
    this.datasource = datasource;
  }

  async list(params) {
    const repo = await this.datasource.list(params);
    return repo;
  }
}
