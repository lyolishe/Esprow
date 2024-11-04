import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '@pages/Main/selectors';
import { ListItem } from '@pages/Main/components/List/ListItem';

import css from './List.css';
import { Modal } from '@shared/ui/Modal/Modal';

export const List: FC = () => {
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);
  const users = useSelector(getUsers);

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <div className={css.root}>
      <Modal
        name="editUserModal"
        onClose={() => {
          setCurrentEditId(null);
        }}
        opened={currentEditId !== null}
      >
        {currentEditId}
      </Modal>

      {users.map((user) => (
        <ListItem {...user} onClick={setCurrentEditId} key={user.id} />
      ))}
    </div>
  );
};
