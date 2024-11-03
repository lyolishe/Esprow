const path = require( "path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackHtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './src/App/App.tsx',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      // --- JS | TS USING BABEL
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Using a cache to avoid of recompilation
          },
        },
      },
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/Pages'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          filter: (obj: string) => !obj.endsWith('html'),
        },
      ],
    }),
    new WebpackHtmlPlugin({ title: 'Esprow coding challenge', template: path.resolve(__dirname, 'public/index.html') }),
  ],
};

export default config;