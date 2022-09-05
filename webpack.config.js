module.exports = {
	entry: {
		bundle: './src/index.ts',
	},
	output: {
		path: `${__dirname}/dist`, //dirnameは現在のディレクトリ
		filename: '[name].js',
	},
	mode: 'development',
};
