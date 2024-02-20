import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/config';
import { HelmetProvider } from 'react-helmet-async';
import { InjectionDepedency } from './dependency/dependency';

export function App() {
    const depedency = InjectionDepedency();

    return (
        <HelmetProvider>
            <RouterProvider router={routers({ usecase: depedency.usecase })} />
        </HelmetProvider>
    );
}

export default App;

// function NoMatch() {
//     return (
//         <div>
//             <h2>Nothing to see here!</h2>
//             <p>
//                 <Link to="/">Go to the home page</Link>
//             </p>
//         </div>
//     );
// }
