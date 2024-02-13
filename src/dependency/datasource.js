import { UserLocalDatasources } from '../data/datasources/local/user_local_datasources';
import { AuthenticationRemoteDatasources } from '../data/datasources/remote/authentication_remote_datasources';

export function datasourceDependency(service) {
    const userLocal = new UserLocalDatasources();
    const authentication = new AuthenticationRemoteDatasources(service);

    return { authentication, userLocal };
}
