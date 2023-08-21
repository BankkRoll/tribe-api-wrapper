// components/ClientList.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClientList } from '../index';

export default {
  title: 'Components/ClientList',
  component: ClientList,
} as Meta;

const Template: Story<{
  className?: string;
  clientClassName?: string;
  avatarClassName?: string;
  backgroundClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}> = (args) => <ClientList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  className: 'custom-class',
  clientClassName: 'custom-client-class',
  avatarClassName: 'custom-avatar-class',
  backgroundClassName: 'custom-background-class',
  textClassName: 'custom-text-class',
  style: {
    fontFamily: "'Helvetica, Arial, sans-serif",
    textAlign: 'center',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

