import { AuthenticationUsecase } from '../domain/usecases/authentication_usecases';

export function usecaseDependency(repository) {
    const authentication = new AuthenticationUsecase(repository);

    return { authentication };
}
