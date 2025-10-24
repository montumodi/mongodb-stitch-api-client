const globals = require("globals");

module.exports = [
  {
    files: ["src/**/*.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2017
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      // Possible Errors
      "comma-dangle": [2, "never"],
      "getter-return": 2,
      "no-async-promise-executor": 2,
      "no-await-in-loop": 2,
      "no-compare-neg-zero": 2,
      "no-cond-assign": 2,
      "no-console": 2,
      "no-constant-condition": 2,
      "no-control-regex": 2,
      "no-debugger": 2,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty-character-class": 2,
      "no-empty": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-parens": 0,
      "no-extra-semi": 2,
      "no-func-assign": 2,
      "no-inner-declarations": [2, "functions"],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-obj-calls": 2,
      "no-regex-spaces": 2,
      "no-sparse-arrays": 0,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-typeof": 2,
      "no-unexpected-multiline": 2,

      // Best Practices
      "accessor-pairs": 2,
      "block-scoped-var": 0,
      "complexity": [1, 9],
      "consistent-return": 1,
      "curly": [2, "all"],
      "default-case": 0,
      "dot-notation": 2,
      "dot-location": [2, "property"],
      "eqeqeq": 2,
      "guard-for-in": 2,
      "no-alert": 2,
      "no-caller": 2,
      "no-div-regex": 2,
      "no-else-return": 2,
      "no-eq-null": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-floating-decimal": 2,
      "no-implicit-coercion": 2,
      "no-implied-eval": 2,
      "no-invalid-this": 2,
      "no-iterator": 2,
      "no-labels": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 2,
      "no-multi-spaces": [
        2,
        {
          ignoreEOLComments: true
        }
      ],
      "no-multi-str": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-new": 2,
      "no-octal-escape": 2,
      "no-octal": 2,
      "no-param-reassign": 2,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-return-assign": 2,
      "no-script-url": 2,
      "no-self-assign": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 0,
      "no-useless-call": 2,
      "no-void": 2,
      "no-warning-comments": 0,
      "no-with": 2,
      "radix": 2,
      "vars-on-top": 2,
      "wrap-iife": 2,
      "yoda": 2,

      // Strict Mode
      "strict": [2, "global"],

      // Variables
      "init-declarations": 0,
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 2,
      "no-undef-init": 2,
      "no-undef": 2,
      "no-undefined": 0,
      "no-unused-vars": 2,
      "no-use-before-define": 2,

      // Node.js
      "callback-return": 2,
      "global-require": 2,
      "handle-callback-err": 2,
      "no-mixed-requires": 2,
      "no-new-require": 2,
      "no-path-concat": 2,
      "no-process-exit": 2,
      "no-restricted-modules": 2,
      "no-buffer-constructor": 2,

      // Stylistic Issues
      "array-bracket-spacing": 2,
      "brace-style": 2,
      "camelcase": 2,
      "comma-spacing": 2,
      "comma-style": 2,
      "computed-property-spacing": 2,
      "consistent-this": 2,
      "eol-last": 2,
      "func-names": 0,
      "func-style": [2, "declaration"],
      "id-length": [
        2,
        {
          min: 2,
          max: 70,
          exceptions: ["i", "j", "k", "n", "Q", "_"]
        }
      ],
      "id-match": 0,
      "indent": [
        2,
        2,
        {
          SwitchCase: 1
        }
      ],
      "key-spacing": 2,
      "linebreak-style": 2,
      "max-nested-callbacks": [2, 6],
      "max-statements-per-line": [
        2,
        {
          max: 1
        }
      ],
      "new-cap": 0,
      "new-parens": 2,
      "newline-after-var": 0,
      "no-array-constructor": 2,
      "no-continue": 2,
      "no-inline-comments": 0,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-multiple-empty-lines": [
        2,
        {
          max: 2,
          maxEOF: 1,
          maxBOF: 0
        }
      ],
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-ternary": 0,
      "no-trailing-spaces": 2,
      "no-underscore-dangle": 0,
      "no-unneeded-ternary": 2,
      "object-curly-spacing": 2,
      "one-var": [1, "never"],
      "operator-assignment": [2, "always"],
      "operator-linebreak": 2,
      "padded-blocks": 0,
      "quote-props": 2,
      "quotes": [2, "double"],
      "semi-spacing": 2,
      "semi": 2,
      "sort-vars": 0,
      "keyword-spacing": 2,
      "space-before-blocks": 2,
      "space-before-function-paren": [
        2,
        {
          anonymous: "always",
          named: "never"
        }
      ],
      "space-in-parens": 2,
      "space-infix-ops": 2,
      "space-unary-ops": 2,
      "spaced-comment": 2,
      "wrap-regex": 2,

      // ECMAScript 6
      "arrow-parens": [2, "as-needed"],
      "arrow-spacing": 2,
      "constructor-super": 2,
      "generator-star-spacing": 2,
      "no-class-assign": 2,
      "no-const-assign": 2,
      "no-this-before-super": 2,
      "no-var": 2,
      "object-shorthand": [2, "methods"],
      "prefer-const": 2,
      "prefer-spread": 2,
      "require-yield": 2,
      "prefer-template": 2
    }
  }
];
