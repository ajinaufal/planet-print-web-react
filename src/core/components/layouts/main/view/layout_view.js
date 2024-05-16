import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from '../../header/view/header_layout_view';
import { SidebarLayout } from '../../sidebare/view/sidebar_layout_view';

function LayoutView() {
  return (
    <Fragment>
      <div className="flex flex-row bg-">
        <SidebarLayout />
        <div className="w-full">
          <HeaderLayout />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default memo(LayoutView);
