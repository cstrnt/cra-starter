module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: [".js",".jsx",".ts", ".tsx"],
      },
    },
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": 0,
    "import/extensions": 0,
    "semi": ["error", "never"],
    "eol-last": ["error", "never"],
    "arrow-parens": ["error", "as-needed"]
  },
};
