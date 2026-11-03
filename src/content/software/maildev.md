---
id: maildev
name: MailDev
urls:
  home: https://maildev.github.io/maildev/
  repository: https://github.com/maildev/maildev
  docs: https://maildev.github.io/maildev/docs/
category:
  - dev-tool
  - email
description: Local SMTP server with a web inbox for viewing and testing email during development, written in TypeScript.
status: active
maintainer: Dan Farrelly
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
runtimeMin: node 20
headlessApi:
  - rest
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-09-23
githubStargazers: 6156
npmWeeklyDownloads: 67858
contributors: 82
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/maildev/maildev
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/maildev/maildev/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/maildev/maildev/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: language
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/maildev/maildev/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/maildev/maildev/blob/maildev@3.0.0/package.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://maildev.github.io/maildev/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/maildev/maildev/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: license
    url: https://maildev.github.io/maildev/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/maildev/maildev
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/maildev/maildev/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/maildev/maildev/releases/tag/maildev@3.0.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/maildev/maildev/releases/tag/maildev@3.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/maildev/maildev
    checkedAt: 2026-11-03
  - field: urls
    url: https://maildev.github.io/maildev/docs/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://maildev.github.io/maildev/docs/reference/rest-api/
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/maildev
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/maildev/maildev/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

MailDev is a local SMTP server with a web inbox for testing the email a project generates during development. It catches the mail an application sends and shows each message in the browser, and it can relay selected messages to an outgoing SMTP server. A [REST API](https://maildev.github.io/maildev/docs/reference/rest-api/) serves the stored mail as JSON. It is written in TypeScript and runs on Node.js, installed with npm, started with npx or run from its Docker image. Its documentation includes a comparison with MailCatcher.

## Worth knowing

The project describes MailDev as a development tool that runs on a developer's machine, not on a live site.
