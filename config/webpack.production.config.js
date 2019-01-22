module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            { test: /\.jsx?$/, use: ['babel-loader'] },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            },
        ],
    }
}