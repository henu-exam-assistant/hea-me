/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
  ),
}
