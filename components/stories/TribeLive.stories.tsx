import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Tribe",
} as Meta;

export const TribeLive = () => (
  <div>
    <iframe
      title="Tribe Rewards"
      src="https://mytriberewards.com/"
      width="100%"
      height="800"
      sandbox="allow-scripts allow-same-origin"
      loading="lazy"
    />
  </div>
);

TribeLive.storyName = "Tribe";
