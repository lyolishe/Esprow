import { createAction, createReducer } from '@reduxjs/toolkit';

import { UsersList } from '@shared/types';

export const setUsersListEvent = createAction<UsersList>('mainPage/setUsersListEvent');

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
});
