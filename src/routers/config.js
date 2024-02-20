import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../page/layouts/layouts';

import { register as Register } from '../page/authentication/register';
import { Product } from '../page/product/list';
import { Category } from '../page/category/list';
import { Order } from '../page/order/list';
import { ProductCreate } from '../page/product/create';
import { ProductUpdate } from '../page/product/update';
import { CategoryCreate } from '../page/category/create';
import { CategoryUpdate } from '../page/category/update';
import Login from '../page/authentication/login/index';

export function routers({ usecase }) {
    return createBrowserRouter([
        {
            path: '/',
            Component: Layout,
            children: [
                // { index: true, loader: usecase, Component: Dashboard },
                { path: 'login', element: <Login usecase={usecase} /> },
                // { path: 'register', loader: usecase, Component: Register },
                // { path: 'product', loader: usecase, Component: Product },
                // { path: 'product/create', loader: usecase, Component: ProductCreate },
                // { path: 'product/update/:id', loader: usecase, Component: ProductUpdate },
                // { path: 'category', loader: usecase, Component: Category },
                // { path: 'category/create', loader: usecase, Component: CategoryCreate },
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
