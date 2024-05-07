import { RouterProvider } from 'react-router-dom';
import './app.css';
import { Router } from '../core/router/routers';

function App() {
    return <RouterProvider router={Router()} />;
}

export default App;
