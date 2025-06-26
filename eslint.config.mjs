import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import neverthrow from "eslint-plugin-neverthrow";
import { fixupPluginRules } from "@eslint/compat";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    files: ["**/*.{js,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,cjs,ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2022,
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: { neverthrow: fixupPluginRules(neverthrow) },
    rules: { "neverthrow/must-use-result": "error" },
  },
]);
