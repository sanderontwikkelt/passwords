module.exports = {
  extends: 'airbnb-typescript-prettier',
  env: {
    jest: true,
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    'react/no-unused-prop-types': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'no-console': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: [],
};
