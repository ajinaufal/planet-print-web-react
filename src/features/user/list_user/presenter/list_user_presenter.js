import { useEffect } from 'react';
import { listUserEvent } from './list_user_event';
import { ListUserState } from './list_user_state';

export function ListUserPresenter({ usecase }) {
  const data = ListUserState({ usecase });
  const event = listUserEvent(data);

  useEffect(() => {
    initialFetch({ ...data, ...event });
  }, [data, event]);

  return { ...data, ...event };
}

async function initialFetch({ handleFetchListUser }) {
  await handleFetchListUser();
  console.log('test doang ini mah');
}
