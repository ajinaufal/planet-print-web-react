import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Helmet } from 'react-helmet-async';
import { PresenterLayout } from './presenter';
import { Sidebar } from './sidebar';

function Layout({ usecase }) {
    const presenter = PresenterLayout({ usecase });

    return (
        <div className="realtive">
            <Helmet>
                {/* Standard metadata tags */}
                {/* <title>{document.title}</title> */}
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
            <Header presenter={presenter} />
            <Sidebar presenter={presenter} />
            <div className="mt-20 ml-52 mr-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
