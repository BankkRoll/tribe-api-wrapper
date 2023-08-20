// components/Leaderboard.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Leaderboard, LeaderboardProps } from '../../index';

export default {
  title: 'Components/Leaderboard',
  component: Leaderboard,
} as Meta;

const Template: Story<LeaderboardProps> = (args) => <Leaderboard {...args} />;


export const Default = Template.bind({});
Default.args = {
  client: 'OD Labs'
};

export const All_Time = Template.bind({});
All_Time.args = {
  ...Default.args,
  timePeriod: 'week',
};

export const Weekly = Template.bind({});
Weekly.args = {
  ...Default.args,
  timePeriod: 'week',
};

export const Monthly = Template.bind({});
Monthly.args = {
  ...Default.args,
  timePeriod: 'month',
};

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  ...Default.args,
  badge_icon: 'static/media/public/images/TRIBENFTCO.png',
};

export const WithBadgeFilter = Template.bind({});
WithBadgeFilter.args = {
  ...Default.args,
  badgeFilter: true
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  badge_icon: 'static/media/public/images/TRIBENFTCO.png',
  badgeFilter: false,
  className: 'custom-class',
  errorClassName: 'error-class',
  loadingClassName: 'loading-class',
  tableClassName: 'table-class',
  titleClassName: 'title-class',
  textClassName: 'text-class',
  headerClassName: 'header-class',
  rowClassName: 'row-class',
  badgeClassName: 'badge-class',
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


