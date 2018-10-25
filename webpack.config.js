const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const speedMeasurePlugin = new SpeedMeasurePlugin({
	outputFormat: () => {},
	outputTarget: () => {}
});

module.exports = speedMeasurePlugin.wrap({
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/template.hbs',
			filename: 'generated.html'
		})
	]
});
