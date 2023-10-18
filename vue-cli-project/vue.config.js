const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { PlusProComponentsResolver } = require('@plus-pro-components/resolver')

module.exports = defineConfig({
  // ...
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [PlusProComponentsResolver(), ElementPlusResolver()]
      })
    ]
  }
})
