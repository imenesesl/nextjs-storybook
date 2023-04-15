import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../../config/theme';

import { Search } from './Search';

const meta: Meta<typeof Search> = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Modules/Search',
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const DefaultStory: Story = {
  render: () => <Search />,
};
