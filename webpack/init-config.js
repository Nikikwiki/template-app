const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('../config');

module.exports = ({ entry, context, alias }) => webpackConfig => {
    if (alias) {
        console.log('Overriding alias option with', JSON.stringify(alias, null, 2));
    }

    Object.assign(webpackConfig, {
        context: context,
        target: 'web',
        mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
        devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : undefined,
        entry: {
            index: entry
        },
        output: {
            publicPath: '',
            path: config.DIST_PATH,
            filename: '[name].js',
            chunkFilename: '[id].[chunkhash].js'
        },
        resolve: {
            modules: [
                'node_modules',
                config.SRC_PATH
            ],
            extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss', '.json', '.svg' ],
            alias: {
                ...alias
            }
        },
        module: {
            rules: []
        },
        stats: 'minimal',
        performance: {
            hints: false
        },
        plugins: [
            new webpack.DefinePlugin(config.DEFINES)
        ],
        optimization: {
            splitChunks: {
                'chunks': 'all'
            },
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        'keep_classnames': true,
                        'output': {
                            'comments': false
                        }
                    }
                })
            ]
        }
    });

    return webpackConfig;
};
