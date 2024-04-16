import { Link } from 'react-router-dom';

export function Sidebar({ presenter }) {
    const Menus = [
        { label: 'Product', path: '/product' },
        { label: 'Category', path: '/category' },
        { label: 'Transaction', path: '/trasaction' },
        { label: 'Banner', path: '/banner' },
    ];
    if (presenter?.hasAccessories) return <div></div>;
    return (
        <aside className="absolute top-0 bottom-0 left-0 w-48 bg-white mt-16 pt-4 px-2 flex flex-col">
            {(Menus || []).map((menu, i) => (
                <Link
                    key={i}
                    className="px-2 py-3 hover:bg-target-secondary-hover rounded"
                    to={menu?.path}
                >
                    {menu?.label}
                </Link>
            ))}
        </aside>
    );
}
