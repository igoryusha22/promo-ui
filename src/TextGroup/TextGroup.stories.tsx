import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/Text';

import { TextGroup } from '.';

const meta: Meta<typeof TextGroup> = {
  title: 'Components/TextGroup',
  component: TextGroup,
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
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          laborum, nobis nisi, ducimus deleniti eius quidem sunt molestiae rem
          expedita, iure error quo ipsum. In nesciunt culpa quos ipsum tempora.
        </Text>

        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          laborum, nobis nisi, ducimus deleniti eius quidem sunt molestiae rem
          expedita, iure error quo ipsum. In nesciunt culpa quos ipsum tempora.
        </Text>

        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          laborum, nobis nisi, ducimus deleniti eius quidem sunt molestiae rem
          expedita, iure error quo ipsum. In nesciunt culpa quos ipsum tempora.
        </Text>
      </>
    ),
  },
};
