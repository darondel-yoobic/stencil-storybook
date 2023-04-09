module.exports = {
  addons: ['@storybook/addon-essentials'],
  docs: { autodocs: true },
  framework: { name: '@storybook/html-webpack5', options: {} },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
};
