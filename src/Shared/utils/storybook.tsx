import React from 'react';
import { StoryFn } from '@storybook/react';
import { RootState } from '@app/store';
import { Provider } from 'react-redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';

const mapReducers = (state: RootState) =>
  Object.entries(state).reduce((acc, [name, value]) => {
    // @ts-expect-error expects keyof obj while assigning it.
    acc[name] = createReducer(value, () => {});
    return acc;
  }, {});

export const withReduxStateStory = (Story: StoryFn, state: RootState) => {
  return (
    <Provider store={configureStore({ reducer: mapReducers(state) })}>
      <Story />
    </Provider>
  );
};
