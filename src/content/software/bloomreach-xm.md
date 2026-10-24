---
id: bloomreach-xm
name: Bloomreach Experience Manager
urls:
  home: https://www.bloomreach.com/en/products/content
  repository: https://github.com/bloomreach/brxm
  docs: https://xmdocumentation.bloomreach.com/
category:
  - cms
description: Java enterprise CMS from Bloomreach, offered as Bloomreach Cloud and as on-premise deployments, with an Apache-2.0 community edition of its open source releases.
status: active
maintainer: Bloomreach, Inc.
maintainerType: company
firstRelease: 2020
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
adminUi: true
headlessApi:
  - rest
i18n: yes, translatable content languages
runsAs:
  - always-on
installMethod: Maven archetype project
licenseModel: open-source
license: Apache-2.0, GPL-3.0 (bundled Sencha ExtJS, with Open Source License Exception for Applications)
currentMajor: "16"
latestReleaseDate: 2024-09-30
githubStargazers: 30
contributors: 3
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://www.bloomreach.com/en/products/content
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/bloomreach/brxm
    checkedAt: 2026-10-24
  - field: urls
    url: https://xmdocumentation.bloomreach.com/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://www.bloomreach.com/en/about-us
    checkedAt: 2026-10-24
  - field: category
    url: https://www.bloomreach.com/en/products/content
    checkedAt: 2026-10-24
  - field: language
    url: https://raw.githubusercontent.com/bloomreach/brxm/brxm-16.1.0/project/pom.xml
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://xmdocumentation.bloomreach.com/trails/getting-started/running-a-project.html
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://xmdocumentation.bloomreach.com/library/concepts/rest/content-rest-api/introduction.html
    checkedAt: 2026-10-24
  - field: databases
    url: https://xmdocumentation.bloomreach.com/library/development/use-mysql-in-a-development-environment.html
    checkedAt: 2026-10-24
  - field: i18n
    url: https://xmdocumentation.bloomreach.com/library/concepts/translations/add-a-translatable-language.html
    checkedAt: 2026-10-24
  - field: runtime
    url: https://xmdocumentation.bloomreach.com/trails/getting-started/prerequisites.html
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://xmdocumentation.bloomreach.com/trails/getting-started/prerequisites.html
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://xmdocumentation.bloomreach.com/trails/getting-started/prerequisites.html
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://xmdocumentation.bloomreach.com/library/development/build-brxm-from-source.html
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://xmdocumentation.bloomreach.com/trails/getting-started/running-a-project.html
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/bloomreach/brxm
    checkedAt: 2026-10-24
  - field: license
    url: https://xmdocumentation.bloomreach.com/library/development/build-brxm-from-source.html
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/bloomreach/brxm/master/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://xmdocumentation.bloomreach.com/library/development/build-brxm-from-source.html
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/bloomreach/brxm/tags
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/bloomreach/brxm/git/refs/tags/brxm-16.1.0
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/bloomreach/brxm
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/bloomreach/brxm/contributors?per_page=1
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bloomreach Experience Manager is a Java enterprise CMS from Bloomreach, Inc. It is offered as Bloomreach Cloud, a platform-as-a-service, and as on-premise deployments. The community edition is the Apache-2.0 licensed source of its tagged open source releases: the repository holds the git trees of those tags, and the documentation describes building a release from source with Maven. A project is generated from a Maven archetype and has a CMS UI for editors, and published content is exposed through a Content REST API on the delivery tier. Projects run all three web applications together through Maven's Cargo plugin.

## Worth knowing

Bloomreach publishes open source versions about two years after the enterprise release, so the newest community tag trails the enterprise product. Some enterprise plugins are closed source and require a standard or premium license.
