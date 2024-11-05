import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '@pages/Main/selectors';
import { ListItem } from '@pages/Main/components/List/ListItem';

import css from './List.css';
import { Modal } from '@shared/ui/Modal/Modal';
import { EditUserModal } from '@pages/Main/components/EditUserModal/EditUserModal';

export const List: FC = () => {
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);
  const users = useSelector(getUsers);

  const closeModal = () => {
    setCurrentEditId(null);
  };

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <div className={css.root}>
      <Modal name="editUserModal" onClose={closeModal} opened={currentEditId !== null}>
        <EditUserModal id={currentEditId!} onClose={closeModal} />
      </Modal>

      {users.map((user) => (
        <ListItem {...user} onClick={setCurrentEditId} key={user.id} />
      ))}
    </div>
  );
};
