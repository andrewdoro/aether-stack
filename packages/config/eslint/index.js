/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "solid"],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
  },
};
