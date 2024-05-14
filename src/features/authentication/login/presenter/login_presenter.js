import { loginEvent } from './login_event';
import { LoginState } from './login_state';

export function loginPresenter({ usecase }) {
  const data = LoginState({ usecase });
  const event = loginEvent({ ...data });

  return { ...data, ...event };
}
