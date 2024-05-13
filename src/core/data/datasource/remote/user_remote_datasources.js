export class UserRemoteDatasources {
  constructor({ service }) {
    this.api = service?.api;
  }

  async list(params) {
    const resp = await this.api.post('/user/list', params);
    return resp;
  }
}
