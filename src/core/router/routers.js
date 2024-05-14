import { createBrowserRouter } from 'react-router-dom';
// import RegisterView from '../../features/authentication/register/view/register_view';
// import DashboardView from '../../features/dashboard/dashboard/dashboard_view';
import LoginView from '../../features/authentication/login/view/login_view';
import LayoutView from '../../features/layouts/main/view/layout_view';

export function Router(data) {
  return createBrowserRouter([
    {
      path: '/',
      Component: LayoutView,
      children: [
        // { index: true, element: <DashboardView {...data} /> },
        { path: 'login', element: <LoginView {...data} /> },
        // { path: 'register', Component: <RegisterView {...data} /> },
      ],
    },
  ]);
}
