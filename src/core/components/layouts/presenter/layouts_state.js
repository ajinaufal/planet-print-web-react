import { useLocation } from 'react-router-dom';

export function LayoutState({ usecase }) {
    const location = useLocation();

    const canShow = true;

    // console.log('test data : ', location.pathname);

    return { usecase, location };
}
