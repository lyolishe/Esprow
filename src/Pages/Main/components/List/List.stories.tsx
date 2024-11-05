import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List } from '@pages/Main/components/List/List';

import usersList from '@shared/data_qa.json';
import { withReduxStateStory } from '@shared/utils/storybook';

export default {
  component: List,
  title: 'Список',
} as Meta;

const Template: StoryFn<typeof List> = (args) => <List {...args} />;

export const Overview = withReduxStateStory(Template.bind({}), { MainPage: { usersList } });
