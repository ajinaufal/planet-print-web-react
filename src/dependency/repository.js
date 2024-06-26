import { AuthenticationRepository } from '../data/repositories/authentication_repositories';
import { CategoryRepository } from '../data/repositories/category_repositories';
import { ProductRepository } from '../data/repositories/product_repositories';
import { UserRepository } from '../data/repositories/user_repositories';

export function repositoryDependency(datasource) {
    const authentication = new AuthenticationRepository(datasource);
    const user = new UserRepository(datasource);
    const product = new ProductRepository(datasource);
    const category = new CategoryRepository(datasource);

    return { authentication, user, product, category };
}
