import { createBrowserRouter } from 'react-router-dom';
// import RegisterView from '../../features/authentication/register/view/register_view';
// import DashboardView from '../../features/dashboard/dashboard/dashboard_view';
import LoginView from '../../features/authentication/login/view/login_view';
import RegisterView from '../../features/authentication/register/view/register_view';
import LayoutView from '../../core/components/layouts/main/view/layout_view';
import ListProductView from '../../features/product/list_product/view/list_product_view';
import CreateProductView from '../../features/product/create_product/view/create_product_view';
import ListCategoryView from '../../features/category/list_category/view/list_category_view';
import ListUserView from '../../features/user/list_user/view/list_user_view';

export function Router(data) {
    return createBrowserRouter([
        {
            path: '/',
            element: <LayoutView {...data} />,
            children: [...routersNonAuth(data), ...routersAuth(data)],
        },
    ]);
}

export function routersNonAuth(data) {
    return [
        { path: 'login', element: <LoginView {...data} /> },
        { path: 'register', element: <RegisterView {...data} /> },
    ];
}

export function routersAuth(data) {
    return [
        // { index: true, element: <DashboardView {...data} /> },
        { path: 'product', element: <ListProductView {...data} /> },
        { path: 'product/create', element: <CreateProductView {...data} /> },
        { path: 'category', element: <ListCategoryView {...data} /> },
        { path: 'user', element: <ListUserView {...data} /> },
    ];
}
