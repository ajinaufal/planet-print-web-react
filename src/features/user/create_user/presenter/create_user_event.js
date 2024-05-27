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
    (data) => setCreateUser({ type: enumReducer.network.success, data: data.user || [] })
  );
}
