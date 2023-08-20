/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../components/**/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
