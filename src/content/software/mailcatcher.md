---
id: mailcatcher
name: MailCatcher
urls:
  home: https://mailcatcher.me
  repository: https://github.com/sj26/mailcatcher
category:
  - dev-tool
  - email
description: Email catcher that runs an SMTP server and shows the received messages in a web interface, written in Ruby.
status: active
maintainer: Samuel Cochran
maintainerType: individual
firstRelease: 2010
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.3
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-02
githubStargazers: 6783
contributors: 51
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://mailcatcher.me/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/sj26/mailcatcher
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/sj26/mailcatcher/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/sj26/mailcatcher/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://mailcatcher.me/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/sj26/mailcatcher
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/sj26/mailcatcher/blob/v0.11.0/mailcatcher.gemspec
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/sj26/mailcatcher
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/mailcatcher.json
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/sj26/mailcatcher/releases/tag/v0.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/sj26/mailcatcher
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/mailcatcher.json
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/sj26/mailcatcher/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/sj26/mailcatcher/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MailCatcher is an email catcher written in Ruby. It runs an SMTP server that catches every message sent to it and shows the messages in a web interface, so an application can be pointed at it and the mail is displayed rather than delivered. A REST-style URL schema also serves the messages as JSON. It runs as a daemon in the background, and it is installed with `gem install` or started from its Docker image.
