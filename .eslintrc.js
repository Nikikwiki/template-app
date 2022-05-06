module.exports = {
    "globals": {
        "_": true,
        "__PRODUCTION__": true,
        "__DEVELOPMENT__": true,
        "__ENV__": true,
        "__USE_REDUX_LOGGER__": true,
        "JSX": true,
        "Nullable": true,
        "NodeJS": true
    },
    "ignorePatterns": ["**/*.js"],
    extends: [
        'airbnb',
        'airbnb-typescript'
    ],
    parserOptions: {
        'ecmaVersion': 7,
        'sourceType': "module",
        project: './tsconfig.eslint.json'
    },
    "plugins": [
        "jsx-a11y"
    ],
    "settings": {
        "import/resolver": {
            "node": {},
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
    rules: {
        "implicit-arrow-linebreak": "off",
        "linebreak-style": "off",
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "off",
            "as-needed",
            {
                "requireForBlockBody": false
            }
        ],
        "arrow-body-style": "off",
        "no-continue": "off",
        "no-bitwise": "off",
        "camelcase": "off",
        "consistent-return": "error",
        "class-methods-use-this": "off",
        "dot-notation": "off",
        "semi": "error",
        "multiline-ternary": "off",
        "no-else-return": "off",
        "no-nested-ternary": "error",
        "no-undef": "error",
        "no-dupe-keys": "error",
        "no-dupe-args": "error",
        "no-duplicate-case": "error",
        "no-unused-vars": "off",
        "no-constant-condition": "error",
        "no-empty": "warn",
        "no-useless-escape": "warn",
        "no-useless-constructor": "off",
        "no-loop-func": "warn",
        "no-console": "off",
        "no-debugger": "warn",
        "no-alert": "warn",
        "no-underscore-dangle": "off",
        "no-sequences": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/naming-convention": "off",
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-lonely-if": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "@typescript-eslint/no-useless-constructor": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "ImportDeclaration": "first",
                "SwitchCase": 1
            }
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                "checkAttributes": false
            }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "lines-between-class-members": "off",
        "radix": "off",
        "quote-props": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": "off",
        "react/jsx-fragments": "off",
        "react/jsx-boolean-value": [
            "error",
            "never",
            {
                "always": [
                    "show",
                    "hide",
                    "isOpen"
                ]
            }
        ],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": false
            }
        ],
        "react/prefer-stateless-function": [
            "off"
        ],
        "react/prefer-es6-class": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-quotes": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "comma-dangle": [
            "error",
            "never"
        ],
        "react/no-unused-state": "warn",
        "prefer-const": "off",
        "object-curly-newline": [
            "error",
            {
                "minProperties": 5,
                "consistent": true
            }
        ],
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreTrailingComments": true
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-unresolved": "off",
        "no-unreachable": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error"
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    }
}