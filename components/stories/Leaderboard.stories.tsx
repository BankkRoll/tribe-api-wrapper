// components/Leaderboard.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Leaderboard } from "../index";
import { LeaderboardProps } from "../../types";

export default {
  title: "Components/Leaderboard",
  component: Leaderboard,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<LeaderboardProps> = (args) => <Leaderboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  client: "all",
};

export const Custom_Limit = Template.bind({});
Custom_Limit.args = {
  ...Default.args,
  limit: 5,
};

export const Weekly = Template.bind({});
Weekly.args = {
  ...Default.args,
  timePeriod: "week",
};

export const Monthly = Template.bind({});
Monthly.args = {
  ...Default.args,
  timePeriod: "month",
};

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  ...Default.args,
  badge_icon:
    "https://pbs.twimg.com/profile_images/1669770046195859464/sXeMCJC9_400x400.jpg",
};

export const WithBadgeFilter = Template.bind({});
WithBadgeFilter.args = {
  ...Default.args,
  badgeFilter: true,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  className: "",
  errorClassName: "",
  loadingClassName: "",
  tableClassName: "",
  titleClassName: "",
  textClassName: "",
  headerClassName: "",
  rowClassName: "",
  badgeClassName: "",
  badge_icon:
    "https://pbs.twimg.com/profile_images/1669770046195859464/sXeMCJC9_400x400.jpg",
  style: {
    fontFamily: "Helvetica, Arial, sans-serif",
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px 0",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
    maxHeight: "400px",
    background: "linear-gradient(to bottom, #f7f457, #e156e1)",
  },
};
