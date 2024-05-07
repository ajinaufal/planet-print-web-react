import { Button, TextField } from '@mui/material';
import React, { memo } from 'react';

function LoginView() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col basis-6/12 w-full">Login</div>
            <div className="flex basis-6/12 w-full h-screen items-center justify-center">
                <div className="flex flex-col gap-3 max-w-72 w-full">
                    <TextField label="Username / Email" size="small" fullWidth />
                    <TextField label="Password" size="small" fullWidth />
                    <Button variant="contained">Login</Button>
                    <p>Don't have an account yet? Sing Up</p>
                </div>
            </div>
        </div>
    );
}

export default memo(LoginView);
