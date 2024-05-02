const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: {
        onBuildStart: ['tailwindcss -i ./src/styles.css  -o ./src/tailwind.css']
      }
    })
  ]
};
