const path = require('path');

const CONSTANTS = {
    DIST_PATH: path.resolve(__dirname, 'dist'),
    SRC_PATH: path.resolve(__dirname, 'src'),
    CONTENT_PATH: path.resolve(__dirname, 'public'),
    ROOT_PATH: path.resolve(__dirname),
    MOD_PATH: '/external-services/sat-selection/',
    DEV_SERVER_HOST: 'localhost',
    DEV_SERVER_PORT: '8000',
}

let x = string => JSON.stringify(string);

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const PRODUCTION = ENV === 'production';
const DEVELOPMENT = ENV === 'development';

const DEFINES = {
    __PRODUCTION__: x(PRODUCTION),
    __DEVELOPMENT__: x(DEVELOPMENT),
    __ENV__: x(ENV),
    __MOD_PATH__: x(CONSTANTS.MOD_PATH)
};

module.exports = {
    ...CONSTANTS,
    DEFINES
};
