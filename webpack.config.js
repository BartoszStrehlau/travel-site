const path =require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {loader: 'css-loader', options:{url:false}}, {loader: 'postcss-loader', options:{postcssOptions:{plugins: postCSSPlugins}}}]
            }
        ]
    }
}
// newest webpack config for devserver module
//  devServer: {
//      watchFiles: ('./app/**/*.html'),
//      static: {directory: path.join(__dirname, 'app')},
//      hot: 'only',
//      liveReload: false,
//      port: 3000
//  },
