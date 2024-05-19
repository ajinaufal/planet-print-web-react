import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from '../../header/header_layout_view';
import { SidebarLayout } from '../../sidebare/sidebar_layout_view';
import { LayoutsPresenter } from '../../presenter/layouts_presenter';

function LayoutView({ usecase }) {
    const presenter = LayoutsPresenter({ usecase });
    return (
        <Fragment>
            <div className="flex flex-row bg-background-secondary">
                <SidebarLayout />
                <div className="w-full">
                    <HeaderLayout />
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default memo(LayoutView);
