// components/UserList.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { UserList, UserListProps } from "../../index";

export default {
  title: "Components/UserList",
  component: UserList,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<UserListProps & { client: string }> = (args) => (
  <UserList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  client: "OD Labs",
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  containerClassName: "",
  userClassName: "",
  textClassName: "",
  style: {
    fontFamily: "'Helvetica, Arial, sans-serif",
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px 0",
    alignItems: "center",
    justifyContent: "center",
  },
};
