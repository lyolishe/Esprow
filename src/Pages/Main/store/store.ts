import { createAction, createReducer } from '@reduxjs/toolkit';

import { UserDTO, UsersList } from '@shared/types';

export const setUsersListEvent = createAction<UsersList>('mainPage/setUsersListEvent');
export const updateUserEvent = createAction<UserDTO>('mainPage/updateUserEvent');

export interface MainPageState {
  usersList: UsersList;
}

export const initialState: MainPageState = {
  usersList: [],
};

export const MainPageStore = createReducer(initialState, (builder) => {
  builder.addCase(setUsersListEvent, (state, { payload }) => {
    state.usersList = payload;
  });
  builder.addCase(updateUserEvent, (state, { payload }) => {
    const userIndex = state.usersList.findIndex((user) => user.id === payload.id);
    if (userIndex > -1) {
      state.usersList[userIndex] = payload;
    }
  });
});
