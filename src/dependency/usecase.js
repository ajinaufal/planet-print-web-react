import { AuthenticationUsecase } from '../domain/usecases/authentication_usecases';
import { CategoryUsecase } from '../domain/usecases/category_usecase';
import { ProductUsecase } from '../domain/usecases/product_usecase';
import { UserUsecase } from '../domain/usecases/user_usecase';

export function usecaseDependency(repository) {
    const authentication = new AuthenticationUsecase(repository);
    const user = new UserUsecase(repository);
    const product = new ProductUsecase(repository);
    const category = new CategoryUsecase(repository);

    return { authentication, user, product, category };
}
