import { useReducer } from 'react';
import { userDeleteReducer, userListReducer } from './list_user_reducer';
import { useNavigate } from 'react-router-dom';

export function ListUserState({ usecase }) {
    const navigate = useNavigate();

    const [getUserList, setGetUserList] = useReducer(userListReducer, {
        data: undefined,
        error: '',
        loading: true,
    });

    const [deleteUser, setDeleteUser] = useReducer(userDeleteReducer, {
        data: undefined,
        error: '',
        loading: false,
    });

    return { usecase, navigate, getUserList, setGetUserList, deleteUser, setDeleteUser };
}
