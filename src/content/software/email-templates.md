---
id: email-templates
name: Email Templates
urls:
  repository: https://github.com/forwardemail/email-templates
category:
  - email
description: Node.js library for creating, previewing and sending custom email templates.
status: active
maintainer: Nick Baugh
firstRelease: 2012
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
templating: pug, ejs, handlebars, nunjucks
i18n: yes
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2025-12-31
githubStargazers: 3743
npmWeeklyDownloads: 158498
contributors: 20
dependentRepos: 2368
dependentPackages: 234
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/forwardemail/email-templates
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://registry.npmjs.org/email-templates
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/forwardemail/email-templates/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/forwardemail/email-templates
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/forwardemail/email-templates/blob/v13.0.1/package.json
    checkedAt: 2026-11-08
  - field: templating
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: templating
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: templating
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: i18n
    url: https://github.com/forwardemail/email-templates/blob/master/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://api.github.com/repos/forwardemail/email-templates
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/forwardemail/email-templates/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://github.com/forwardemail/email-templates/releases/tag/v13.0.1
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://github.com/forwardemail/email-templates/releases/tag/v13.0.1
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/email-templates
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/forwardemail/email-templates
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/forwardemail/email-templates/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/email-templates
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/email-templates
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
renderingModes: null
packagistDownloads: null
---

Email Templates is a Node.js library for creating, previewing and sending email templates. Each message is a folder of template files: one for the HTML body, one for the subject and an optional one for plain text. The default engine is Pug, and the README names EJS as another option. The library renders the templates with the values passed in, inlines the CSS of linked stylesheets and returns the result for sending or rendering.

Sending goes through a Nodemailer transport, and the library can also stop after rendering. Localization uses an i18n configuration object that is passed to the library.

## Worth knowing

Preview is an optional dependency. It opens rendered emails in a browser or the iOS Simulator during development, and the README treats it as a development aid. The README recommends Forward Email as the transport, a separate service the user chooses.
