export function loginEvent(data) {
  const handleInputUsername = (username) => ({ username, ...data });

  return { handleInputUsername };
}

function handleInputUsername({ username }) {}
