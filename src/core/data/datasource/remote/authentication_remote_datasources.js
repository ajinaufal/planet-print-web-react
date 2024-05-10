export class AuthenticationRemoteDatasource {
  constructor({ api }) {
    this.api = api;
  }

  async login(params) {
    const resp = await this.api.post('/auth/login', params);
    return resp;
  }

  async register(params) {
    const resp = await this.api.post('/auth/register', params);
    return resp;
  }
}
