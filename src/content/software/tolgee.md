---
id: tolgee
name: Tolgee
urls:
  home: https://tolgee.io
  repository: https://github.com/tolgee/tolgee-platform
  docs: https://docs.tolgee.io
  pricing: https://tolgee.io/pricing
category:
  - library
description: Open-source localization platform where developers and translators manage app translations, with in-context editing inside the running app.
status: active
maintainer: Tolgee s.r.o.
maintainerType: company
firstRelease: 2020
hqCountry: CZ
language: javascript
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: Apache-2.0, Tolgee EE License
currentMajor: "3"
latestReleaseDate: 2026-11-02
githubStargazers: 4149
contributors: 96
social:
  x: https://twitter.com/Tolgee_i18n
  discord: https://tolg.ee/discord
  forum: https://github.com/tolgee/tolgee-platform/discussions
  youtube: https://www.youtube.com/@tolgee
  facebook: https://www.facebook.com/Tolgee.i18n
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://tolgee.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://tolgee.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/tolgee/tolgee-platform
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.tolgee.io
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/tolgee/tolgee-platform/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/tolgee/tolgee-platform/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://raw.githubusercontent.com/tolgee/tolgee-platform/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://tolgee.io/terms_and_conditions
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/tolgee/tolgee-platform
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.tolgee.io/platform/self_hosting/running_with_java
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.tolgee.io/platform/self_hosting/running_with_docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.tolgee.io/platform/self_hosting/running_with_java
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.tolgee.io/platform/self_hosting/getting_started
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.tolgee.io/platform/self_hosting/running_with_docker
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://tolgee.io/tolgee-vs-poeditor
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.tolgee.io/platform/self_hosting/licensing
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/tolgee/tolgee-platform/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/tolgee/tolgee-platform/main/ee/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/tolgee/tolgee-platform/main/ee/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://tolgee.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/tolgee/tolgee-platform/releases/tag/v3.241.4
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/tolgee/tolgee-platform/releases/tag/v3.241.4
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/tolgee/tolgee-platform/releases/tag/v1.0.0-alpha.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/tolgee/tolgee-platform
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/tolgee/tolgee-platform
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Tolgee is a localization platform for software strings. Translators and developers work on translations in a web app, and developers can edit a translation in place inside the running application. The server is a Java application that the [self-hosting guide](https://docs.tolgee.io/platform/self_hosting/running_with_docker) runs with Docker Compose or from a release jar, and it keeps its data in PostgreSQL. The project is maintained by Tolgee s.r.o., a Czech company, and Tolgee Cloud is the hosted version.

## Worth knowing

The repository holds two licenses. Code outside the ee directory is Apache-2.0; the ee directory uses the Tolgee EE License, which allows non-commercial use only and bars offering the software as a hosted service. Advanced features on a self-hosted instance, such as SSO and granular permissions, need a licensed plan.
