---
id: halo
name: Halo
urls:
  home: https://www.halo.run
  repository: https://github.com/halo-dev/halo
  docs: https://docs.halo.run
  pricing: https://www.lxware.cn/halo
  plugins: https://www.halo.run/store/apps
category:
  - cms
description: Open-source site-building tool for blogs, knowledge bases and company websites, written in Java on Spring Boot.
status: active
maintainer: 凌霞（深圳）软件有限公司
maintainerType: company
parent: 凌霞（深圳）软件有限公司
firstRelease: 2018
hqCountry: CN
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
basedOn:
  - spring-boot
contentStore:
  - database
databases:
  - postgres
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
templating: thymeleaf
i18n: yes, theme localization resources
runsAs:
  - always-on
installMethod: docker run, Docker Compose, Helm, Podman, 1Panel, Baota panel, JAR file
licenseModel: open-core
license: GPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-23
githubStargazers: 40026
contributors: 159
social:
  forum: https://bbs.halo.run
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.halo.run/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/halo-dev/halo
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.halo.run/guide/install/docker.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.halo.run/about
    checkedAt: 2026-10-26
  - field: parent
    url: https://www.halo.run/about
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.halo.run/about
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/halo-dev/halo
    checkedAt: 2026-10-26
  - field: category
    url: https://docs.halo.run/guide/use/common.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://docs.halo.run/guide/install/config.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://docs.halo.run/guide/use/common.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.halo.run/
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.halo.run/developer-guide/theme/thymeleaf.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.halo.run/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.halo.run/guide/install/docker.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.halo.run/guide/install/jar-file.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/halo-dev/halo
    checkedAt: 2026-10-26
  - field: license
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/halo-dev/halo/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/halo-dev/halo/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/halo-dev/halo/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/halo-dev/halo
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/halo-dev/halo/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.halo.run/guide/prepare.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Halo is an open-source site builder written in Java on Spring Boot, for blogs, knowledge bases and company websites. Its console, at `/console`, manages articles, pages and attachments. Content is kept in a database: PostgreSQL, MySQL, MariaDB or the embedded H2. The install guide documents Docker, Docker Compose, Helm, Podman, 1Panel, Baota panel and JAR file setups, and the JAR file needs a Java runtime on the server. The company behind it, 凌霞（深圳）软件有限公司, also sells paid editions, Halo Pro and Halo Shop, that add features to the community edition.

## Worth knowing

The Docker quick start in the install guide uses the built-in H2 database, which the guide describes as suited to trying the software out; production setups are documented with a separate database. The paid editions are a commercial product, and some of their features need a license activated on the instance. Themes and plugins are listed in the Halo app store.
