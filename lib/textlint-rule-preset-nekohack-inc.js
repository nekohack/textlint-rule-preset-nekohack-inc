const { moduleInterop } = require('@textlint/module-interop')
const presetJaSpacing = moduleInterop(require('textlint-rule-preset-ja-spacing')).rules

module.exports = {
  rules: {
    'ja-no-space-around-parentheses': presetJaSpacing['ja-no-space-around-parentheses'],
    'ja-no-space-between-full-width': presetJaSpacing['ja-no-space-between-full-width'],
    'ja-space-between-half-and-full-width': presetJaSpacing['ja-space-between-half-and-full-width'],
    'ja-space-around-code': presetJaSpacing['ja-space-around-code'],
    'no-mix-dearu-desumasu': moduleInterop(require('textlint-rule-no-mix-dearu-desumasu'))
  },
  rulesConfig: {
    'ja-no-space-around-parentheses': true,
    'ja-no-space-between-full-width': true,
    'ja-space-between-half-and-full-width': {
      space: 'always'
    },
    'ja-space-around-code': {
      before: true,
      after: true
    },
    'no-mix-dearu-desumasu': {
      preferInHeader: '',
      preferInBody: 'ですます',
      preferInList: 'ですます',
      strict: true
    }
  }
}
