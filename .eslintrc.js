module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "prettier/prettier": "off",
    "max-len": [1, { "code": 80 }],
    curly: [2, "multi-or-nest", "consistent"]
  }
};
