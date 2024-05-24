export function listUserEvent(data) {
  const handleFetchListUser = () => fetchListUser(data);
  return { handleFetchListUser };
}

async function fetchListUser({ usecase }) {
  const resp = await usecase.user.listUser();
  console.log(resp);
}
