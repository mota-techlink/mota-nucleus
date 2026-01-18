module.exports = {
  root: true,
  extends: ["@mota/config/eslint-preset.js"], // 假设我们在config里定义了这个
  // 如果 config 里没有 preset，暂时用下面这个简单的：
  // extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist", "node_modules"]
};