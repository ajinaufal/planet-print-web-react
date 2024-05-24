import { AuthenticationUsecase } from '../domain/usecase/authentication_usecase';
import { UserUsecase } from '../domain/usecase/user_usecase';

export function UsecaseInjector({ repository }) {
  const auth = new AuthenticationUsecase({ repository });
  const user = new UserUsecase({ repository });

  return { auth, user };
}
