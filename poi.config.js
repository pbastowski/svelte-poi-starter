// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path')

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
                    exclude: /node_modules/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            customElement: !!process.env.CUSTOM_ELEMENT
                        }
                    }
                }
                // {
                //     test: /\.css$/,
                //     use: ExtractTextPlugin.extract({
                //         fallback: 'style-loader',
                //         use: 'css-loader'
                //     })
                // }
            ]
        }
        // plugins: [new ExtractTextPlugin('styles.css')]
    }
}
