// components/ClientCard/ClientCardLG.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClientCardLG } from '../index';
import { ClientCardProps } from '../../types';

export default {
  title: 'Components/ClientCardLG',
  component: ClientCardLG,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ClientCardProps> = (args) => <ClientCardLG {...args} />;

export const Default = Template.bind({});
Default.args = {
  clientId: 'OD Labs',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  cardClassName: '',
  bannerClassName: '',
  avatarClassName: '',
  nameClassName: '',
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
