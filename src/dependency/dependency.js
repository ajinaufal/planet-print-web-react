import { datasourceDependency, datasouserLocalDepedency } from './datasource';
import { repositoryDependency } from './repository';
import { serviceDependency } from './service';
import { usecaseDependency } from './usecase';

export function InjectionDepedency() {
    const datasourceLocal = datasouserLocalDepedency();
    const service = serviceDependency(datasourceLocal);
    const datasource = datasourceDependency(service);
    const repository = repositoryDependency({ ...datasource, ...datasourceLocal });
    const usecase = usecaseDependency(repository);

    return { service, datasource: { ...datasource, ...datasourceLocal }, repository, usecase };
}
