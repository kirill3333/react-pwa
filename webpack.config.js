require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const webpackMerge = require('webpack-merge')

const baseConfig = {
  entry: './app/client.js',
  output: {
    path: path.resolve('dist/server/static'),
    libraryTarget: 'umd',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '/fonts/[name].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.(ttf|eot|svg)$/, use: {
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports = webpackMerge(baseConfig, {
    plugins: [
      new BundleAnalyzerPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
          warnings: false,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true
        },
        output: {
          comments: false
        },
        exclude: [/\.min\.js$/gi]
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      })
    ]
  })
} else {
  module.exports = webpackMerge(baseConfig, {
    devtool: 'inline-source-map'
  })
}