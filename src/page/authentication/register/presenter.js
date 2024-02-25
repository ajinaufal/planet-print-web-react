import { useReducer } from 'react';
import {
    emailInputReducer,
    fetchRegisterReducer,
    nameInputReducer,
    passwordInputReducer,
} from './reducer';
import { useNavigate } from 'react-router-dom';

export function PresenterRegister({ usecase }) {
    const data = useData({ usecase });
    const funct = useFunc({ ...data });

    return { ...data, ...funct };
}

function useData({ usecase }) {
    const navigation = useNavigate();
    const [email, dispatchEmail] = useReducer(emailInputReducer, { value: '' });
    const [name, dispatchName] = useReducer(nameInputReducer, { value: '' });
    const [phone, dispatchPhone] = useReducer(nameInputReducer, { value: '' });
    const [password, dispatchPassword] = useReducer(passwordInputReducer, { value: '' });
    // const [confirmPassword, dispatchConfirmPassword] = us
    const [fetchRegister, dispatchFetchRegister] = useReducer(fetchRegisterReducer, {
        loading: false,
        data: [],
        error: '',
    });

    return {
        navigation,
        usecase,
        email,
        dispatchEmail,
        name,
        dispatchName,
        phone,
        dispatchPhone,
        password,
        dispatchPassword,
        fetchRegister,
        dispatchFetchRegister,
        // fetchSubmit,
        // dispatchFetchSubmit,
    };
}

function useFunc(data) {
    const submit = () => fetchRegister({ ...data });
    return { submit };
}

async function fetchRegister({
    usecase,
    email,
    name,
    phone,
    password,
    navigation,
    dispatchEmail,
    dispatchPassword,
    dispatchFetchRegister,
}) {
    dispatchEmail('validation');
    dispatchPassword('validation');
    dispatchFetchRegister({ type: 'start' });
    if ((email?.error || '').length === 0 && (password?.error || '').length === 0) {
        const resp = usecase.authentication.register({
            email: email?.value,
            name: name?.value,
            phone: phone?.value,
            password: password?.value,
        });

        if (resp?.status === 200) {
            dispatchFetchRegister({ type: 'success', data: [] });
            navigation('/login');
        } else {
            dispatchFetchRegister({ type: 'failed', error: resp?.data?.message });
        }
    }
}
