import js from "@eslint/js";
import css from "@eslint/css";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  // Base JS rules
  js.configs.recommended,

  // JavaScript files (browser + node)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Jest test files
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // CSS files
  css.configs.recommended,

  // Disable formatting rules that conflict with Prettier
  eslintConfigPrettier,
];
