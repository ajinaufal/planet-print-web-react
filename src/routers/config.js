import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../page/layouts/layouts';
import { Dashboard } from '../page/dashboard';
import { login } from '../page/login';
import { register } from '../page/register';

export let routers = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: Dashboard },
            { path: 'login', Component: login },
            { path: 'register', Component: register },
        ],
    },
]);
