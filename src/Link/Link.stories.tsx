import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'hoverable',
    children: 'Go to',
    href: '/?path=/docs/components-link--docs',
  },
};
