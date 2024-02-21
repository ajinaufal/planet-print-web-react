import React from 'react';
import { Button, TextField } from '@mui/material';
import { PresenterLogin } from './presenter';
import { LoadingButton } from '@mui/lab';

const Login = ({ usecase }) => {
    const presenter = PresenterLogin({ usecase });
    return (
        <div className="flex flex-row items-center justify-center h-screen">
            <div className="hidden sm:flex flex-col sm:basis-5/12 h-screen bg-target-secondary-default justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="w-56"></img>
                <p className="text-xl subpixel-antialiased font-semibold text-label-secondary-default">
                    Planet Print Shop
                </p>
            </div>
            <div className="flex sm:basis-7/12 h-auto justify-center items-center">
                <div className="flex flex-col gap-4 p-8 border rounded-md w-fit bg-background-default">
                    <img
                        src={process.env.PUBLIC_URL + '/logo.png'}
                        alt="logo"
                        className="w-24 sm:hidden self-center"
                    ></img>
                    <p className="text-lg font-bold tracking-wide text-center hidden sm:block">
                        Login
                    </p>
                    <TextField
                        required
                        label="Email"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchEmail({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.email?.value}
                    />
                    <TextField
                        required
                        type="password"
                        label="Password"
                        className="w-80"
                        onChange={(e) =>
                            presenter?.dispatchPassword({ type: 'change', value: e.target.value })
                        }
                        value={presenter?.password?.value}
                    />
                    <LoadingButton
                        // loading
                        className="w-80 bg-target-primary-default !important"
                        loadingPosition="start"
                        variant="contained"
                    >
                        Log In
                    </LoadingButton>
                    <div className="flex flex-row justify-between">
                        <p>Don't have an account?</p>
                        <Button
                            onClick={() => {}}
                            variant="outlined"
                            className="border-target-destructive-disabled text-target-destructive-disabled"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
