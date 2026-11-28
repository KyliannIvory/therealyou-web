import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import stylistic from "@stylistic/eslint-plugin";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Types explicites : chaque fonction déclare son type de retour
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowTypedFunctionExpressions: true, allowExpressions: false },
      ],
      // Pas de `any` : il désactive la vérification des types
      "@typescript-eslint/no-explicit-any": "error",
      // `import { type X }` pour les imports qui ne sont que des types
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      // Variables et imports inutilisés (préfixe _ pour ignorer volontairement)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  {
    rules: {
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    },
  },

  // Désactive les règles de mise en forme, gérées par Prettier
  prettier,

  // Après Prettier, qui désactive max-len : aucune ligne ne dépasse 100 caractères,
  // chaînes comprises (les longues listes de classes se découpent avec cn())
  {
    plugins: { "@stylistic": stylistic },
    rules: {
      "@stylistic/max-len": [
        "error",
        { code: 100, tabWidth: 2, ignoreUrls: true, ignoreRegExpLiterals: true },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
