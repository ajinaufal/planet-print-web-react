import { loginEvent } from './login_event';
import { loginState } from './login_state';

export function loginPresenter({ usecase }) {
  const data = loginState({ usecase });
  const event = loginEvent(data);

  return { ...data, ...event };
}
