import { useReducer } from 'react';
import { emailInputReducer, passwordInputReducer } from './reducer';

export function PresenterLogin({ usecase }) {
    const data = useData({ usecase });

    return { ...data };
}

function useData({ usecase }) {
    const [email, dispatchEmail] = useReducer(emailInputReducer, { value: '' });
    const [password, dispatchPassword] = useReducer(passwordInputReducer, { value: '' });

    return { email, dispatchEmail, password, dispatchPassword };
}
