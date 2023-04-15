import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../../config/theme';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    defaultValue: { type: 'string' },
    onChange: { type: 'function' },
    placeholder: { type: 'string' },
    value: { type: 'string' },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const DefaultStory: Story = {
  render: (props) => <TextField {...props} />,
};
