---
id: counter-dev
name: Counter
urls:
  home: https://counter.dev
  repository: https://github.com/ihucos/counter.dev
category:
  - analytics
description: Privacy-friendly web analytics that counts daily unique visitors and referrers for a website, served by a Go server backed by Redis.
status: active
maintainer: Irae Hueck Costa
maintainerType: individual
language: javascript
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: self-host binary cntr from the counter.dev-selfhost repository (prerelease builds)
licenseModel: open-source
license: AGPL-3.0
githubStargazers: 1012
contributors: 19
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://counter.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ihucos/counter.dev-selfhost
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ihucos/counter.dev-selfhost
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/ihucos/counter.dev-selfhost
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://counter.dev/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/ihucos/counter.dev
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ihucos/counter.dev/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Counter is web analytics for a website, built as a Go server with static assets. It counts unique visitors per day and referrers, and saves its data in Redis. The project runs a hosted service, and a self-hosted binary is available from a separate repository. Counter collects aggregated counts rather than per-user records.

## Worth knowing

The self-hosted build is marked beta by its repository. The project's FAQ says that, under the ePrivacy Directive, web analytics services including Counter need consent.
