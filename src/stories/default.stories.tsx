import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../config/theme';

import { Default } from './Default';

const meta: Meta<typeof Default> = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Default',
  component: Default,
  argTypes: {
    text: {
      name: 'text',
      defaultValue: 'Hi there!',
      description: 'Friendly message',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Default>;

export const DefaultStory: Story = {
  render: (props) => <Default {...props} />,
};
