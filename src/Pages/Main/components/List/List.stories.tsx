import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List } from '@pages/Main/components/List/List';
import { Provider } from 'react-redux';
import usersList from '@shared/data_qa.json';
import { createStoreMock } from '@shared/utils/storybook';

export default {
  component: List,
  title: 'Список',
  decorators: [(storyFn) => <Provider store={createStoreMock({ MainPage: { usersList } })}>{storyFn()}</Provider>],
} as Meta;

const Template: StoryFn<typeof List> = (args) => <List {...args} />;

export const Overview = Template.bind({});
