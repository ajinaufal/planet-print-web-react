import { AppBar, Box, Toolbar } from '@mui/material';
import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from '../../header/view/header_layout_view';

function LayoutView() {
    return (
        <Fragment>
            <HeaderLayout />
            {/* <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar></Toolbar>
                </AppBar>
            </Box> */}
            <Outlet />
        </Fragment>
    );
}

export default memo(LayoutView);
