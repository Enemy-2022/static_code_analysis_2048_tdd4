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
      "no-else-return": "warn",
      "brace-style": "warn",
      "camelcase": "warn",
      "indent": ["warn", 2],
      "no-undef": "error",
      "no-redeclare": "error",
      "space-infix-ops": "warn",
      "no-multi-spaces": "warn"
    }
  }
];