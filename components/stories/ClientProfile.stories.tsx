// components/ClientProfile.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClientProfile } from '../index';
import { ClientProfileProps } from '../../types';

export default {
  title: 'Components/ClientProfile',
  component: ClientProfile,
} as Meta;


const Template: Story<ClientProfileProps> = (args) => <ClientProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  clientId: 'OD Labs',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  containerClassName: 'custom-container-class',
  bannerClassName: 'custom-banner-class',
  avatarClassName: 'custom-avatar-class',
  nameContainerClassName: 'custom-name-container-class',
  nameClassName: 'custom-name-class',
  userListClassName: 'custom-user-list-container-class',
  userContainerClassName: 'custom-user-container-class',
  userClassName: 'custom-user-name-class',
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
