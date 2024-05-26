import { RoleRemoteDatasources } from '../data/datasource/remote/role_remote_datasource';
import { AuthenticationRepository } from '../data/repository/authentication_repository';
import { RoleRepository } from '../data/repository/role_repository';
import { TokenRepository } from '../data/repository/token_repository';
import { UserRepository } from '../data/repository/user_repository';

export function RepositoryInjector(datasource) {
    const auth = new AuthenticationRepository(datasource);
    const token = new TokenRepository(datasource);
    const user = new UserRepository(datasource);
    const role = new RoleRepository(datasource);

    return { auth, token, user, role };
}
