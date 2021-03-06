const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));

const JsonSassPlugin = require('@bit/wurielle.pristine.webpack.json-sass-plugin');

module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        // vue inspect --plugins
        config
            .entry('app')
            .add('animate.css/animate.min.css')
            .add('ionicons/dist/css/ionicons.min.css')
        ;
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@config':  path.resolve(__dirname, 'config'),
                '@components':  path.resolve(__dirname, 'components'),
            }
        },
        plugins:[
            new webpack.DefinePlugin({
                // 'API_AUTH_USERNAME': JSON.stringify(argv.apiAuthUsername.trim()),
                // 'API_AUTH_PASSWORD': JSON.stringify(argv.apiAuthPassword.trim()),
                // 'DOMAIN_URL': JSON.stringify(argv.domain.trim()),
                // ...
            }),
            new JsonSassPlugin('./config/pristine.config.js', './config/pristine.config.scss'),
        ]
    }
};
