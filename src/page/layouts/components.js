import { Avatar } from '@mui/material';
import React, { Fragment } from 'react';

export function AvatarHeaderComponent() {
    return (
        <Fragment>
            <p>Name</p>
            <Avatar
                alt="Avatar Profile"
                src="https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg"
            />
        </Fragment>
    );
}
