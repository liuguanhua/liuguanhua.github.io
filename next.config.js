const webpack = require('webpack')
// const withImages = require('next-images') //ref:https://github.com/zeit/next.js/issues/1935  (next-optimized-images)
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')

const withImages = require('./config/next-images')
const { resolveApp, isProd } = require('./config/helper')
require('./config')

const { publicPath } = global.g_config

//或在.babelrc定义。ref:https://stackoverflow.com/questions/44161479/next-js-webpack-aliasing-component-folders-doesnt-work
const extendsAlias = {
  '@root': resolveApp(''),
  '@node_modules': resolveApp('node_modules'),
  '@styles': resolveApp('src/assets/styles'),
  '@images': resolveApp('src/assets/images'),
  '@fonts': resolveApp('src/assets/fonts'),
  '@components': resolveApp('src/components'),
  '@pages': resolveApp('src/pages'),
  '@scripts': resolveApp('src/scripts'),
  '@store': resolveApp('src/store'),
}

module.exports = withImages({
  exclude: [
    resolveApp('src/assets/fonts/svg'),
    resolveApp('src/assets/images/exclude'),
  ],
  //ref:https://github.com/zeit/next.js/issues/7945#issuecomment-536137816
  devIndicators: {
    autoPrerender: false,
  },
  assetPrefix: isProd ? publicPath : '',
  webpack(config, { isServer, buildId, ...rest }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...extendsAlias,
    }
    isServer && config.plugins.push(new ForkTsCheckerWebpackPlugin())
    config.plugins.push(
      new webpack.DefinePlugin({
        BUILD_ID: JSON.stringify(buildId),
        IS_CLIENT: JSON.stringify(!isServer),
      }),
      new SpritesmithPlugin({
        src: {
          cwd: resolveApp('src/assets/images/icons'),
          glob: '*.png',
        },
        target: {
          image: resolveApp('src/assets/images/exclude/sprite.[hash].png'),
          css: resolveApp('src/assets/styles/sass/common/_sprites.scss'),
        },
        apiOptions: {
          cssImageRef: '~@images/exclude/sprite.[hash].png',
        },
      })
    )
    //ref:https://www.pluralsight.com/guides/how-to-load-svg-with-react-and-webpack
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
})
