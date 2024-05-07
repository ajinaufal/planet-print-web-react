import { Button, TextField } from '@mui/material';
import React, { memo } from 'react';

function RegisterView() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col basis-6/12 w-full">Register</div>
            <div className="flex basis-6/12 w-full h-screen items-center justify-center">
                <div className="flex flex-col gap-3 max-w-72 w-full">
                    <TextField label="Email" size="small" fullWidth />
                    <TextField label="No Telephone" size="small" fullWidth />
                    <TextField label="Password" size="small" fullWidth />
                    <TextField label="Confirmation Password" size="small" fullWidth />
                    <Button variant="contained">Register</Button>
                    <p>Do you have an account? Sign in</p>
                </div>
            </div>
        </div>
    );
}

export default memo(RegisterView);
