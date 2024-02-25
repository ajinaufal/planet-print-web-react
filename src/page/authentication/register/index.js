import { Button, TextField } from '@mui/material';
import { PresenterRegister } from './presenter';

function Register({ usecase }) {
    const presenter = PresenterRegister({ usecase });
    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <div className="hidden sm:flex flex-col sm:basis-5/12 h-screen bg-target-secondary-default justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="w-56"></img>
                <p className="text-xl subpixel-antialiased font-semibold text-label-secondary-default">
                    Planet Print Shop
                </p>
            </div>
            <div className="flex sm:basis-7/12 h-auto justify-center items-center">
                <div className="flex flex-col gap-4 p-8 border rounded-md w-fit shadow">
                    <img
                        src={process.env.PUBLIC_URL + '/logo.png'}
                        alt="logo"
                        className="w-24 sm:hidden self-center"
                    ></img>
                    <p className="text-lg font-bold tracking-wide text-center">Register</p>
                    <TextField
                        error={(presenter?.email?.error || '').length > 0}
                        required
                        label="Email"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchEmail({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.email?.value}
                        helperText={presenter?.email?.error}
                    />
                    <TextField
                        error={(presenter?.name?.error || '').length > 0}
                        required
                        label="Name"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchName({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.name?.value}
                        helperText={presenter?.name?.error}
                    />
                    <TextField
                        error={(presenter?.phone?.error || '').length > 0}
                        label="Phone"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchPhone({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.phone?.value}
                        helperText={presenter?.phone?.error}
                    />
                    <TextField
                        error={(presenter?.password?.error || '').length > 0}
                        required
                        type="password"
                        label="Password"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchPassword({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.password?.value}
                        helperText={presenter?.password?.error}
                    />
                    <TextField required type="password" label="Confirm Password" className="w-80" />
                    <Button
                        onClick={presenter?.submit}
                        variant="contained"
                        className="w-80 bg-target-primary-default !important"
                    >
                        Register
                    </Button>
                    <div className="flex flex-row justify-between">
                        <p>Already have an account?</p>
                        <Button
                            onClick={() => {}}
                            variant="outlined"
                            className="border-target-destructive-disabled text-target-destructive-disabled"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
