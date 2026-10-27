---
id: kvision
name: KVision
urls:
  home: https://kvision.io
  repository: https://github.com/rjaros/kvision
  docs: https://kvision.gitbook.io/kvision-guide/
category:
  - framework
  - ui-library
description: Object-oriented web framework for Kotlin/JS with a hierarchy of ready-to-use UI components.
status: active
maintainer: Robert Jaros
maintainerType: individual
firstRelease: 2018
language: kotlin
basedOn:
  - bootstrap
templating: handlebars
i18n: yes
runsAs:
  - browser
installMethod: gradle
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-09-13
githubStargazers: 1350
contributors: 20
dependentRepos: 23
dependentPackages: 52
social:
  discord: https://discord.gg/SdsN3arN2w
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://raw.githubusercontent.com/rjaros/kvision/master/README.md
    checkedAt: 2026-10-27
  - field: urls
    url: https://api.github.com/repos/rjaros/kvision
    checkedAt: 2026-10-27
  - field: urls
    url: https://kvision.gitbook.io/kvision-guide/
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://raw.githubusercontent.com/rjaros/kvision/master/LICENSE
    checkedAt: 2026-10-27
  - field: language
    url: https://api.github.com/repos/rjaros/kvision
    checkedAt: 2026-10-27
  - field: category
    url: https://raw.githubusercontent.com/rjaros/kvision/master/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://raw.githubusercontent.com/rjaros/kvision/master/README.md
    checkedAt: 2026-10-27
  - field: templating
    url: https://kvision.gitbook.io/kvision-guide/introduction.md
    checkedAt: 2026-10-27
  - field: i18n
    url: https://raw.githubusercontent.com/rjaros/kvision/master/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://kvision.gitbook.io/kvision-guide/1.-getting-started-1/setting-up.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://kvision.gitbook.io/kvision-guide/2.-frontend-development-guide.md
    checkedAt: 2026-10-27
  - field: license
    url: https://raw.githubusercontent.com/rjaros/kvision/master/LICENSE
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://raw.githubusercontent.com/rjaros/kvision/master/LICENSE
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://repo1.maven.org/maven2/io/kvision/kvision/maven-metadata.xml
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/rjaros/kvision/releases/tag/9.7.0
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/rjaros/kvision/releases/tag/0.0.1
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://api.github.com/repos/rjaros/kvision
    checkedAt: 2026-10-27
  - field: contributors
    url: https://api.github.com/repos/rjaros/kvision/contributors?per_page=1
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/io.kvision%3Akvision
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/io.kvision%3Akvision
    checkedAt: 2026-10-27
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

KVision is an object-oriented web framework for Kotlin/JS. Applications are written in Kotlin, and the framework provides a hierarchy of ready-to-use UI components. Its styles and components are based on Bootstrap, and it has built-in gettext internationalization and Handlebars templates.

Applications are built with Gradle, and the guide says they can run fully in the browser without a backend. The production build produces a zip of the application files. Fullstack applications pair the frontend with server frameworks such as Ktor, Spring Boot and Javalin through the Kilua RPC library, which the project names as an integration. Robert Jaros is named as the copyright holder in the license file.

## Worth knowing

The setup guide requires JDK 25 or higher to build an application, so a project needs that JDK on its build machine.
