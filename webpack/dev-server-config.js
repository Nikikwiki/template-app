const config = require('../config');

module.exports = () => webpackConfig => {
    Object.assign(webpackConfig, {
        devServer: {
            // hot: true,
            // host: config.DEV_SERVER_HOST,
            port: config.DEV_SERVER_PORT,
            historyApiFallback: true,
            static: config.CONTENT_PATH,
        }
    });

    return webpackConfig;
};
