import { useLocation, useNavigate } from 'react-router-dom';
import { PublicPath } from '../../routers/config';
import { useEffect } from 'react';

export function PresenterLayout({ usecase }) {
    const data = UseData({ usecase });
    const funct = UseFunct({ ...data });

    useEffect(() => {
        initialRender(data);
    }, []);

    return { ...data, ...funct };
}

function initialRender({ usecase, navigate, hasAccessories }) {
    const local = usecase?.user?.getUserLocal();
    if (!local?.token && !hasAccessories) navigate('/login');
}

function UseData({ usecase }) {
    const location = useLocation();
    const navigate = useNavigate();
    const hasAccessories = PublicPath.includes(location?.pathname);

    return { usecase, hasAccessories, navigate };
}

function UseFunct(data) {
    return {};
}
