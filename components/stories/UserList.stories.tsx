// components/UserList.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { UserList, UserListProps } from "../../index";

export default {
  title: "Components/UserList",
  component: UserList,
  tags: ["autodocs"],
  argTypes: {
    client: {
      control: "text",
      description: "The client to fetch client data. Required.",
    },
    containerClassName: {
      control: "text",
      description: "CSS class for the container. Optional.",
    },
    userClassName: {
      control: "text",
      description: "CSS class for individual user items. Optional.",
    },
    textClassName: {
      control: "text",
      description: "CSS class for text elements. Optional.",
    },
    style: {
      control: "object",
      description: "Inline styles for the container. Optional.",
    },
  },
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
