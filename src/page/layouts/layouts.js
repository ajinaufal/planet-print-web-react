import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export function Layout() {
    // console.log(routers.state.location.pathname);
    return (
        <div>
            <Helmet>
                {/* Standard metadata tags */}
                <title>{document.title}</title>
                {/* <meta name="description" content={description} /> */}
                {/* End standard metadata tags */}
                {/* Facebook tags */}
                {/* <meta property="og:type" content={type} /> */}
                {/* <meta property="og:title" content={title} /> */}
                {/* <meta property="og:description" content={description} /> */}
                {/* End Facebook tags */}
                {/* Twitter tags */}
                {/* <meta name="twitter:creator" content={name} /> */}
                {/* <meta name="twitter:card" content={type} /> */}
                {/* <meta name="twitter:title" content={title} /> */}
                {/* <meta name="twitter:description" content={description} /> */}
                {/* End Twitter tags */}
            </Helmet>
            <Outlet />
        </div>
    );
}
