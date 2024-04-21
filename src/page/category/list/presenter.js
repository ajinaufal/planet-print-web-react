import { useEffect } from 'react';

export function PresenterCategory({ usecase }) {
    const data = useData({ usecase });
    const funct = useFunc(data);

    useEffect(() => {
        initPage(data);
    }, [data]);

    return { ...data, ...funct };
}

async function initPage(data) {
    // await fetchCategory(data);
}

function useData({ usecase }) {
    return { usecase };
}

function useFunc(data) {
    return {};
}

async function fetchCategory({ usecase }) {
    console.log('masuk fetch');
    const resp = await usecase?.category?.get();

    console.log(resp);
}
