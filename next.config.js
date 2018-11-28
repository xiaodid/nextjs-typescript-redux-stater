const withSass = require('@zeit/next-sass')
// const withPreact = require('@zeit/next-preact')
const withTypescript = require('@zeit/next-typescript')
const withImages = require('next-images')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

console.log(path.join(__dirname, 'tsconfig.json'))

const webpack = function (config, options) {
  // Do not run type checking twice:
  if (options.isServer) {
    config.plugins.push(new ForkTsCheckerWebpackPlugin({
      async: true,
      watch: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'pages'),
      ],
      tsconfig: path.join(__dirname, 'tsconfig.json'),
      // tslint: path.join(__dirname, 'tslint.json'),
      checkSyntacticErrors: true,
    }))
  }

  return config
}

const configWithTS = withTypescript({
  // webpack must be the first
  webpack
})
const configWithImage = withImages({
  ...configWithTS,
  inlineImageLimit: 10,
})
const configWithSass = withSass({
  ...configWithImage
})

module.exports = configWithSass
