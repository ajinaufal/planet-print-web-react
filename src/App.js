import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './core/routers/config';
import { HelmetProvider } from 'react-helmet-async';

export function App() {
    return (
        <HelmetProvider>
            <RouterProvider router={routers} />
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
