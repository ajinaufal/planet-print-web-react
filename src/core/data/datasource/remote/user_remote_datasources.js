export class UserRemoteDatasources {
  constructor({ api }) {
    this.api = api;
  }

  async list(params) {
    const resp = await this.api.post('/user/list', params);
    return resp;
  }
}
