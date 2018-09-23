module.exports = {
  extends: 'airbnb',
  rules: {
    'indent':[2,2],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent':[2,2]
  },
  env: {
    browser: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
  },
};
// module.exports = {
//     extends: "airbnb",
//     extends: "eslint:recommended",
//     parserOptions: {
//       ecmaVersion: 6,
//       sourceType: "module"
//     },
//     env: {
//       "shared-node-browser": true,
//       commonjs: true,
//       node: true
//     }
//   };
