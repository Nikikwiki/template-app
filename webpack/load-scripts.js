const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({tsconfigPath, checkTypes, compilerOptions: overrideCompilerOptions}) => webpackConfig => {
    const compilerOptions = overrideCompilerOptions ? {
        ...overrideCompilerOptions,
    } : undefined;

    if (compilerOptions) {
        console.log('Overriding typescript options with', JSON.stringify(compilerOptions, null, 2));
    }

    const scriptLoaders = [
        {
            loader: 'ts-loader',
            options: {
                // happyPackMode: true,
                configFile: tsconfigPath,
                compilerOptions
            }
        }
    ];

    // ------------------------------------
    // TypeScript
    // ------------------------------------
    webpackConfig.module.rules.push({
        test: /\.[j,t]s(x?)$/,
        exclude: /node_modules/,
        use: scriptLoaders
    });

    // webpackConfig.module.rules.push({
    //     'enforce': 'pre',
    //     'test': /\.js$/,
    //     'loader': 'source-map-loader'
    // });

    // if (checkTypes) {
    //     webpackConfig.plugins.push(
    //         // запускаем проверки TypeScript в отдельном треде не блокируя сборку
    //         new ForkTsCheckerWebpackPlugin({
    //             typescript: {
    //                 memoryLimit: 4096,
    //                 configFile: tsconfigPath,
    //                 diagnosticOptions: {
    //                     syntactic: true,
    //                     semantic: true,
    //                     declaration: false,
    //                     global: false,
    //                 }
    //             },
    //             async: true
    //         })
    //     );
    // }

    return webpackConfig;
};
