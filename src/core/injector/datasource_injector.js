import { TokenLocalDatasource } from '../data/datasource/local/token_local_datasources';
import { AuthenticationRemoteDatasource } from '../data/datasource/remote/authentication_remote_datasources';
import { RoleRemoteDatasources } from '../data/datasource/remote/role_remote_datasource';
import { UserRemoteDatasources } from '../data/datasource/remote/user_remote_datasources';

export function DatasourcesRemoteInjector(service) {
  const auth = new AuthenticationRemoteDatasource({ service });
  const role = new RoleRemoteDatasources({ service });
  const user = new UserRemoteDatasources({ service });

  return { auth, role };
}

export function DatasourcesLocalInjector() {
  const token = new TokenLocalDatasource();

  return { token };
}
