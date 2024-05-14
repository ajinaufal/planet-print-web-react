import { AuthenticationUsecase } from '../domain/usecase/authentication_usecase';

export function UsecaseInjector({ repository }) {
  const auth = new AuthenticationUsecase({ repository });

  return { auth };
}
