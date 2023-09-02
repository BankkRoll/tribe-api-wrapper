// components/ClientProfile.stories.tsx
// components/ClientProfile.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientProfile } from "../index";
import { ClientProfileProps } from "../../types";

export default {
  title: "Components/ClientProfile",
  component: ClientProfile,
  tags: ["autodocs"],
  argTypes: {
    clientId: {
      control: "text",
      description: "The client to fetch client data. Required.",
    },
    containerClassName: {
      control: "text",
      description: "CSS class for the main container. Optional.",
    },
    bannerClassName: {
      control: "text",
      description: "CSS class for the banner. Optional.",
    },
    avatarClassName: {
      control: "text",
      description: "CSS class for the avatar. Optional.",
    },
    leaderboardClassName: {
      control: "text",
      description: "CSS class for the leaderboard. Optional.",
    },
    style: {
      control: "object",
      description: "Inline styles for the main container. Optional.",
    },
  },
} as Meta;

const Template: StoryFn<ClientProfileProps> = (args) => (
  <ClientProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  client: "OD Labs",
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
