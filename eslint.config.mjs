import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add a rules property to disable specific rules
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable the no-explicit-any rule
      // Add other rules you want to configure here
    },
  },
];

export default eslintConfig;