// components/ClientProfile.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientProfile } from "../index";
import { ClientProfileProps } from "../../types";

export default {
  title: "Components/ClientProfile",
  component: ClientProfile,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ClientProfileProps> = (args) => (
  <ClientProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  clientId: "OD Labs",
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  containerClassName: "",
  bannerClassName: "",
  avatarClassName: "",
  leaderboardClassName: "",
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
