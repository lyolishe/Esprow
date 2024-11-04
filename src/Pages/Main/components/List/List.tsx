import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '@pages/Main/selectors';
import { ListItem } from '@pages/Main/components/List/ListItem';

import css from './List.css';

export const List: FC = () => {
  const users = useSelector(getUsers);

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <div className={css.root}>
      {users.map((user) => (
        <ListItem {...user} key={user.id} />
      ))}
    </div>
  );
};
