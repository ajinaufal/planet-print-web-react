export class RoleRemoteDatasources {
  constructor({ service }) {
    this.api = service?.api;
  }

  async create(params) {
    const resp = await this.api.post('/role/create', params);
    return resp;
  }
}
