import { LayoutEvent } from './layouts_event';
import { LayoutState } from './layouts_state';

export function LayoutsPresenter({ usecase }) {
    const data = LayoutState({ usecase });
    const funct = LayoutEvent(data);

    return { ...data, ...funct };
}
