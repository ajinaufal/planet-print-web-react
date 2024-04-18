import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar({ presenter }) {
    const Menus = [
        { label: 'Dashboard', path: '/' },
        { label: 'Product', path: '/product' },
        { label: 'Category', path: '/category' },
        { label: 'Transaction', path: '/trasaction' },
        { label: 'Banner', path: '/banner' },
    ];

    const location = useLocation();
    if (presenter?.hasAccessories) return <Fragment />;

    return (
        <aside className="absolute top-0 bottom-0 left-0 w-48 bg-white mt-16 pt-4 px-2 flex flex-col gap-3">
            {(Menus || []).map((menu, i) => (
                <Link
                    key={i}
                    className={`px-1.5 py-1.5 hover:bg-target-secondary-default rounded ${
                        location?.pathname === menu?.path ? 'bg-target-secondary-hover' : ''
                    }`}
                    to={menu?.path}
                >
                    {menu?.label}
                </Link>
            ))}
        </aside>
    );
}
