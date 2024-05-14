import { useReducer } from 'react';
import { adornmentPasswordReducer, emailReducer, passwordReducer } from './login_reducer';

export function LoginState({ usecase }) {
  const [email, setEmail] = useReducer(emailReducer, { data: undefined, error: '' });
  const [password, setPassword] = useReducer(passwordReducer, { data: undefined, error: '' });
  const [adornmentPassword, setAdornmentPassword] = useReducer(adornmentPasswordReducer, {
    data: false,
    type: 'text',
  });

  return {
    usecase,
    email,
    setEmail,
    password,
    setPassword,
    adornmentPassword,
    setAdornmentPassword,
  };
}
