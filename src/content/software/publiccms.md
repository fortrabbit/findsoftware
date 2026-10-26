---
id: publiccms
name: PublicCMS
urls:
  home: https://www.publiccms.com/en/
  repository: https://github.com/sanluan/PublicCMS
category:
  - cms
description: Java content management system with a visual editor, static site generation and an admin interface.
status: active
maintainer: Tianjin Black Core Technology Co., LTD.
maintainerType: company
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
contentStore:
  - database
databases:
  - mysql
adminUi: true
templating: freemarker
runsAs:
  - always-on
renderingModes:
  - static
  - server
installMethod: docker
licenseModel: open-core
license: Free for individuals and paid for enterprises (V4.0, V5, V6), Commercial use requires authorization from the copyright holder, MIT (V1.0, V2016, V2017, V2019, V2021)
currentMajor: "6"
latestReleaseDate: 2026-08-10
githubStargazers: 2093
contributors: 10
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/sanluan/PublicCMS
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.publiccms.com/en/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/sanluan/PublicCMS
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.publiccms.com/en/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.publiccms.com/en/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.publiccms.com/en/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/sanluan/PublicCMS/V5/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sanluan/PublicCMS/blob/V5/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/sanluan/PublicCMS/V5/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/sanluan/PublicCMS/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/sanluan/PublicCMS/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/sanluan/PublicCMS/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/sanluan/PublicCMS
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/sanluan/PublicCMS/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

PublicCMS is a content management system written in Java. The application runs as a Java process on MySQL: the project's instructions start the packaged web archive with `java -jar`, or run it in Docker, and the admin area is served under `/admin/`. The [homepage](https://www.publiccms.com/en/) says the site can be generated as static files.

## Worth knowing

The current license is not MIT. The license file is written in Chinese, and it limits non-commercial use to individual users and requires a commercial authorization from the copyright holder for commercial use. The homepage says enterprises and institutions pay to use the current editions. The older releases the README names are MIT-licensed, so a site built on one of them is under different terms from a site on a current release.
