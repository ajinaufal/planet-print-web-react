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

    const [firstName, setFirstName] = useReducer(firstNameReducer, { data: '' });

    const [lastName, setLastName] = useReducer(lastNameReducer, { data: '' });

    const [username, setUsername] = useReducer(usernameReducer, { data: '' });

    const [password, setPassword] = useReducer(passwordReducer, { data: '', error: '' });

    const [confirmPassword, setConfirmPassword] = useReducer(confirmPasswordReducer, { data: '' });

    const [email, setEmail] = useReducer(emailReducer, { data: '', error: '' });

    const [role, setRole] = useReducer(roleReducer, { data: '' });

    const [status, setStatus] = useReducer(statusReducer, { data: false });

    const [phoneNumber, setPhoneNumber] = useReducer(phoneNumberReducer, { data: '', error: '' });

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
