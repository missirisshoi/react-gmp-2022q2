const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dev')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
        }, 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name]___[hash:5][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/dev.html',
      minify: false
    }),
    new ESLintPlugin()
  ],
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
  }
};
