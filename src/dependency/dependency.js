import { datasourceDependency } from './datasource';
import { repositoryDependency } from './repository';
import { serviceDependency } from './service';
import { usecaseDependency } from './usecase';

export function InjectionDepedency() {
    const service = serviceDependency();
    const datasource = datasourceDependency(service);
    const repository = repositoryDependency(datasource);
    const usecase = usecaseDependency(repository);

    return { service, datasource, repository, usecase };
}
