import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isExternal: false,
    href: '#',
    title: "What's about blog",
    description: 'Explanation of the article',
    cta: 'Read Article',
  },
};
