---
id: react-email
name: React Email
urls:
  home: https://react.email
  repository: https://github.com/resend/react-email
  docs: https://react.email/docs/introduction
category:
  - email
description: Email templating framework that builds HTML emails from React components.
status: active
maintainer: Plus Five Five, Inc.
maintainerType: company
firstRelease: 2022
language: javascript
runtime:
  - node
runtimeMin: node 20
basedOn:
  - react
templating: jsx
i18n: yes
runsAs:
  - local
installMethod: npm, npm create
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-11-13
githubStargazers: 19940
npmWeeklyDownloads: 7951705
contributors: 238
ecosystemsMonthlyDownloads: 27823224
dependentRepos: 134
dependentPackages: 19
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://react.email/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/resend/react-email
    checkedAt: 2026-11-16
  - field: urls
    url: https://react.email/docs/introduction
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/resend/react-email/canary/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://react.email/docs/introduction
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/resend/react-email/canary/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/resend/react-email
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/resend/react-email/react-email@6.11.13/packages/react-email/package.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/resend/react-email/react-email@6.11.13/packages/react-email/package.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://react.email/docs/cli
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/resend/react-email/canary/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://react.email/docs/getting-started/automatic-setup
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/resend/react-email/canary/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/resend/react-email/canary/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/react-email
    checkedAt: 2026-11-16
  - field: i18n
    url: https://react.email/docs/guides/internationalization
    checkedAt: 2026-11-16
  - field: templating
    url: https://react.email/docs/getting-started/migrating-to-react-email
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/react-email
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/react-email
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/resend/react-email
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/resend/react-email/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/react-email
    checkedAt: 2026-11-16
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-email
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-email
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-email
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
renderingModes: null
packagistDownloads: null
---

React Email is an email templating framework: emails are written as React components with TypeScript or JSX and rendered to HTML or plain text, which any email service can then send. A command-line tool starts a local development server that rebuilds a template as its files change.

The repository is a monorepo. The react-email package is the one the install instructions name, and the components, the editor and the create-email scaffolder ship from the same repository. The editor is built on TipTap and ProseMirror. The docs include a guide to translating templates with next-intl and a migration page for moving from MJML.

## Worth knowing

The docs describe deploying the preview server to Vercel, which hosts the template preview, not the emails. The separate @react-email/components package is marked deprecated on npm.
