"use strict";

module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "env": {
    "es2021": true
  },
  "overrides": [
    {
      "files": ".eslintrc.js",
      "env": {
        "node": true
      }
    },
    {
      "files": "vite.config.js",
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": "*.jsx",
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "env": {
        "browser": true,
        "es2021": true
      }
    }
  ],
  "rules": {
    "react/boolean-prop-naming": [
      "error",
      {
        "message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
        "validateNested": true
      }
    ],
    "react/button-has-type": [
      "error",
      {
        "button": true,
        "reset": true,
        "submit": true
      }
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/hook-use-state": [
      "error"
    ],
    "react/iframe-missing-sandbox": [
      "error"
    ],
    "react/no-access-state-in-setstate": [
      "error"
    ],
    "react/no-adjacent-inline-elements": [
      "error"
    ],
    "react/no-array-index-key": [
      "error"
    ],
    "react/no-arrow-function-lifecycle": [
      "error"
    ],
    "react/no-children-prop": [
      "error",
      {
        "allowFunctions": false
      }
    ],
    "react/no-danger": [
      "error"
    ],
    "react/no-danger-with-children": [
      "error"
    ],
    "react/no-deprecated": [
      "error"
    ],
    "react/no-did-mount-set-state": [
      "error"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/no-direct-mutation-state": [
      "error"
    ],
    "react/no-find-dom-node": [
      "error"
    ],
    "react/no-invalid-html-attribute": [
      "error"
    ],
    "react/no-is-mounted": [
      "error"
    ],
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": false
      }
    ],
    "react/no-namespace": [
      "error"
    ],
    "react/no-redundant-should-component-update": [
      "error"
    ],
    "react/no-render-return-value": [
      "error"
    ],
    "react/no-set-state": [
      "off"
    ],
    "react/no-string-refs": [
      "error"
    ],
    "react/no-this-in-sfc": [
      "error"
    ],
    "react/no-typos": [
      "error"
    ],
    "react/no-unescaped-entities": [
      "error"
    ],
    "react/no-unknown-property": [
      "error"
    ],
    "react/no-unsafe": [
      "error",
      {
        "checkAliases": true
      }
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        "allowAsProps": false
      }
    ],
    "react/no-unused-class-component-methods": [
      "error"
    ],
    "react/no-unused-prop-types": [
      "error"
    ],
    "react/no-unused-state": [
      "error"
    ],
    "react/no-will-update-set-state": [
      "error"
    ],
    "react/prefer-es6-class": [
      "error"
    ],
    "react/prefer-read-only-props": [
      "error"
    ],
    "react/prefer-stateless-function": [
      "error",
      {
        "ignorePureComponents": false
      }
    ],
    "react/prop-types": [
      "error",
      {
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": [
      "error"
    ],
    "react/require-default-props": [
      "error"
    ],
    "react/require-optimization": [
      "error"
    ],
    "react/require-render-return": [
      "error"
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": [
      "error"
    ],
    "react/sort-prop-types": [
      "error"
    ],
    "react/state-in-constructor": [
      "error"
    ],
    "react/static-property-placement": [
      "error"
    ],
    "react/style-prop-object": [
      "error"
    ],
    "react/void-dom-elements-no-children": [
      "error"
    ],
    "react/jsx-boolean-value": [
      "error",
      "never"
    ],
    "react/jsx-child-element-spacing": [
      "error"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      "after-props"
    ],
    "react/jsx-closing-tag-location": [
      "error"
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never",
        "propElementValues": "always"
      }
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        "multiline": "require",
        "singleline": "forbid"
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never",
        "children": true
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [
      "error"
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/jsx-handler-names": [
      "error",
      {
        "eventHandlerPrefix": "on",
        "eventHandlerPropPrefix": "on",
        "checkLocalVariables": true,
        "checkInlineFunction": true
      }
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error",
      {
        "checkFragmentShorthand": true,
        "checkKeyMustBeforeSpread": true,
        "warnOnDuplicates": true
      }
    ],
    "react/jsx-newline": [
      "error",
      {
        "prevent": true
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreDOMComponents": false,
        "ignoreRefs": false,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "error"
    ],
    "react/jsx-no-constructed-context-values": [
      "error"
    ],
    "react/jsx-no-duplicate-props": [
      "error"
    ],
    "react/jsx-no-script-url": [
      "error"
    ],
    "react/jsx-no-target-blank": [
      "error",
      {
        "allowReferrer": false,
        "enforceDynamicLinks": "always",
        "warnOnSpreadAttributes": true,
        "links": true,
        "forms": true
      }
    ],
    "react/jsx-no-undef": [
      "error",
      {
        "allowGlobals": true
      }
    ],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        "allowExpressions": false
      }
    ],
    "react/jsx-one-expression-per-line": [
      "error",
      {
        "allow": "literal"
      }
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": false,
        "allowNamespace": true,
        "allowLeadingUnderscore": false

      }
    ],
    "react/jsx-props-no-multi-spaces": [
      "error"
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-react": [
      "error"
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react-hooks/exhaustive-deps": [
      "error"
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": false,
        "checkForEach": true
      }
    ],
    "constructor-super": [
      "error"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error",
      {
        "allowImplicit": false
      }
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "error"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-constant-condition": [
      "error",
      {
        "checkLoops": true
      }
    ],
    "no-constructor-return": [
      "error"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-dupe-else-if": [
      "error"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "error"
    ],
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-loss-of-precision": [
      "error"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-promise-executor-return": [
      "error"
    ],
    "no-prototype-builtins": [
      "error"
    ],
    "no-self-assign": [
      "error"
    ],
    "no-self-compare": [
      "error"
    ],
    "no-setter-return": [
      "error"
    ],
    "no-template-curly-in-string": [
      "error"
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-unexpected-multiline": [
      "error"
    ],
    "no-unmodified-loop-condition": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "no-unreachable-loop": [
      "error"
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "error",
      {
        "enforceForOrderingRelations": true
      }
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {
        "disallowArithmeticOperators": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "ignoreRestSiblings": false,
        "caughtErrors": "all"
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "no-useless-backreference": [
      "error"
    ],
    "require-atomic-updates": [
      "error"
    ],
    "use-isnan": [
      "error",
      {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
      }
    ],
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "error",
      {
        "setWithoutGet": true,
        "getWithoutSet": true,
        "enforceForClassMembers": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "block-scoped-var": [
      "error"
    ],
    "camelcase": [
      "error",
      {
        "properties": "always",
        "ignoreDestructuring": true,
        "ignoreImports": true,
        "ignoreGlobals": true
      }
    ],
    "class-methods-use-this": [
      "error",
      {
        "enforceForClassFields": true
      }
    ],
    "consistent-return": [
      "error",
      {
        "treatUndefinedAsUnspecified": true
      }
    ],
    "consistent-this": [
      "error",
      "that"
    ],
    "curly": [
      "error",
      "all"
    ],
    "default-case": [
      "error"
    ],
    "default-case-last": [
      "error"
    ],
    "default-param-last": [
      "error"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "func-name-matching": [
      "error",
      "always",
      {
        "considerPropertyDescriptor": true,
        "includeCommonJSModuleExports": true
      }
    ],
    "func-names": [
      "error",
      "as-needed",
      {
        "generators": "as-needed"
      }
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],
    "guard-for-in": [
      "error"
    ],
    "init-declarations": [
      "error",
      "always"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNew": true,
        "properties": true
      }
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-bitwise": [
      "error",
      {
        "int32Hint": false
      }
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true,
        "onlyOneSimpleParam": true
      }
    ],
    "no-delete-var": [
      "error"
    ],
    "no-div-regex": [
      "error"
    ],
    "no-else-return": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-empty-function": [
      "error"
    ],
    "no-eq-null": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "error"
    ],
    "no-extra-label": [
      "error"
    ],
    "no-extra-semi": [
      "error"
    ],
    "no-floating-decimal": [
      "error"
    ],
    "no-global-assign": [
      "error"
    ],
    "no-implicit-coercion": [
      "error"
    ],
    "no-implicit-globals": [
      "error",
      {
        "lexicalBindings": false
      }
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-invalid-this": [
      "error",
      {
        "capIsConstructor": true
      }
    ],
    "no-iterator": [
      "error"
    ],
    "no-label-var": [
      "error"
    ],
    "no-labels": [
      "error"
    ],
    "no-lone-blocks": [
      "error"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-loop-func": [
      "error"
    ],
    "no-mixed-operators": [
      "error"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-multi-str": [
      "error"
    ],
    "no-negated-condition": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-nonoctal-decimal-escape": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true
      }
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-proto": [
      "error"
    ],
    "no-redeclare": [
      "error"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-return-assign": [
      "error"
    ],
    "no-return-await": [
      "error"
    ],
    "no-script-url": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-shadow": [
      "error"
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-undefined": [
      "error"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "enforceInMethodNames": true
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": true
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        "enforceForJSX": true
      }
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-call": [
      "error"
    ],
    "no-useless-catch": [
      "error"
    ],
    "no-useless-computed-key": [
      "error",
      {
        "enforceForClassMembers": true
      }
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-useless-rename": [
      "error"
    ],
    "no-useless-return": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "no-void": [
      "error",
      {
        "allowAsStatement": false
      }
    ],
    "no-with": [
      "error"
    ],
    "object-shorthand": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": false
      }
    ],
    "prefer-const": [
      "error"
    ],
    "prefer-destructuring": [
      "error"
    ],
    "prefer-exponentiation-operator": [
      "error"
    ],
    "prefer-named-capture-group": [
      "error"
    ],
    "prefer-numeric-literals": [
      "error"
    ],
    "prefer-object-spread": [
      "error"
    ],
    "prefer-promise-reject-errors": [
      "error"
    ],
    "prefer-regex-literals": [
      "error"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "error"
    ],
    "quote-props": [
      "error",
      "always"
    ],
    "radix": [
      "error",
      "always"
    ],
    "require-await": [
      "error"
    ],
    "require-unicode-regexp": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "strict": [
      "error",
      "global"
    ],
    "symbol-description": [
      "error"
    ],
    "vars-on-top": [
      "error"
    ],
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true,
        "anonymous": "neither",
        "method": "before"
      }
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "indent": [
      "error",
      2
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-parens": [
      "error",
      "always"
    ],
    "no-mixed-spaces-and-tabs": [
      "error"
    ],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    "no-tabs": [
      "error",
      {
        "allowIndentationTabs": false
      }
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": false,
        "ignoreComments": true
      }
    ],
    "no-whitespace-before-property": [
      "error"
    ],
    "nonblock-statement-body-position": [
      "error",
      "beside"
    ],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "operator-linebreak": [
      "error",
      "none"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "wrap-iife": [
      "error",
      "inside"
    ],
    "yield-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ]
  }
};
