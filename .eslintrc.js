// eslint配置
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'standard',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', '@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    env: {
      es6: true,
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    // project: ['./tsconfig.json', './config-overrides.js'],
  },
  rules: {
    // 关闭 prop-types 检查，因为ts已经提供了类型检查
    'react/prop-types': 'off',
    // 下面一条是一个有点让人蛋疼的规则，接口名称要么全部以 I 开头，要么一个都不许以 I 开头
    // 权衡之下，选择了默认的全部不以 I 开头
    // '@typescript-eslint/interface-name-prefix': [
    //   'warn',
    //   { prefixWithI: 'always' },
    // ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
      // Wiz TODO eslint-plugin-react It will default to "detect" in the future
    },
  },
}
