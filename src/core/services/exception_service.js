export class NetworkFailure extends Error {
  constructor(message = 'Network failure') {
    super(message);
    this.name = 'NetworkFailure';
  }
}

export class ServerFailure extends Error {
  constructor(resp) {
    super(resp?.data?.error_message ? resp?.data?.error_message : 'Server failure');
    this.page = window.location.pathname;
    this.url = `${resp?.config?.baseURL}${resp?.config?.url}`;
    this.request = resp?.config?.data ? JSON.stringify(resp?.config?.data) : '';
    this.response = resp?.data ? JSON.stringify(resp?.data) : '';
    this.name = 'ServerFailure';
  }
}

export class LocalFailure extends Error {
  constructor(message = 'Local failure') {
    super(message);
  }
}

export class RepositoryFailure extends Error {
  constructor(message = 'Repository failure') {
    super(message);
    this.name = 'RepositoryFailure';
  }
}

export class UsecaseFailure extends Error {
  constructor(message = 'Usecase failure') {
    super(message);
    this.name = 'RepositoryFailure';
  }
}

// throw new ServerFailure(error.message);
