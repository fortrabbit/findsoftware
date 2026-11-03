---
id: errbit
name: Errbit
urls:
  home: https://errbit.com
  repository: https://github.com/errbit/errbit
  docs: https://errbit.com/docs/main/
category:
  - analytics
description: Self-hosted error catcher, compatible with the Airbrake API, for collecting and managing errors from other applications.
status: active
maintainer: Errbit Team
maintainerType: community
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 4.0
databases:
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: git clone and bundle install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-20
githubStargazers: 4270
contributors: 257
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://errbit.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/errbit/errbit
    checkedAt: 2026-11-03
  - field: urls
    url: https://errbit.com/docs/main/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/errbit/errbit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/errbit/errbit
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/errbit/errbit/commit/224f32a1b565fc92bae758f6986a4dd7f13fd71b
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/errbit/errbit
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/errbit/errbit/blob/main/docs/deployment/docker.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/errbit/errbit/blob/main/docs/deployment.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/errbit/errbit/blob/main/docs/deployment.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/errbit/errbit/blob/main/docs/deployment.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/errbit/errbit/blob/main/docs/deployment.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/errbit/errbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/errbit/errbit/releases/tag/v0.11.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/errbit/errbit/releases/tag/v0.11.6
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/errbit/errbit
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/errbit/errbit/contributors?per_page=1
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

Errbit is a self-hosted error catcher. Applications send their errors to it through the Airbrake API, so an app that uses the airbrake gem can point that gem at an Errbit server. Its web UI lists the apps that report to it and the errors each one collects. The server stores its data in MongoDB and runs behind Puma, which a reverse proxy such as Nginx or Apache can front. The project documents installs from a git clone, a Docker image, Heroku, Dokku and Kubernetes.

## Worth knowing

The deployment notes say official support is limited to Heroku, and the other routes are documented as ways to deploy Errbit.
