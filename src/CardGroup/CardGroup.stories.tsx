import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/Card';

import { CardGroup } from '.';

const meta: Meta<typeof CardGroup> = {
  title: 'Components/CardGroup',
  component: CardGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card
          href="#"
          title="What's about blog"
          description="Explanation of the article"
          cta="Read Article"
        />

        <Card
          href="#"
          title="What's about blog"
          description="Explanation of the article"
          cta="Read Article"
        />

        <Card
          href="#"
          title="What's about blog"
          description="Explanation of the article"
          cta="Read Article"
        />
      </>
    ),
  },
};
