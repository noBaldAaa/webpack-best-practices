//
const path = require("path");

module.exports = {
  entry: "./src/index.js", //定义入口
  output: {
    //告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件
    filename: "bundle.js", //定义打包后的文件名称
    path: path.resolve(__dirname, "./dist"), //必须是绝对路径
  },
};
