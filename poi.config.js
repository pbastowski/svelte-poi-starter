// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
    configureWebpack: {
        resolve: {
            // see below for an explanation
            alias: {
                svelte: path.resolve('node_modules', 'svelte')
            },
            extensions: ['.mjs', '.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },

        module: {
            rules: [
                {
                    test: /\.svelte$/,
                    //exclude: /node_modules/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            // hotReload: true,
                            customElement: !!process.env.POI_APP_CUSTOM_ELEMENT
                        }
                    }
                }
                // {
                //     test: /\.css$/,
                //     use: [
                //         /**
                //          * MiniCssExtractPlugin doesn't support HMR.
                //          * For developing, use 'style-loader' instead.
                //          * */
                //         prod ? MiniCssExtractPlugin.loader : 'style-loader',
                //         'css-loader'
                //     ]
                // }
            ]
        },

        // plugins: [
        //     new MiniCssExtractPlugin({
        //         filename: '[name].css'
        //     })
        // ],

        devtool: prod ? false : 'source-map'
    }
}
