import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../../config/theme';

import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    defaultQuery: { type: 'string' },
    onSearch: { type: 'function' },
    query: { type: 'string' },
    items: { type: 'symbol' },
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const DefaultStory: Story = {
  render: (props) => (
    <Autocomplete
      {...props}
      items={[{ text: 'iPhone' }, { text: 'iPhone XS' }]}
    />
  ),
};
