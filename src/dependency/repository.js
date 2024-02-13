import { AuthenticationRepository } from '../data/repositories/authentication_repositories';
import { UserRepository } from '../data/repositories/user_repositories';

export function repositoryDependency(datasource) {
    const authentication = new AuthenticationRepository(datasource);
    const user = new UserRepository(datasource);

    return { authentication, user };
}
