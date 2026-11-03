---
id: pontoon
name: Pontoon
urls:
  home: https://pontoon.mozilla.org
  repository: https://github.com/mozilla/pontoon
  docs: https://pontoon.mozilla.org/docs/
category:
  - dev-tool
description: Web-based translation management system that pulls strings from version control and writes translations back, run by Mozilla for its localization community.
status: active
maintainer: Mozilla Foundation
maintainerType: foundation
firstRelease: 2012
language: python
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: docker
licenseModel: open-source
license: BSD-3-Clause
latestReleaseDate: 2026-11-02
githubStargazers: 1677
contributors: 136
social:
  forum: https://github.com/mozilla/pontoon/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://pontoon.mozilla.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://pontoon.mozilla.org/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
  - field: category
    url: https://pontoon.mozilla.org/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/mozilla/pontoon/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/mozilla/pontoon/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/mozilla/pontoon/tags
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/mozilla/pontoon/releases
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
  - field: databases
    url: https://pontoon.mozilla.org/docs/dev/developer-setup/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://pontoon.mozilla.org/docs/admin/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://pontoon.mozilla.org/docs/dev/api/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/mozilla/pontoon
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pontoon is Mozilla's translation management system, a web application in which a community of localizers translates, reviews and manages strings for Mozilla's products and websites. It pulls strings from Git and Mercurial repositories and writes translations back to them. Its REST API, built on Django REST Framework, serves translation data and accepts uploads of translations, pretranslations and suggestions. The README describes Mozilla's own deployment as a Docker image on Google Cloud Platform, which anyone hosting an instance may need to adapt for another platform. Users hold a contributor, translator or team manager role, and the admin console is open only to administrators.

## Worth knowing

Sign-in can use third-party providers, Mozilla Accounts, GitHub, GitLab, Google or Keycloak, each set up as an OAuth application. The developer setup is for development only; the [deployment guide](https://pontoon.mozilla.org/docs/dev/deployment/) covers production.
