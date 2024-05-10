import { AuthenticationRemoteDatasource } from '../core/data/datasource/remote/authentication_remote_datasources';

export function Injector() {
  const auth = new AuthenticationRemoteDatasource();

  return { auth };
}
