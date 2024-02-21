import { useReducer } from 'react';
import { emailInputReducer, fetchSubmitReducer, passwordInputReducer } from './reducer';

export function PresenterLogin({ usecase }) {
    const data = useData({ usecase });
    const funct = useFunc({ ...data });

    return { ...data, ...funct };
}

function useData({ usecase }) {
    const [email, dispatchEmail] = useReducer(emailInputReducer, { value: '' });
    const [password, dispatchPassword] = useReducer(passwordInputReducer, { value: '' });
    const [fetchSubmit, dispatchFetchSubmit] = useReducer(fetchSubmitReducer, {
        loading: false,
        data: [],
        error: '',
    });

    return {
        usecase,
        email,
        dispatchEmail,
        password,
        dispatchPassword,
        fetchSubmit,
        dispatchFetchSubmit,
    };
}

function useFunc(data) {
    const submit = () => fetchSubmit({ ...data });
    return { submit };
}

async function fetchSubmit({
    usecase,
    email,
    password,
    dispatchEmail,
    dispatchPassword,
    dispatchFetchSubmit,
}) {
    dispatchEmail({ type: 'validation' });
    dispatchPassword({ type: 'validation' });
    dispatchFetchSubmit({ type: 'start' });
    if ((email?.error || '').length == 0 && (password?.error || '').length == 0) {
        const resp = await usecase?.authentication?.login({ email, password });
        if (resp?.status == 200) {
            dispatchFetchSubmit({ type: 'success', data: resp?.data?.data });
        } else {
            dispatchFetchSubmit({ type: 'failed', data: resp?.data?.message });
        }
    }
}
