module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": "warn",
    "prefer-const": "error",
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    indent: ["warn", 2],
    "max-len": ["error", { code: 80 }],
    // 'max-line-length': null,
  },
};
