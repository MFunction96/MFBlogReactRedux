const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

let config = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "Entry",
			template: "src/assets/template.html"
		})
	],
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [{
			enforce: "pre",
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "eslint-loader"
		}, {
			test: /font-awesome\.config\.js/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "font-awesome-loader"
			}
			]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.tsx?$/,
			loader: "awesome-typescript-loader"
		}, {
			enforce: "pre",
			test: /\.js$/,
			loader: "source-map-loader"
		}, {
			test: /\.css$/,
			use: [
				"style-loader",
				"css-loader"
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				"file-loader"
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				"file-loader"
			]
		}, {
			test: /\.xml$/,
			use: [
				"xml-loader"
			]
		}]
	}
}

module.exports = (env, argv) =>  {
	if (argv.mode === "development") {
		config.mode = "development"
		config.devtool = "source-map"
		config.devServer = {
			contentBase: path.join(__dirname, "../dist"),
			compress: true,
			port: 9000
		}
	}
	else if (argv.mode === "production") {
		config.mode = "production"
		config.devtool = "inline-source-map"
	}
	else {
		config.mode = "none"
	}
	return config
}