import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function listUserEvent(data) {
    const handleFetchListUser = () => fetchListUser(data);
    const handleDeleteUser = (token) => deleteUser({ ...data, token });
    return { handleFetchListUser, handleDeleteUser };
}

async function fetchListUser({ usecase, setGetUserList }) {
    setGetUserList({ type: enumReducer.network.start });
    const resp = await usecase.user.listUser({});
    resp?.fold(
        (error) => setGetUserList({ type: enumReducer.network.failure, error: error.message }),
        (data) => {
            if (data.users) setGetUserList({ type: enumReducer.network.success, data: data.users });
        }
    );
}

async function deleteUser({ usecase, token, setDeleteUser, setGetUserList, getUserList }) {
    setDeleteUser({ type: enumReducer.network.start });
    const resp = await usecase.user.deleteUser({ token });
    await resp?.fold(
        (error) => setDeleteUser({ type: enumReducer.network.failure, error: error.message }),
        (data) => {
            if (data?.token) {
                const newData = (getUserList?.data || []).filter(
                    (user) => user?.token != data?.token
                );
                setGetUserList({ type: enumReducer.change.data, data: newData });
                setDeleteUser({ type: enumReducer.network.success, data: undefined });
            }
        }
    );
}
