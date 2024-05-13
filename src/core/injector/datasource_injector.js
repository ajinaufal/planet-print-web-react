import { TokenLocalDatasource } from '../data/datasource/local/token_local_datasources';
import { AuthenticationRemoteDatasource } from '../data/datasource/remote/authentication_remote_datasources';

export function DatasourcesRemoteInjector(service) {
    const auth = new AuthenticationRemoteDatasource({ service });

    return { auth };
}

export function DatasourcesLocalInjector() {
    const token = new TokenLocalDatasource();

    return { token };
}
