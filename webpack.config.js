const flow = require('lodash.flow');
const path = require('path');

const initConfig = require('./webpack/init-config');
const loadScripts = require('./webpack/load-scripts');
const loadStyles = require('./webpack/load-styles');
const loadAssets = require('./webpack/load-assets');
const pluginsConfig = require('./webpack/plugins-config');
const devServerConfig = require('./webpack/dev-server-config');

const webpackConfig = flow([
    initConfig({
        entry: [ './src/index.tsx' ],
        context: __dirname
    }),
    loadScripts({
        tsconfigPath: path.resolve(__dirname, 'tsconfig-webpack.json'),
        checkTypes: true
    }),
    loadStyles(),
    loadAssets(),
    pluginsConfig(),
    devServerConfig({ checkTypes: true })
])({});

module.exports = webpackConfig;
