const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Add Babel loader with necessary plugins for optional chaining and nullish coalescing
environment.loaders.append('babel', {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-logical-assignment-operators'
      ]
    }
  }]
})
environment.config.set('resolve.extensions', ['.js', '.jsx', '.mjs'])
module.exports = environment
