module.exports = {
	entry: {
		bundle: './src/index.ts',
	},
	output: {
		path: `${__dirname}/dist`, //dirnameは現在のディレクトリ
		filename: '[name].js',
	},
	mode: 'development',
	resolve: {
		extensions: ['.ts', '.js'], //必要な拡張子を有効化
	},
	devServer: {
		static: {
			directory: `${__dirname}/dist`,
		},
		open: true, //自動でブラウザを起動
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
			},
		],
	},
};
