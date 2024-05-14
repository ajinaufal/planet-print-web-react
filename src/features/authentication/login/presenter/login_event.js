import enumReducer from '../../../../core/utils/enums/enum_change_reducer';

export function loginEvent(data) {
  const handleChangeInputUsername = (username) => changeInputUsername({ username, ...data });
  const handleChangeInputPassword = (pass) => changeInputPassword({ pass, ...data });
  const hanldeChangeAdornmentPassword = () => changeAdornmentPassword({ ...data });
  const handleSubmitLogin = () => submitLogin({ ...data });

  return {
    handleChangeInputUsername,
    handleChangeInputPassword,
    hanldeChangeAdornmentPassword,
    handleSubmitLogin,
  };
}

function changeInputUsername({ username, setEmail }) {
  setEmail({ type: enumReducer.change.data, value: username });
  if ((username || '').length == 0) {
    setEmail({ type: enumReducer.change.error, error: 'Username / Email is required' });
  }
}

function changeInputPassword({ pass, setPassword }) {
  setPassword({ type: enumReducer.change.data, value: pass });
  if ((pass || '').length == 0) {
    setPassword({ type: enumReducer.change.error, error: 'Password is required' });
  }
}

function changeAdornmentPassword({ setAdornmentPassword }) {
  setAdornmentPassword({ type: enumReducer.change.data });
}

async function submitLogin({ usecase, email, password }) {
  const resp = await usecase?.auth?.login({ email: email?.data, password: password?.data });
  resp.fold(
    (error) => {},
    ({ token }) => {
      console.log('test token :', token);
    }
  );
}
