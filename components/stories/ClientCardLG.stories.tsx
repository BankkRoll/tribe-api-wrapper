// components/ClientCard/ClientCardLG.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientCardLG } from "../index";
import { ClientCardProps } from "../../types";

export default {
  title: "Components/ClientCardLG",
  component: ClientCardLG,
  tags: ["autodocs"],
  argTypes: {
    client: {
      control: "text",
      description: "The client to fetch client data. Required.",
    },
    cardClassName: {
      control: "text",
      description: "CSS class for the card container. Optional.",
    },
    bannerClassName: {
      control: "text",
      description: "CSS class for the banner. Optional.",
    },
    avatarClassName: {
      control: "text",
      description: "CSS class for the avatar. Optional.",
    },
    style: {
      control: "object",
      description: "Inline styles for the card container. Optional.",
    },
  },
} as Meta;

const Template: StoryFn<ClientCardProps> = (args) => <ClientCardLG {...args} />;

export const Default = Template.bind({});
Default.args = {
  client: "OD Labs",
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  cardClassName: "",
  bannerClassName: "",
  avatarClassName: "",
  nameClassName: "",
  style: {
    fontFamily: "'Helvetica, Arial, sans-serif",
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    background: "linear-gradient(135deg, #f3f3f3 0%, #e1e1e1 100%)",
    margin: "10px 0",
    alignItems: "center",
    justifyContent: "center",
  },
};
