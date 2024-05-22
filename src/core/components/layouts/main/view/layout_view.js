import { Fragment, memo } from 'react';
import { HeaderLayout } from '../../header/header_layout_view';
import { SidebarLayout } from '../../sidebare/sidebar_layout_view';
import { LayoutsPresenter } from '../../presenter/layouts_presenter';
import { Outlet } from 'react-router-dom';

function LayoutView({ usecase }) {
  const presenter = LayoutsPresenter({ usecase });
  return (
    <Fragment>
      <SidebarLayout />
      <div className="ml-44">
        <HeaderLayout />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default memo(LayoutView);
