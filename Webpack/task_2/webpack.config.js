const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                    }
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      disable: false,
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ]
              },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
};
