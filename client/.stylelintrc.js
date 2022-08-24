module.exports = {
  extends: [ "stylelint-config-standard","stylelint-config-rational-order"],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties", 
    "stylelint-prettier"
  ],
  extends: "stylelint-config-standard-scss",
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "string-quotes": "single",
    'scss/at-import-partial-extension': ['always', , { "except": ["scss"] }]
  }
};