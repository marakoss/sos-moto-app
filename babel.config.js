module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./src/assets",
            "@images": "./src/assets/images",
            "@icons": "./src/assets/images/icons"
          }
        }
      ]
    ]
  };
};
