import type { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials'],
  docs: { autodocs: true },
  framework: { name: '@storybook/html-webpack5', options: {} },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
};

export default config;
