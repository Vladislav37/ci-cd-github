module.exports = {
  entry: {
      main: './src/index.ts'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
                  use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'ts-loader'
          },
      ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};