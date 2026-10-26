---
id: jpress
name: JPress
urls:
  repository: https://github.com/JPressProjects/jpress
category:
  - cms
description: Java content management system for websites with articles, pages, products and forms, extended by plugins and templates.
status: stub
maintainer: JPressProjects
maintainerType: individual
firstRelease: 2018
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 8
contentStore:
  - database
databases:
  - mysql
adminUi: true
i18n: yes
installMethod: docker-compose
licenseModel: open-source
license: LGPL-3.0
currentMajor: "5"
latestReleaseDate: 2024-08-30
githubStargazers: 2734
contributors: 40
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: status
    url: https://www.jpress.cn/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/JPressProjects/jpress
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://api.github.com/users/JPressProjects
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/JPressProjects/jpress/releases
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/JPressProjects/jpress/blob/v5.1.2/pom.xml
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/JPressProjects/jpress/blob/v5.1.2/pom.xml
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/JPressProjects/jpress/blob/v5.1.2/docker-compose.yml
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/JPressProjects/jpress/blob/v5.x/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/JPressProjects/jpress
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/JPressProjects/jpress/v5.x/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/JPressProjects/jpress/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/JPressProjects/jpress/commits/v5.1.2
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/JPressProjects/jpress
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/JPressProjects/jpress/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

JPress is a content management system written in Java, which its README describes as similar to WordPress. It supports multiple sites and languages, stores its content in a database that the installer creates on first run, and lets plugins add menus to the administration interface. Its README names WordPress, Hexo and Jekyll as sources for one-step article import.

The repository ships a Docker setup that runs the JPress image next to a MySQL container, plus an install script and a Maven build from source.

## Worth knowing

The project's website answers only with an expired HTTPS certificate, and its documentation site is reachable only over plain HTTP. The documentation is therefore not linked from this record.
