const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './app.js',
    web: './web.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/[name].[hash:6].js',
    chunkFilename: 'js/[name].[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: [`${__dirname}/node_modules`]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 5,
            name: 'media/[name].[hash:6].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Basic Demo - Webpack'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:6].css',
      chunkFilename: 'styles/[name].[chunkhash:6].css',
      ignoreOrder: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        autoprefixer: { remove: false }
      }
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'all',
          priority: 100
        },
        common: {
          name: 'common',
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 90
        }
      }
    },
  }
};
