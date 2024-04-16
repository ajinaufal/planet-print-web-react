import { createBrowserRouter } from 'react-router-dom';
import Layout from '../page/layouts/layouts';

import Login from '../page/authentication/login/index';
import Register from '../page/authentication/register/index';
import Dashboard from '../page/dashboard';
import Product from '../page/product/list';
import Category from '../page/category/list';
import ProductCreate from '../page/product/create';

export function routers({ usecase }) {
    return createBrowserRouter([
        {
            path: '/',
            element: <Layout usecase={usecase} />,
            children: [
                { index: true, element: <Dashboard usecase={usecase} /> },
                { path: 'login', element: <Login usecase={usecase} /> },
                { path: 'register', element: <Register usecase={usecase} /> },
                { path: 'product', element: <Product usecase={usecase} /> },
                { path: 'category', element: <Category usecase={usecase} /> },
                { path: 'product/create', element: <ProductCreate usecase={usecase} /> },
                // { path: 'product/create', loader: usecase, Component: ProductCreate },
                // { path: 'product/update/:id', loader: usecase, Component: ProductUpdate },
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
