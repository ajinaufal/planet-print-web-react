import { useReducer } from 'react';
import {
    confirmPasswordReducer,
    createUserReducer,
    emailReducer,
    firstNameReducer,
    lastNameReducer,
    passwordReducer,
    phoneNumberReducer,
    roleListReducer,
    roleReducer,
    statusReducer,
    submitReducer,
    usernameReducer,
} from './create_user_reducer';

export function CreateUserState({ usecase }) {
    const [roleList, setRoleList] = useReducer(roleListReducer, {
        data: undefined,
        error: '',
        loading: true,
    });

    const [createUser, setCreateUser] = useReducer(createUserReducer, {
        data: undefined,
        error: '',
        loading: true,
    });

    const [firstName, setFirstName] = useReducer(firstNameReducer, { data: undefined });

    const [lastName, setLastName] = useReducer(lastNameReducer, { data: undefined });

    const [username, setUsername] = useReducer(usernameReducer, { data: undefined });

    const [password, setPassword] = useReducer(passwordReducer, { data: undefined, error: '' });

    const [confirmPassword, setConfirmPassword] = useReducer(confirmPasswordReducer, { data: '' });

    const [email, setEmail] = useReducer(emailReducer, { data: undefined, error: '' });

    const [role, setRole] = useReducer(roleReducer, { data: undefined });

    const [status, setStatus] = useReducer(statusReducer, { data: false });

    const [phoneNumber, setPhoneNumber] = useReducer(phoneNumberReducer, {
        data: undefined,
        error: '',
    });

    return {
        usecase,
        roleList,
        setRoleList,
        createUser,
        setCreateUser,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        email,
        setEmail,
        role,
        setRole,
        status,
        setStatus,
        phoneNumber,
        setPhoneNumber,
    };
}
