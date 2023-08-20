// components/ClientCard/ClientCardSM.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClientCardSM } from '../ClientCard/ClientCardSM';
import { ClientCardProps } from '../../types';

export default {
  title: 'Components/ClientCardSM',
  component: ClientCardSM,
} as Meta;

const Template: Story<ClientCardProps> = (args) => <ClientCardSM {...args} />;

export const Default = Template.bind({});
Default.args = {
  clientId: 'OD Labs',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  cardClassName: 'custom-card-class',
  bannerClassName: 'custom-banner-class',
  avatarClassName: 'custom-avatar-class',
  nameClassName: 'custom-name-class',
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
