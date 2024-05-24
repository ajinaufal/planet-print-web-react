import { useReducer } from 'react';
import { userListReducer } from './list_user_reducer';

export function ListUserState({ usecase }) {
  const [getUserList, setGetUserList] = useReducer(userListReducer, {
    data: undefined,
    error: '',
    loading: true,
  });

  return { usecase, getUserList, setGetUserList };
}
