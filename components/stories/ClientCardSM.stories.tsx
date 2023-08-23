// components/ClientCard/ClientCardSM.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientCardSM } from "../index";
import { ClientCardProps } from "../../types";

export default {
  title: "Components/ClientCardSM",
  component: ClientCardSM,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ClientCardProps> = (args) => <ClientCardSM {...args} />;

export const Default = Template.bind({});
Default.args = {
  clientId: "OD Labs",
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  cardClassName: "",
  bannerClassName: "",
  avatarClassName: "",
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
