import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from '../../header/view/header_layout_view';

function LayoutView() {
  return (
    <Fragment>
      <HeaderLayout />
      <Outlet />
    </Fragment>
  );
}

export default memo(LayoutView);
