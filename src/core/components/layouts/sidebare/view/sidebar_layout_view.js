import { Link } from 'react-router-dom';
import { SidebarMenus } from '../../../../utils/constants/menu_sidebar_constants';
import { ImageConstants } from '../../../../utils/constants/image_constant';

export function SidebarLayout() {
  return (
    <aside className="flex flex-col gap-3 bg-target-primary-hover h-screen w-fit min-w-52 pt-8">
      <img src={ImageConstants.beautyProfile} className="w-36 px-4 mx-auto" />
      {(SidebarMenus || []).map((menu, index) => (
        <Link
          id={index}
          className="text-white hover:bg-white hover:text-black rounded-l-lg px-4 py-2"
          // style={{
          //   WebkitMaskImage:
          //     'radial-gradient(circle 10px at 0 0, transparent 0, transparent 20px, black 21px)',
          //   maskImage:
          //     'radial-gradient(circle 10px at 0 0, transparent 0, transparent 20px, black 21px)',
          // }}
        >
          {menu.name}
        </Link>
      ))}
    </aside>
  );
}
