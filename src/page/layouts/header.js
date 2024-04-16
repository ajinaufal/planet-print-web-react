import React from 'react';
import { AvatarHeaderComponent } from './components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function Header({ presenter }) {
    if (presenter?.hasAccessories) return <React.Fragment />;
    return (
        <nav className="absolute top-0 w-full flex flex-row bg-white p-3 justify-between">
            <div>
                <LazyLoadImage
                    className="ml-12"
                    alt="logo"
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    width={85}
                />
            </div>
            <div className="flex flex-row gap-3 items-center">
                <AvatarHeaderComponent />
            </div>
        </nav>
    );
}
