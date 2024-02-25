import { useEffect, useReducer } from 'react';
import { fetchProductListReducer } from './reducer';

export function PresenterProductList({ usecase }) {
    const data = UseData({ usecase });
    const funct = UseFunct({ ...data });

    useEffect(() => {
        initPage(data);
        // eslint-disable-next-line
    }, []);

    return { ...data, ...funct };
}

async function initPage(data) {
    await fetchProductList(data);
}

function UseData({ usecase }) {
    const [fetchProducts, dispatchFetchProducts] = useReducer(fetchProductListReducer, {
        loading: true,
        data: [],
    });
    return { usecase, fetchProducts, dispatchFetchProducts };
}

function UseFunct(data) {
    return {};
}

async function fetchProductList({ usecase, dispatchFetchProducts }) {
    dispatchFetchProducts({ type: 'start' });
    const resp = await usecase?.product?.get();

    if (resp?.status === 200) {
        dispatchFetchProducts({ type: 'success', data: resp?.data?.data || [] });
    } else {
        dispatchFetchProducts({ type: 'failed' });
    }
}
