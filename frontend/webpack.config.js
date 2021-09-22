module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
};
