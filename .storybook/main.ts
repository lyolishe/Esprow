import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      '@pages': path.resolve(__dirname, '../src/Pages'),
      '@shared': path.resolve(__dirname, '../src/Shared'),
      '@app': path.resolve(__dirname, '../src/App'),
    };

    // @ts-expect-error long way to css-loader
    config.module!.rules![5]!.use[1].options = {
      importLoaders: 1,
      modules: {
        namedExport: false,
      },
    };
    return config;
  },
};
export default config;
