import ApiService from '../services/api_service';

export function Injector() {
  const domain = 'http://localhost:4000/';
  const api = new ApiService({ domain });

  return { api };
}
