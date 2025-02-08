// @ts-check
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import n from 'eslint-plugin-n';
import globals from 'globals';

import { withNuxt } from './.nuxt/eslint.config.mjs';

const js_exts = Object.freeze(['.cjs', '.js', '.mjs']);
const ts_exts = Object.freeze(['.cts', '.ts', '.mts']);
const vue_exts = Object.freeze(['.vue']);
const exts = [...js_exts, ...ts_exts, ...vue_exts];

const __dirname = import.meta.dirname;

const server_files = [
  '*.config.*',
  ...[
    'bin',
    'modules',
    'server',
  ].flatMap((dir) => exts.map((ext) => `${dir}/**/*${ext}`)),
];

const client_files = [
  'components',
  'composables',
  'layouts',
  'pages',
].flatMap((dir) => exts.map((ext) => `${dir}/**/*${ext}`));

/* eslint-disable sort-keys -- the keys in here have a logical order that isn't always alphabetical */
export default withNuxt()
  .prepend(
    comments.recommended,
    n.configs['flat/recommended'],
  )
  .insertBefore('@eslint-community/eslint-comments/recommended', [
    /**
     * ------------------------------------------------------------------------------
     * Additional ESLint configuration
     * https://eslint.org/docs/latest/use/configure/configuration-files
     */
    {
      ignores: [
        'node_modules/**/*',
        '.nuxt/**/*',
        '.output/**/*',
        'dist/**/*',
        'TEMPLATE.vue',
      ],
    },
    {
      name: 'global/files',
      files: [
        ...server_files,
        ...client_files,
      ],
    },
    {
      name: 'global/configuration',
      languageOptions: {
        globals: {
          ...globals.builtin,
          ...globals.browser,
          ...globals.node,
        },
        parserOptions: {
          projectService: true,
          tsconfigRootDir: __dirname,
        },
      },
      settings: {
        'import-x/resolver': {
          'eslint-import-resolver-custom-alias': {
            alias: {
              // Import alias to the root directory of the project
              '@': './',
            },
            extensions: exts,
          },
        },
      },
    },
  ])
  .insertBefore('nuxt/javascript', {
    /**
     * I'm unsure where the `node / n` plugin gets loaded, but this rule
     * has trouble finding many of the existing server-side deps, so it'll
     * be easier to just disable it for now.
     */
    rules: {
      'n/no-missing-import': 'off',
    },
  })
  .override('nuxt/javascript', {
    /**
     * ------------------------------------------------------------------------------
     * Base ESLint rule customization
     * https://eslint.org/docs/latest/rules/
     */
    name: 'nuxt/javascript | customized',
    rules: {
      'arrow-body-style': [
        'error',
        'as-needed',
      ],
      'constructor-super': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': [
        'error',
        { allowKeywords: true },
      ],
      eqeqeq: [
        'error',
        'always',
      ],
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
      ],
      'new-cap': 'off',
      'no-alert': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-plusplus': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': 'error',
      'no-self-assign': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'off',
      'no-undef': 'off',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-computed-key': [
        'error',
        {
          enforceForClassMembers: true,
        },
      ],
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
        },
      ],
      'one-var': ['error', 'never'],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
        },
      ],
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
      'sort-imports': 'off',
      'sort-keys': [
        'warn',
        'asc',
        {
          allowLineSeparatedGroups: true,
          caseSensitive: true,
          minKeys: 2,
          natural: true,
        },
      ],
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  })
  .override('nuxt/typescript/rules', {
    /**
     * ------------------------------------------------------------------------------
     * TypeScript rule customization
     * https://typescript-eslint.io/rules
     */
    name: 'nuxt/typescript/rules | customized',
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/method-signature-style': [
        'error',
        'property',
      ],
      '@typescript-eslint/naming-convention': [
        'error',

        // By default, require no specific naming format
        {
          format: null,
          leadingUnderscore: 'allowSingleOrDouble',
          selector: 'default',
          trailingUnderscore: 'allowSingleOrDouble',
        },

        // Require variables to be in `snake_case`
        {
          format: ['snake_case', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          selector: 'variable',
          trailingUnderscore: 'allowSingleOrDouble',
        },

        // Special condition for ignoring destructured variables
        {
          format: null,
          leadingUnderscore: 'allowSingleOrDouble',
          modifiers: ['destructured'],
          selector: 'variable',
          trailingUnderscore: 'allowSingleOrDouble',
        },

        // Special condition for using composable variables (i.e. `useComposable`) in `camelCase`
        {
          filter: {
            match: true,
            regex: 'use[A-Z]+',
          },
          format: ['camelCase'],
          selector: 'variable',
        },

        // Special condition for destructured `toggle` variables (i.e. `toggleX`) in `camelCase`
        {
          filter: {
            match: true,
            regex: 'toggle[A-Z]+',
          },
          format: ['camelCase'],
          selector: 'variable',
        },

        // Require functions to be in `camelCase`
        {
          format: ['camelCase'],
          leadingUnderscore: 'allowSingleOrDouble',
          selector: 'function',
          trailingUnderscore: 'allowSingleOrDouble',
        },

        // Require types to be in `PascalCase`
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
      ],
      '@typescript-eslint/no-array-delete': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          builtinGlobals: false,
          ignoreFunctionTypeParameterNameValueShadow: false,
          ignoreOnInitialization: true,
          ignoreTypeValueShadow: false,
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: 'props|^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          ignorePrimitives: {
            string: true,
          },
        },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/promise-function-async': 'error',
    },
  })
  .override('nuxt/stylistic', {
    /**
     * ------------------------------------------------------------------------------
     * ESLint Stylistic rule customization
     * https://eslint.style/rules
     */
    name: 'nuxt/stylistic | customized',
    rules: {
      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],
      '@stylistic/arrow-parens': [
        'error',
        'always',
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          enums: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          generics: 'always-multiline',
          imports: 'always-multiline',
          objects: 'always-multiline',
          tuples: 'always-multiline',
        },
      ],
      '@stylistic/comma-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/comma-style': [
        'error',
        'last',
      ],
      '@stylistic/eol-last': [
        'error',
        'always',
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'multiline',
      ],
      '@stylistic/indent': [
        'error',
        2,
      ],
      '@stylistic/key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false,
          mode: 'strict',
        },
      ],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          ignoreComments: false,
          ignorePattern: '<path|d=', // ignore SVG data
          ignoreRegExpLiterals: true,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreUrls: true,
        },
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          multilineDetection: 'brackets',
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
        },
      ],
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
      ],
      '@stylistic/quote-props': [
        'error',
        'as-needed',
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      '@stylistic/semi': [
        'error',
        'always',
      ],
      '@stylistic/semi-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/semi-style': [
        'error',
        'last',
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          block: {
            markers: [
              '/',
              '*',
              '--',
            ],
          },
        },
      ],
    },
  })
  .override('@eslint-community/eslint-comments/recommended', {
    /**
     * ------------------------------------------------------------------------------
     * Directive comments rule customization
     * https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/
     */
    name: '@eslint-community/eslint-comments/recommended | customized',
    rules: {
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/require-description': [
        'error',
        {
          ignore: ['eslint-enable'],
        },
      ],
    },
  })
  .override('nuxt/import/rules', {
    /**
     * ------------------------------------------------------------------------------
     * Import rule customization
     * https://github.com/un-ts/eslint-plugin-import-x#rules
     */
    name: 'nuxt/import/rules | customized',
    rules: {
      'import/consistent-type-specifier-style': [
        'error',
        'prefer-top-level',
      ],
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          '': 'never',
        },
      ],
      'import/first': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/newline-after-import': [
        'error',
        {
          considerComments: true,
          count: 1,
        },
      ],
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-anonymous-default-export': [
        'error',
        {
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowArray: true,
          allowArrowFunction: false,
          allowLiteral: true,
          allowObject: true,
        },
      ],
      'import/no-commonjs': 'error',
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-namespace': 'error',
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '@nuxt/kit',
          ],
        },
      ],
      'import/no-webpack-loader-syntax': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
            orderImportKind: 'asc',
          },
          distinctGroup: true,
          groups: [
            // Do not change this order!
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'unknown',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'builtin',
              pattern: '**/*.{css,json,svg,svg?raw}',
              patternOptions: { dot: true, nocomment: true },
              position: 'before',
            },
          ],
          warnOnUnassignedImports: true,
        },
      ],
    },
  })
  .override('nuxt/tooling/unicorn', {
    /**
     * ------------------------------------------------------------------------------
     * Unicorn rule customization
     * https://github.com/sindresorhus/eslint-plugin-unicorn#rules
     */
    name: 'nuxt/tooling/unicorn | customized',
    rules: {
      'unicorn/custom-error-definition': 'error',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/error-message': 'error',
      'unicorn/explicit-length-check': [
        'error',
        {
          'non-zero': 'greater-than',
        },
      ],
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-length-as-slice-end': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-switch-case': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/numeric-separators-style': [
        'warn',
        {
          binary: {
            groupLength: 4,
            minimumDigits: 0,
          },
          hexadecimal: {
            groupLength: 2,
            minimumDigits: 0,
          },
          number: {
            groupLength: 3,
            minimumDigits: 6,
          },
          octal: {
            groupLength: 4,
            minimumDigits: 0,
          },
          onlyIfContainsSeparator: false,
        },
      ],
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-default-parameters': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-native-coercion-functions': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': [
        'error',
        {
          checkInfinity: true,
          checkNaN: true,
        },
      ],
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-set-size': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-raw': 'error',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-structured-clone': 'error',
      'unicorn/prefer-switch': [
        'error',
        {
          emptyDefaultCase: 'do-nothing-comment',
          minimumCases: 3,
        },
      ],
      'unicorn/prefer-type-error': 'error',
      'unicorn/relative-url-style': [
        'error',
        'always', // always require the `./` prefix for explicitness
      ],
      'unicorn/require-array-join-separator': 'error',
      'unicorn/require-number-to-fixed-digits-argument': 'error',
      'unicorn/template-indent': 'error',
      'unicorn/text-encoding-identifier-case': 'error',
      'unicorn/throw-new-error': 'error',
    },
  })
  .override('nuxt/vue/rules', {
    /**
     * ------------------------------------------------------------------------------
     * Vue.js rule customization
     * https://eslint.vuejs.org/rules/
     */
    name: 'nuxt/vue/rules | customized',
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/comment-directive': ['error', {
        reportUnusedDisableDirectives: true,
      }],
      'vue/html-quotes': ['error', 'single', { avoidEscape: true }],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            component: 'always',
            normal: 'any',
            void: 'never',
          },
          math: 'always',
          svg: 'always',
        },
      ],
      'vue/prop-name-casing': 'off',
      'vue/require-default-prop': 'error',
      'vue/v-on-event-hyphenation': ['error', 'never'],
    },
  })
  .insertAfter('nuxt/import-globals', {
    /**
     * ------------------------------------------------------------------------------
     * Server-specific rule customization
     * ------------------------------------------------------------------------------
     */
    name: 'server/rules',
    files: server_files,
    rules: {
      /**
       * ------------------------------------------------------------------------------
       * Node.js standards rule customization
       * https://github.com/eslint-community/eslint-plugin-n#-rules
       * (All Node-based rules should only apply to the server files)
       */
      'n/callback-return': ['error', ['callback', 'cb']],
      'n/handle-callback-err': ['error', '^.*(e|E)rr'],
      'n/no-callback-literal': 'error',
      'n/no-extraneous-import': [
        'error',
        {
          allowModules: ['tailwindcss'],
        },
      ],
      'n/no-path-concat': 'error',
      'n/no-process-exit': 'off',
      'n/prefer-global/console': ['error', 'always'],
      'n/prefer-global/process': ['error', 'always'],
      'n/prefer-node-protocol': 'error',

      'unicorn/no-process-exit': 'off', // We want our non-browser scripts to be able to exit at-will
    },
  })
  .insertAfter('server/rules', {
    /**
     * ------------------------------------------------------------------------------
     * Client-specific rule customization
     * ------------------------------------------------------------------------------
     */
    name: 'client/rules',
    files: client_files,
    rules: {
      'import/no-nodejs-modules': 'error',
      'n/callback-return': 'off',
      'n/handle-callback-err': 'off',
      'n/no-callback-literal': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-path-concat': 'off',
      'n/no-process-exit': 'off',
      'n/prefer-global/console': 'off',
      'n/prefer-global/process': 'off',
      'n/prefer-node-protocol': 'off',
      'unicorn/no-document-cookie': 'error',
      'unicorn/no-invalid-fetch-options': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
    },
  });
/* eslint-enable sort-keys */
