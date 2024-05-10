export class RoleRepository {
  constructor({ datasource }) {
    this.datasource = datasource;
  }

  async create(params) {
    const repo = await this.datasource.create(params);
    return repo;
  }
}
