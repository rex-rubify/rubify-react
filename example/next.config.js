const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
require('dotenv').config();

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
        'process.env.PORT': JSON.stringify(process.env.PORT)
      })
    );
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader', { loader: 'sass-loader'}]
      }
    )
    return config
  }
}
