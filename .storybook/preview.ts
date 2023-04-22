import '../src/styles/main.scss';
import type { Preview, Parameters } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

export const parameters: Parameters = {
  layout: 'centered',
}

export default preview;
