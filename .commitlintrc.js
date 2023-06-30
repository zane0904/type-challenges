// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'deps',
        'assets',
        'easy'
      ]
    ]
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixesSelect: '选择关联issue前缀（可选）:',
      // customFooterPrefix: '输入自定义issue前缀 :',
      // footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      // confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'medium', name: 'medium:     中等 ✨ A new feature' },
      { value: 'easy', name: 'easy:     简单 ✨ A new feature' },
      { value: 'hard', name: 'hard:     困难 ✨ A new feature' },
      { value: 'extreme', name: 'extreme:     地域 ✨ A new feature' },
      { value: 'fix', name: 'fix:      修复缺陷 🐛 A bug fix' },
      { value: 'docs', name: 'docs:     文档更新 📝 Documentation only changes' },
      {
        value: 'style',
        name: 'style:    代码格式 💄 Changes that do not affect the meaning of the code'
      },
      { value: 'revert', name: 'revert:   回退代码 ⏪️ Revert to a commit' },
      {
        value: 'chore',
        name: 'chore:    其他修改 🔨 Other changes that do not modify src or test files'
      }
    ],
    useEmoji: false,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    // defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
