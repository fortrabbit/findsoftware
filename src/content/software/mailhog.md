---
id: mailhog
name: MailHog
urls:
  repository: https://github.com/mailhog/MailHog
  docs: https://github.com/mailhog/MailHog/blob/master/README.md
category:
  - dev-tool
description: Email testing tool for developers that captures SMTP mail and shows it in a web interface with a JSON API.
status: stub
maintainer: Ian Kent
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mongodb
adminUi: true
runsAs:
  - local
  - always-on
installMethod: homebrew
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-08-11
githubStargazers: 16198
contributors: 37
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/mailhog/MailHog
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/mailhog/MailHog
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/mailhog/MailHog
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/mailhog/MailHog/releases/tag/v1.0.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/mailhog/MailHog/releases/tag/v1.0.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/mailhog/MailHog/releases/tag/0.01
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mailhog/MailHog
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mailhog/MailHog
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/mailhog/MailHog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/mailhog/MailHog/blob/master/docs/DEPLOY.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/mailhog/MailHog/blob/master/docs/DEPLOY.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MailHog is an email testing tool for developers. It is a Go program that runs an SMTP server with a web interface for viewing captured messages and an HTTP API. The [README](https://github.com/mailhog/MailHog/blob/master/README.md) lists installs through Homebrew, go install, FreeBSD packages, Docker and release binaries, and its overview says applications are configured to use MailHog for SMTP delivery. The deployment guide says it can run locally from the command line or be started as a daemon. The README names MongoDB and file-based storage as options for keeping captured messages.
