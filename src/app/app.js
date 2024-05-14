import { RouterProvider } from 'react-router-dom';
import './app.css';
import { Router } from '../core/router/routers';
import { CommonInjector } from '../core/injector/injector';

function App() {
  const injector = CommonInjector();

  // injector.local.token.update

  return <RouterProvider router={Router({ usecase: injector.usecase })} />;
}

export default App;
