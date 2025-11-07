import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...(Array.isArray(tseslint.configs.recommended)
    ? tseslint.configs.recommended
    : [tseslint.configs.recommended]),
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.mts"],
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.cjs", "**/*.js"],
    env: {
      node: true,
      commonjs: true,
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
    },
  },
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
