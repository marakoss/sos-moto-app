module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					'@src': './src/',
					'@assets': './src/assets',
					'@images': './src/assets/images',
					'@icons': './src/assets/icons',
					'@components': './src/components',
					'@dictionaries': './src/dictionaries',
					'@screens': './src/screens',
					'@store': './src/store',
					'@translations': './src/translations',
					'@types': './src/types',
					'@utils': './src/utils',
					'@logic': './src/logic',
					'@hooks': './src/hooks'
				}
			}
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: true,
				allowUndefined: false
			}
		],
		"react-native-reanimated/plugin",
	],
  };
};
