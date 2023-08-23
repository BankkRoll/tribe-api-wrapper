// components/ClientList.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientList } from "../index";

export default {
  title: "Components/ClientList",
  component: ClientList,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => <ClientList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  className: "",
  clientClassName: "",
  avatarClassName: "",
  backgroundClassName: "",
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
    overflowY: "auto",
    maxHeight: "400px",
    background: "linear-gradient(to bottom, #f7f457, #e156e1)",
  },
};
