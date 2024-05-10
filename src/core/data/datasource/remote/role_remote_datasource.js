export class RoleRemoteDatasources {
  constructor({ api }) {
    this.api = api;
  }

  async create(params) {
    const resp = await this.api.post('/role/create', params);
    return resp;
  }
}
