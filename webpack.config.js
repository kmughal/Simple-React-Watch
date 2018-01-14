const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let files = {};

files.watch = "./src/watch.tsx";
files.app = "./src/app.tsx";


module.exports = {
    entry: files,
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    //C:\workspace\ruc-web-tfl-gov-uk\Source\TfL.Ruc.Web\cdn\static\scripts\ulez\sample-code\hello-world.tsx
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".cshtml", ".html"]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            minimize: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(cshtml)$/,
                loader: "html-loader",
                options: {
                    attrs: [':data-src']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader?sourceMap=true']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};