import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function CreateUserEvent(data) {
    const handleFetchRoles = () => fetchRoles(data);
    const handleFetchCreateUser = () => fetchCreateUser(data);
    return { handleFetchRoles, handleFetchCreateUser };
}

async function fetchRoles({ usecase, setRoleList, setRole }) {
    setRoleList({ type: enumReducer.network.start });
    const resp = await usecase.role.list();
    resp.fold(
        (error) => setRoleList({ type: enumReducer.network.failure, error: error?.message }),
        (data) => {
            const roles = data?.roles || [];
            setRoleList({ type: enumReducer.network.success, data: data?.roles });
            if (roles.length > 0) setRole({ type: enumReducer.change.data, data: roles[0].token });
        }
    );
}

async function fetchCreateUser({
    usecase,
    setCreateUser,
    firstName,
    lastName,
    email,
    username,
    phoneNumber,
    password,
    role,
    status,
}) {
    setCreateUser({ type: enumReducer.network.start });
    const resp = await usecase.user.createUser({
        first_name: firstName?.data,
        last_name: lastName?.data,
        email: email?.data,
        username: username?.data,
        phone_number: phoneNumber?.data,
        password: password?.data,
        role: role?.data,
        status: status?.data,
    });
    await resp.fold(
        (error) => setCreateUser({ type: enumReducer.network.failure, error: error.message }),
        (data) => setCreateUser({ type: enumReducer.network.success, data: data.user || [] })
    );
}
