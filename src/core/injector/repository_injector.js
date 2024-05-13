import { AuthenticationRepository } from '../data/repository/authentication_repository_datasources';

export function RepositoryInjector(datasource) {
    const auth = new AuthenticationRepository(datasource);

    return { auth };
}
