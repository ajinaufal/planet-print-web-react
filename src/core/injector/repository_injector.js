import { AuthenticationRepository } from '../data/repository/authentication_repository';
import { TokenRepository } from '../data/repository/token_repository';

export function RepositoryInjector(datasource) {
  const auth = new AuthenticationRepository(datasource);
  const token = new TokenRepository(datasource);

  return { auth, token };
}
