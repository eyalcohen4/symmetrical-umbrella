const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: path.resolve(__dirname, '../src/app/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader?root=public&interpolate']
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'resolve-url-loader'],
				}),	
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: ['file-loader?context=src&name=[path][name].[ext]'],
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				use: ['file-loader?context=src&name=[path][name].[ext]'],
			},
		]
	},
	resolve: {
		modules: ['node_modules', 'src'],
		alias: {
			jquery: 'jquery/src/jquery',
		},
	},
	plugins: [

		new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true }),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../src/index.html'), inject: true })

	],
	devServer: { 
		contentBase: path.resolve(__dirname, '../src'),
		stats: 'minimal',
	}
}