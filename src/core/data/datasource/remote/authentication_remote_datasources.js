import { ServerFailure } from '../../../services/exception_service';

export class AuthenticationRemoteDatasource {
  constructor({ service }) {
    this.api = service.api;
  }

  async login(params) {
    const resp = await this.api.post('/v1/auth/login', params);
    if (resp?.status == 200) return resp?.data;
    console.error(`Error remote source : ${resp?.data?.error_message}`);
    throw new ServerFailure(resp);
  }

  async register(params) {
    const resp = await this.api.post('/v1/auth/register', params);
    if (resp?.status == 200) return resp?.data;
    console.error(`Error remote source : ${resp?.data?.error_message}`);
    throw new ServerFailure(resp);
  }
}
