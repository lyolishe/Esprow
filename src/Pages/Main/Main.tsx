import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsersListEvent } from '@pages/Main/store/store';
import users from '@shared/data.json';
import { List } from '@pages/Main/components/List/List';

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsersListEvent(users));
  }, [dispatch]);

  return <List />;
};
