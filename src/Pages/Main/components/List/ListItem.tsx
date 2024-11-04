import React, { FC, useCallback, useMemo } from 'react';
import { UserDTO } from '@shared/types';
import { useDispatch } from 'react-redux';

import css from './List.css';

export const ListItem: FC<UserDTO> = (user) => {
  const dispatch = useDispatch();
  // const onEdit = useCallback(dispatch(event(user.id)))
  const propsToShow = useMemo(() => Object.entries(user).filter(([_, value]) => typeof value !== 'object'), [user]);
  return (
    <div className={css.item}>
      {propsToShow.map(([key, value]) => (
        <span>
          {key}: {value}
        </span>
      ))}
    </div>
  );
};
