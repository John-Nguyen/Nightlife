var config = {
   entry: './main.js',
   
   output: {
      path: __dirname + '/dist/js',
      filename: 'index.js',
   },
   
   devServer: {
      inline: true,
      port: 8080
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', "stage-0", 'react'],
               plugins: ["transform-decorators-legacy"]
            }
         }
         // ,{
         //    test: /\.svg$/,
         //    loader: 'react-svg-loader',
         //    query: {
         //       svgo: {
         //       //presets: ['es2015', "stage-0", 'react'],
         //       plugins: [{removeTitle: false}],
         //       floatPrecision: 2
         //       }
         //    }
         // }
      ]
   }
}

module.exports = config;