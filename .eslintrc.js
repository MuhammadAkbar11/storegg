module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    // "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./next.config.js"],
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/ban-types": 0,
    "no-empty-pattern": 0,
    "import/no-extraneous-dependencies": 0,
    "no-new": 0,
    "@next/next/no-html-link-for-pages": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/achor-is-valid": 0,
  },
};
