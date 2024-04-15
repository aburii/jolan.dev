/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  root: true,
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off"
  }
}
