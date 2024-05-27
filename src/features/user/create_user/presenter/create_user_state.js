import { useReducer } from 'react';
import { createUserReducer, roleListReducer } from './create_user_reducer';

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

    return { usecase, roleList, setRoleList, createUser, setCreateUser };
}
