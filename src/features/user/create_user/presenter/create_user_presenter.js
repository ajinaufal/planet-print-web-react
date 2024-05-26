import { useEffect } from 'react';
import { CreateUserEvent } from './create_user_event';
import { CreateUserState } from './create_user_state';

export function CreateUserPresenter({ usecase }) {
    const data = CreateUserState({ usecase });
    const event = CreateUserEvent(data);

    useEffect(() => {
        initialFetch({ ...data, ...event });
    }, []);

    return { ...data, ...event };
}

async function initialFetch({ handleFetchRoles }) {
    await handleFetchRoles();
}
