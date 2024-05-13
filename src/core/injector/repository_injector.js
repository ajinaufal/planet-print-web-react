import { AuthenticationRepository } from '../data/repository/authentication_repository';

export function RepositoryInjector(datasource) {
  const auth = new AuthenticationRepository(datasource);

  return { auth };
}
