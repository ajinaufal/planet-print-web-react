import { createBrowserRouter } from 'react-router-dom';
import LoginView from '../../features/authentication/login/view/login_view';
import RegisterView from '../../features/authentication/register/view/register_view';
import DashboardView from '../../features/dashboard/view/dashboard_view';
import LayoutView from '../../features/dashboard/layouts/main/view/layout_view';

export function Router() {
    return createBrowserRouter([
        {
            path: '/',
            Component: LayoutView,
            children: [
                { index: true, Component: DashboardView },
                { path: 'login', Component: LoginView },
                { path: 'register', Component: RegisterView },
            ],
        },
    ]);
}
