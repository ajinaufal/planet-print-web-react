import { AuthenticationUsecase } from '../domain/usecase/authentication_usecase';
import { RoleUsecase } from '../domain/usecase/role_usecase';
import { UserUsecase } from '../domain/usecase/user_usecase';

export function UsecaseInjector({ repository }) {
    const auth = new AuthenticationUsecase({ repository });
    const user = new UserUsecase({ repository });
    const role = new RoleUsecase({ repository });

    return { auth, user, role };
}
