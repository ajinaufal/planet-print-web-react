import { Link } from 'react-router-dom';
import { SidebarMenus } from '../../../utils/constants/menu_sidebar_constants';
import { ImageConstants } from '../../../utils/constants/image_constant';
import { v4 as uuidv4 } from 'uuid';

export function SidebarLayout() {
    return (
        <aside className="flex flex-col gap-3 bg-target-primary-hover h-screen w-fit min-w-44 pt-8">
            <img src={ImageConstants.beautyProfile} className="w-36 px-4 mx-auto" />
            {(SidebarMenus || []).map((menu) => (
                <Link
                    className="text-white hover:bg-background-secondary hover:text-black rounded-l-lg ml-4 pl-4 pr-6 py-2"
                    key={uuidv4()}
                >
                    {menu.name}
                </Link>
            ))}
        </aside>
    );
}
