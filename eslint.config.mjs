import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  ...compat.config({
    env: { browser: true, es2020: true },
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
      // "react-app",
      "prettier"
    ],
    ignorePatterns: ["dist", "public", "node_modules"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react-hooks"],
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": ["off"],
      eqeqeq: ["error", "smart"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true
        }
      ],
      "default-param-last": "error",
      "max-nested-callbacks": ["error", 5],
      "max-depth": ["error", 4],
      "max-params": ["error", 5],
      semi: "error",
      "comma-dangle": ["error", "never"],
      "prettier/prettier": ["error", { trailingComma: "none" }]
    }
  })
];

export default eslintConfig;
