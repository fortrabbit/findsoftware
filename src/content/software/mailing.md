---
id: mailing
name: Mailing
urls:
  home: https://www.mailing.run
  repository: https://github.com/sofn-xyz/mailing
  docs: https://www.mailing.run/docs
category:
  - email
description: Tool for building, testing and sending emails with React components.
status: active
maintainer: Peter Sugihara
firstRelease: 2022
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 16
databases:
  - postgres
headlessApi:
  - rest
templating: react
installMethod: npm
licenseModel: open-core
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-10
githubStargazers: 3604
npmWeeklyDownloads: 3257
contributors: 19
dependentRepos: 48
dependentPackages: 2
social:
  discord: https://discord.gg/fdSzmY46wY
  forum: https://github.com/sofn-xyz/mailing/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/sofn-xyz/mailing
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sofn-xyz/mailing
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/sofn-xyz/mailing/blob/main/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/sofn-xyz/mailing/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/sofn-xyz/mailing/blob/main/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/sofn-xyz/mailing/blob/main/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: templating
    url: https://github.com/sofn-xyz/mailing/blob/main/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/sofn-xyz/mailing/blob/mailing@1.2.0/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/sofn-xyz/mailing/blob/mailing@1.2.0/packages/cli/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.mailing.run/docs
    checkedAt: 2026-11-16
  - field: headlessApi
    url: https://www.mailing.run/docs/rest-api
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.mailing.run/docs/deploy
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/sofn-xyz/mailing/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/mailing/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/mailing
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/mailing
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sofn-xyz/mailing
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sofn-xyz/mailing/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/mailing
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mailing
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mailing
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Mailing is a tool for building, testing and sending emails with React. Templates are React components that render to HTML, a preview server with live reload shows them during development, and a send call delivers the rendered HTML through nodemailer's SMTP transport by default, as the [docs](https://www.mailing.run/docs) describe. A REST API lets apps written in other languages render and send emails.

## Worth knowing

Mailing Platform is the edition with paid features. The docs describe it as still open source and self-hosted, and it needs a deployment, a Postgres database and an API key. Lists with unsubscribe links are part of it. The README says Mailing runs on Mac or Linux and that Windows is not supported at this time.
