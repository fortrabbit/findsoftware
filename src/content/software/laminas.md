---
id: laminas
name: Laminas
urls:
  home: https://getlaminas.org
  repository: https://github.com/laminas/laminas-mvc
  docs: https://docs.laminas.dev/
category:
  - framework
description: Open-source continuation of Zend Framework, made of PHP components, the Laminas MVC framework and the Mezzio middleware framework.
status: active
maintainer: Laminas Project, a Series of LF Projects, LLC
maintainerType: foundation
parent: Linux Foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
i18n: yes
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project laminas/laminas-mvc-skeleton, docker-compose
licenseModel: open-source
license: BSD-3-Clause, BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2024-11-21
githubStargazers: 174
social:
  mastodon: https://phpc.social/@getlaminas
  forum: https://discourse.laminas.dev
wikidata: Q189475
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://getlaminas.org/about
    checkedAt: 2026-10-18
  - field: urls
    url: https://getlaminas.org
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/laminas/laminas-mvc
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/laminas/laminas-mvc-skeleton
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.laminas.dev/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://getlaminas.org/about
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://getlaminas.org/about/foundation
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://getlaminas.org/support
    checkedAt: 2026-10-18
  - field: parent
    url: https://getlaminas.org/about
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q189475
    checkedAt: 2026-10-18
  - field: category
    url: https://getlaminas.org/about
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/laminas/laminas-mvc
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/laminas/laminas-mvc.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/laminas/laminas-mvc
    checkedAt: 2026-10-18
  - field: license
    url: https://getlaminas.org/support
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://getlaminas.org/support
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/laminas/laminas-mvc/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/mezzio/mezzio.json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/laminas/laminas-mvc
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://raw.githubusercontent.com/laminas/laminas-mvc-skeleton/master/README.md
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Laminas is the open-source continuation of Zend Framework, maintained by the Laminas Project, a series of LF Projects under the Linux Foundation. Its MVC framework, laminas-mvc, is installed from a skeleton application with Composer. The project also publishes PHP components and the Mezzio middleware framework, and it points MVC users to Mezzio. Several vendors listed on the project site offer commercial support.

## Worth knowing

Maintenance status differs by package. laminas-mvc is in security-only maintenance until the end of 2028, with no releases after that. Mezzio and the components are in active development.
