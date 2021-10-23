const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.extendBuild((config, { isDev }) => {
    if (isDev) return

    let options = this.options['nextjs-brotli'] || moduleOptions

    options.asset = options.asset || '[path].br[query]'
    options.test = options.test || /\.(js|css|html|svg)$/
    options.threshold = options.threshold || 0
    options.minRatio = options.minRatio || 0.8

    config.plugins.push(new NextjsBrotli(options))
  })
}

module.exports.meta = require('./package.json')
