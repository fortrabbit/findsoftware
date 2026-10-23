---
id: gentics-mesh
name: Gentics Mesh
urls:
  home: https://www.gentics.com/mesh/
  repository: https://github.com/gentics/mesh
  docs: https://www.gentics.com/mesh/docs/getting-started/
category:
  - headless-cms
description: Java headless CMS that keeps its content in a relational database reached through a JDBC connector and serves it over REST and GraphQL APIs.
status: active
maintainer: Gentics Software GmbH
maintainerType: company
firstRelease: 2017
hqCountry: AT
language: java
runtime:
  - jvm
hosting:
  - java
contentStore:
  - database
databases:
  - mariadb
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: JAR file
licenseModel: open-core
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 593
contributors: 30
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.gentics.com/mesh/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/gentics/mesh
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/gentics/mesh/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://github.com/gentics/mesh/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/gentics/mesh
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/gentics/mesh/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://www.gentics.com/mesh/docs/administration-guide/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: databases
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: databases
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.gentics.com/mesh/docs/administration-guide/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://www.gentics.com/mesh/docs/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://www.gentics.com/mesh/docs/getting-started/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/gentics/mesh/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://www.gentics.com/mesh/docs/administration-guide/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/gentics/mesh/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/gentics/mesh/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/gentics/mesh/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gentics/mesh
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gentics/mesh/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Java · Headless CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gentics Mesh is a headless CMS written in Java. Its content is kept in a relational database that the server reaches through a JDBC connector. The [administration guide](https://www.gentics.com/mesh/docs/administration-guide/) describes an Elasticsearch installation that the server starts by default, and the [getting-started guide](https://www.gentics.com/mesh/docs/getting-started/) names MariaDB as the production example and an in-memory HSQLDB image for trying it out. Content is served through REST and GraphQL APIs, and a web user interface covers editing. Roles are assigned to groups, and the software supports multiple languages and localisation.

The server runs from a JAR file on a Java runtime, or from the Docker image, which ships an empty server without content. Vert.x is the core framework in the software stack the documentation lists. Gentics Software GmbH, based in Vienna, maintains the project and publishes it under the Apache 2.0 license.

## Worth knowing

The administration guide says production servers must be run on Linux. The README describes an Enterprise Edition next to the open-source version, and the documentation lists commercial plugins that come from a commercial repository and must match the server's major and minor version.
