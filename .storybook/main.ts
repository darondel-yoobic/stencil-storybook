import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials'],
  docs: { autodocs: true },
  framework: '@storybook/html-vite',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
};

export default config;
