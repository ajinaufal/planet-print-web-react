import { Outlet } from 'react-router-dom';

export function Layout() {
    // console.log(routers.state.location.pathname);
    return (
        <div>
            <h1>Layout</h1>
            <Outlet />
        </div>
    );
}
