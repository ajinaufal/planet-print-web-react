import { useLocation } from 'react-router-dom';

export function LayoutState({ usecase }) {
    const location = useLocation();

    const canShow = true;

    return { usecase, location };
}
