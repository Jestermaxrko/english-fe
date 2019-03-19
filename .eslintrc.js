module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint", 
  "plugins": [
      "react",
      "react-hooks"
  ],
  "globals": {
      "$": true,
      "process": true,
      "global": true,
      "module": true,
      "angular": true,
      "moment": true
  },
  "rules": {
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "indent": [
          "warn",
          2,
          {"SwitchCase": 1}
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "react-hooks/rules-of-hooks": "error"
  }
};
