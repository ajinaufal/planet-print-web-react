import { Link } from 'react-router-dom';
import { SidebarMenus } from '../../../utils/constants/menu_sidebar_constants';
import { ImageConstants } from '../../../utils/constants/image_constant';
export function SidebarLayout() {
  return (
    <aside className="fixed top-0 bottom-0 bg-target-primary-hover h-screen w-fit min-w-44 pt-8">
      <div className="flex flex-col gap-3">
        <img src={ImageConstants.beautyProfile} className="w-36 px-4 mx-auto" />
        {(SidebarMenus || []).map((menu, i) => (
          <Link
            id={i}
            to={menu?.link}
            className="text-white hover:bg-background-secondary hover:text-black rounded-l-lg ml-4 pl-4 pr-6 py-2"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
