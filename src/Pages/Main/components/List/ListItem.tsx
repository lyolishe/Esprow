import React, { FC, useCallback, useMemo } from 'react';
import { UserDTO } from '@shared/types';

import css from './List.css';

export const ListItem: FC<UserDTO & { onClick: (id: string) => void }> = ({ id, onClick, ...user }) => {
  const onEdit = useCallback(() => {
    onClick(id);
  }, [onClick, id]);
  const propsToShow = useMemo(() => Object.entries(user).filter(([_, value]) => typeof value !== 'object'), [user]);
  return (
    <div className={css.item}>
      {propsToShow.map(([key, value]) => (
        <span>
          {key}: {value}
        </span>
      ))}
      <button className={css.editButton} type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};
