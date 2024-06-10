import './app.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from '../core/router/routers';
import { CommonInjector } from '../core/injector/injector';

function App() {
    const injector = CommonInjector();
    const router = Router({ usecase: injector.usecase });

    return <RouterProvider router={router} />;
}

export default App;
