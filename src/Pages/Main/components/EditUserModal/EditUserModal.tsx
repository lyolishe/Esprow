import React, { FC, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '@pages/Main/selectors';
import { produce } from 'immer';
import { updateUserEvent } from '@pages/Main/store/store';

import css from './EditUserModal.css';
import { UserInput } from '@pages/Main/components/EditUserModal/Inputs';

type Props = { id: string; onClose: () => void };

export const EditUserModal: FC<Props> = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserById(id));
  const [formState, updateForm] = useReducer(
    produce((prevState, { fieldId, newValue }) => {
      prevState[fieldId] = newValue;
    }),
    user
  );

  const onFinish = () => {
    dispatch(updateUserEvent(formState));
    onClose();
  };

  if (!user) return 'something went wrong to the system. reload the page';

  return (
    <div className={css.root}>
      <div className={css.title}>Editing user with id {id}</div>
      {Object.entries(formState).map(([fieldId, value]) => (
        <UserInput id={fieldId} value={value} onChange={(newValue) => updateForm({ fieldId, newValue })} />
      ))}
      <button type="submit" onClick={onFinish}>
        Update User
      </button>
    </div>
  );
};
