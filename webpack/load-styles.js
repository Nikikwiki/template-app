const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => webpackConfig => {
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            'filename': '[name].css'
        })
    );

    const scssLoader = {
        loader: 'sass-loader',
        options: {
            'sassOptions': {
                'includePaths': [ './node_modules' ]
            }
        }
    };

    const cssLoadersWithModules = [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    // localIdentName: '[local]--[hash:base64:5]'
                    // localIdentName: '[path][name]__[local]',
                    localIdentName: '[local]',
                    exportLocalsConvention: 'camelCaseOnly',
                    exportGlobals: false
                },
                sourceMap: false
            }
        },
        { loader: 'postcss-loader' }
    ];

    const cssLoaders = [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: false,
                sourceMap: false
            }
        },
        { loader: 'postcss-loader' }
    ];

    webpackConfig.module.rules.push(
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: cssLoadersWithModules
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [ ...cssLoadersWithModules, scssLoader ]
        },
        {
            test: /\.css$/,
            include: /node_modules/,
            use: cssLoaders
        },
        {
            test: /\.scss$/,
            include: /node_modules/,
            use: [ ...cssLoaders, scssLoader ]
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                    // options: { publicPath: '../server/static/images' }
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: false,
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }
            ]
        }
    );

    return webpackConfig;
};
