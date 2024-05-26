import { useReducer } from 'react';
import { roleListReducer } from './create_user_reducer';

export function CreateUserState({ usecase }) {
    const [roleList, setRoleList] = useReducer(roleListReducer, {
        data: undefined,
        error: '',
        loading: true,
    });
    return { usecase, roleList, setRoleList };
}
