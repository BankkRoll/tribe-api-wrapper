/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
  '../components/stories/Introduction.stories.tsx',
  '../components/stories/TribeLive.stories.tsx',
  '../components/stories/ClientProfile.stories.tsx',
  '../components/**/**/*.stories.tsx',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-docs",
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
