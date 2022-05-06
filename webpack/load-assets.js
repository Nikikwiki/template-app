module.exports = () => webpackConfig => {
    webpackConfig.module.rules.push({
        'test': /\.(png|jp(e*)g|gif|ico|woff|woff2|eot|ttf)$/,
        'use': [ {
            'loader': 'url-loader',
            'options': {
                'limit': 512 * 1024
            }
        } ]
    });

    webpackConfig.module.rules.push({
        'test': /\.svg$/,
        'use': [ '@svgr/webpack' ]
    });

    return webpackConfig;
};
