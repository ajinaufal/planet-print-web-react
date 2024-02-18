import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../page/layouts/layouts';
import { Dashboard } from '../page/dashboard';
import { login as Login } from '../page/authentication/login';
import { register as Register } from '../page/authentication/register';
import { Product } from '../page/product/list';
import { Category } from '../page/category/list';
import { Order } from '../page/order/list';
import { ProductCreate } from '../page/product/create';
import { ProductUpdate } from '../page/product/update';

export let routers = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: Dashboard },
            { path: 'login', Component: Login },
            { path: 'register', Component: Register },
            { path: 'product', Component: Product },
            { path: 'product/create', Component: ProductCreate },
            { path: 'product/update/:id', Component: ProductUpdate },
            { path: 'category', Component: Category },
            { path: 'order', Component: Order },
            // { path: 'product/create', Component: register },
            // { path: 'product/update', Component: register },
            // { path: 'category', Component: register },
            // { path: 'category/create', Component: register },
            // { path: 'category/update', Component: register },
            // { path: 'user/create', Component: register },
            // { path: 'user/update', Component: register },
            // { path: 'transaction', Component: register },
            // { path: 'transaction/update', Component: register },
        ],
    },
]);
