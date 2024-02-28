import { createBrowserRouter } from 'react-router-dom';
import Layout from '../page/layouts/layouts';

import Login from '../page/authentication/login/index';
import Register from '../page/authentication/register/index';
import Dashboard from '../page/dashboard';
import Product from '../page/product/list';
import Category from '../page/category/list';

export function routers({ usecase }) {
    return createBrowserRouter([
        {
            path: '/',
            element: <Layout usecase={usecase} />,
            children: [
                { path: 'login', element: <Login usecase={usecase} /> },
                { path: 'register', element: <Register usecase={usecase} /> },
                { index: true, element: <Dashboard usecase={usecase} /> },
                { path: 'product', element: <Product usecase={usecase} /> },
                // { path: 'product/create', loader: usecase, Component: ProductCreate },
                // { path: 'product/update/:id', loader: usecase, Component: ProductUpdate },
                { path: 'category', element: <Category usecase={usecase} /> },
                { path: 'category/create',},
                // { path: 'category/update/:id', loader: usecase, Component: CategoryUpdate },
                // { path: 'order', loader: usecase, Component: Order },
                // { path: 'user/create', Component: register },
                // { path: 'user/update', Component: register },
                // { path: 'transaction', Component: register },
                // { path: 'transaction/update', Component: register },
            ],
        },
    ]);
}

export const PublicPath = ['/login', '/register'];
