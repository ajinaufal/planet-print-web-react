import { UserLocalDatasources } from '../data/datasources/local/user_local_datasources';
import { AuthenticationRemoteDatasources } from '../data/datasources/remote/authentication_remote_datasources';
import { ProductRemoteDatasources } from '../data/datasources/remote/product_remote_datasources';

export function datasourceDependency(service) {
    const authentication = new AuthenticationRemoteDatasources(service);
    const product = new ProductRemoteDatasources(service);

    return { authentication, product };
}

export function datasouserLocalDepedency() {
    const userLocal = new UserLocalDatasources();
    return { userLocal };
}
