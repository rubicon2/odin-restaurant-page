const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/i,
                type: "asset/resource"
            }
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    }
}