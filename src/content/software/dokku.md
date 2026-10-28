---
id: dokku
name: Dokku
urls:
  home: https://dokku.com
  repository: https://github.com/dokku/dokku
  docs: https://dokku.com/docs/getting-started/installation/
  pricing: https://pro.dokku.com/
category:
  - dev-tool
description: Self-hosted platform as a service that runs on a single Linux server and deploys web apps pushed to it with git.
status: active
maintainer: Jeff Lindsay
firstRelease: 2013
language: go
runsAs:
  - always-on
installMethod: bootstrap.sh script run with sudo (apt-get on Debian systems)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-25
githubStargazers: 32204
contributors: 406
social:
  discord: https://discord.gg/YQjANGMZvu
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://dokku.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/dokku/dokku
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/dokku/dokku/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/dokku/dokku/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://dokku.com/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/dokku/dokku
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://dokku.com/docs/getting-started/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/dokku/dokku/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/dokku/dokku/blob/master/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/dokku/dokku/blob/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://pro.dokku.com/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/dokku/dokku/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/dokku/dokku/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/dokku/dokku/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/dokku/dokku
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/dokku/dokku/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Dokku is a platform as a service that its operator installs on one Linux server. Apps are deployed by pushing their code to the server with git. Dokku builds each app from a Dockerfile, or detects the language and builds it with buildpacks, then starts containers from the resulting image. The [installation guide](https://dokku.com/docs/getting-started/installation/) describes the requirements and the bootstrap script that installs it.

The project's homepage describes Dokku as an open source alternative to Heroku.

## Worth knowing

The open source edition runs on a single server. The project sells a separate add-on, Dokku Pro, for the same installation, and its page states that it is not a hosted service.
