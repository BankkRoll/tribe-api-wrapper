/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    backgrounds: {
      default: 'Charcoal',
      values: [
        {name: 'Snow White', value: '#F3F3F3',},
        {name: 'Light Gray', value: '#E0E0E0',},
        {name: 'Silver', value: '#C6C6C6',},
        {name: 'Gray', value: '#ADADAD',},
        {name: 'Slate Gray', value: '#949494',},
        {name: 'Dim Gray', value: '#7A7A7A',},
        {name: 'Dark Gray', value: '#616161',},
        {name: 'Charcoal', value: '#474747',},
        {name: 'Jet Black', value: '#2E2E2E',},
        {name: 'Pure Black', value: '#000000',}
        
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      viewMode: 'story',
      storyId: 'introduction--introduction',
    },
  },
};

export default preview;

