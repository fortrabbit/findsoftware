---
id: craftercms
name: CrafterCMS
urls:
  home: https://craftercms.com
  repository: https://github.com/craftersoftware/craftercms
  docs: https://craftercms.com/docs/current/index.html
category:
  - cms
  - headless-cms
description: Content management platform for building digital experience applications, with a Java server and an authoring studio.
status: active
maintainer: Crafter Software Corporation
maintainerType: company
firstRelease: 2013
hqCountry: US
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
adminUi: true
headlessApi:
  - rest
  - graphql
templating: freemarker
i18n: yes, language-based localized content
runsAs:
  - always-on
installMethod: Docker Compose
licenseModel: open-core
license: GPL-3.0
currentMajor: "4"
latestReleaseDate: 2026-10-21
githubStargazers: 340
contributors: 13
social:
  x: https://twitter.com/crafter_cms
  youtube: https://www.youtube.com/@crafter-cms
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://craftercms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/craftersoftware/craftercms
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/craftersoftware/craftercms/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://craftercms.com/products/crafter-community
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://craftercms.com/about
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/craftersoftware/craftercms
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.craftercms+AND+a:crafter-engine+AND+v:2.2.2&core=gav
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/craftersoftware/craftercms/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://craftercms.com/products/crafter-community
    checkedAt: 2026-10-23
  - field: runtime
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://craftercms.com/docs/current/by-role/developer/common/localization.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://craftercms.com/docs/current/by-role/system-admin/installation.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/craftersoftware/craftercms/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/craftersoftware/craftercms/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/craftersoftware/craftercms/develop/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://craftercms.com/products/crafter-community
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/craftersoftware/craftercms/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/craftersoftware/craftercms/commits/53f98a5a5d589222b5326ad172db9ff538050f43
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/craftersoftware/craftercms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/craftersoftware/craftercms/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

CrafterCMS is a headless, API-first content management platform with an authoring studio. It runs on the JVM with Git, and the install page covers Docker Compose, while the README also offers a pre-built binary archive and an AMI. The authoring interface is Crafter Studio. Templates are written in FreeMarker, and content is available through GraphQL and REST APIs. Published content reaches the delivery tier through a Git repository that the deployer monitors. The core system needs no external database; MongoDB is used only by two optional modules, Crafter Profile and Crafter Social.

## Worth knowing

CrafterCMS has a free community edition, an enterprise edition that is self-hosted or self-managed, and a fully managed cloud service. The docs mark SAML2 and LDAP authentication in Crafter Studio as enterprise-only features and call Crafter Profile and Crafter Social optional enterprise modules; the pages read do not list what else the enterprise edition adds.
