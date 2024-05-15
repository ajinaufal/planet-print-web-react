import { useReducer } from 'react';
import {
  adornmentPasswordReducer,
  emailReducer,
  passwordReducer,
  submitLoginReducer,
} from './login_reducer';

export function LoginState({ usecase }) {
  const [email, setEmail] = useReducer(emailReducer, { data: undefined, error: '' });
  const [password, setPassword] = useReducer(passwordReducer, { data: undefined, error: '' });
  const [adornmentPassword, setAdornmentPassword] = useReducer(adornmentPasswordReducer, {
    data: false,
    type: 'text',
  });

  const [submitLogin, setSubmitLogin] = useReducer(submitLoginReducer, {
    error: '',
  });

  return {
    usecase,
    email,
    setEmail,
    password,
    setPassword,
    adornmentPassword,
    setAdornmentPassword,
    submitLogin,
    setSubmitLogin,
  };
}
