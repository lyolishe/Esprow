import { RootState } from '@app/store';
import { createSelector } from 'reselect';

const mainPageStoreSelector = (state: RootState) => state.MainPage;

export const getUsers = createSelector([mainPageStoreSelector], (state) => state.usersList);
export const getUserById = (id: string) => createSelector([getUsers], (users) => users.find((user) => user.id === id));
