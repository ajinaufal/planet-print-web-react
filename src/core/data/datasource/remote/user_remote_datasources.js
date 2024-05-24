import { ServerFailure } from '../../../services/exception_service';

export class UserRemoteDatasources {
  constructor({ service }) {
    this.api = service?.api;
  }

  async list(params) {
    const resp = await this.api.post('/v1/user/list', params);
    if (resp?.status == 200) return resp?.data;
    console.error(`Error remote source : ${resp?.data?.error_message}`);
    throw new ServerFailure(resp);
  }
}
