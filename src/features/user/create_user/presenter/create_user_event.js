import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function CreateUserEvent(data) {
    const handleFetchRoles = () => fetchRoles(data);
    return { handleFetchRoles };
}

async function fetchRoles({ usecase, setRoleList }) {
    setRoleList({ type: enumReducer.network.start });
    const resp = await usecase.role.list();
    resp.fold(
        (error) => setRoleList({ type: enumReducer.network.failure, error: error?.message }),
        (data) => setRoleList({ type: enumReducer.network.success, data: data?.roles })
    );
}

async function fetchCreateUser({ usecase, setCreateUser }) {
    setCreateUser({ type: enumReducer.network.start });
    const resp = await usecase.user.create({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        role: '',
        status: '',
    });
    await resp.fold(
        (error) => setCreateUser({ type: enumReducer.network.failure, error: error.message }),
        (data) => setCreateUser({ type: enumReducer.network.success, data: data.user })
    );
}
