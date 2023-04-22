import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig, InlineConfig } from 'vite';
import {resolve} from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => mergeConfig(config, {
    resolve: {
      alias: {
        '~bootstrap': resolve(process.cwd(), 'node_modules/bootstrap'),
      },
    },
  } as InlineConfig),
};

export default config;
