import { DatasourcesRemoteInjector, DatasourcesLocalInjector } from './datasource_injector';
import { RepositoryInjector } from './repository_injector';
import { ServiceInjector } from './service_injector';
import { UsecaseInjector } from './usecase_injector';

export function CommonInjector() {
  const datasourceLocal = DatasourcesLocalInjector();
  const service = ServiceInjector(datasourceLocal);
  const datasourceRemote = DatasourcesRemoteInjector(service);
  const repository = RepositoryInjector({ ...datasourceLocal, ...datasourceRemote });
  const usecase = UsecaseInjector({ repository });

  return { local: datasourceLocal, service, remote: datasourceRemote, repository, usecase };
}
