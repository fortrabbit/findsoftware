---
id: enonic-xp
name: Enonic XP
urls:
  home: https://www.enonic.com
  repository: https://github.com/enonic/xp
  docs: https://developer.enonic.com/docs/xp
  pricing: https://www.enonic.com/pricing
  plugins: https://market.enonic.com
category:
  - headless-cms
  - cms
description: Java platform for content management and web applications, with the Content Studio editor, a built-in content store and a GraphQL delivery API.
status: active
maintainer: Enonic AS
firstRelease: 2015
hqCountry: NO
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 25
adminUi: true
headlessApi:
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-core
license: GPL-3.0
currentMajor: "8"
latestReleaseDate: 2026-10-21
githubStargazers: 211
contributors: 29
social:
  x: https://twitter.com/EnonicHQ
  forum: https://discuss.enonic.com
  youtube: https://www.youtube.com/user/EnonicCommunity
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.enonic.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/enonic/xp
    checkedAt: 2026-10-23
  - field: urls
    url: https://developer.enonic.com/docs/xp
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.enonic.com/privacy-policy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.enonic.com/company/about
    checkedAt: 2026-10-23
  - field: urls
    url: https://developer.enonic.com/docs/xp
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.enonic.com/pricing
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/enonic/xp
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/enonic/xp/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/enonic/xp/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/enonic/xp/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/enonic/xp/blob/master/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://developer.enonic.com/docs/cms
    checkedAt: 2026-10-23
  - field: i18n
    url: https://developer.enonic.com/docs/cms
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://developer.enonic.com/docs/platform/stable/deployment/distro
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://developer.enonic.com/docs/platform/stable/deployment/docker
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://developer.enonic.com/docs/platform/stable/deployment/service
    checkedAt: 2026-10-23
  - field: license
    url: https://developer.enonic.com/licensing
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://developer.enonic.com/licensing
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/enonic/xp/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/enonic/xp/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/enonic/xp/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/enonic/xp
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/enonic/xp/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Enonic XP is a content management system written in Java and run on GraalVM. Its content store is built in, and the Content Studio editor ships with the platform. The [developer documentation](https://developer.enonic.com/docs/xp) covers the platform, and the headless GraphQL API delivers content from it. Several sites can live in one installation, and layers cover content for multiple languages and regions. Authentication goes through pluggable ID providers.

Installation is either a downloaded distribution, which includes its own JVM, or the official Docker image. A distribution can run as a long-running operating-system service, and the platform keeps its data in a home folder.

Enonic AS, a Norwegian company, maintains the software.

## Worth knowing

Enonic XP is licensed under the GPL v3 with a linking exception, so applications built on its APIs need not be licensed under the GPL. Some Enonic applications use the source-available Enonic License instead. Enterprise applications such as Content Studio+ are offered to software or cloud subscription customers.

Enonic also offers the platform as a hosted service, which the company runs for customers who do not want to operate it themselves.
