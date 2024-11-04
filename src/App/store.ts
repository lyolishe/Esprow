import { configureStore } from '@reduxjs/toolkit';
import { MainPageStore } from '@pages/Main/store/store';

export const store = configureStore({
  reducer: {
    MainPage: MainPageStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
