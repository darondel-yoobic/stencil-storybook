import type { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials'],
  docs: { autodocs: true },
  framework: '@storybook/html-webpack5',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
};

export default config;
