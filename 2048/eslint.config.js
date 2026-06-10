module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script"
    },
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "eqeqeq": "warn",
      "curly": "warn",
      "no-var": "warn",
      "no-console": "warn",

      "semi": "warn",
      "quotes": ["warn", "single"],
      "camelcase": "warn",
      "no-multi-spaces": "warn"
    }
  }
];