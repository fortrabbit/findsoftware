---
id: neo4j
name: Neo4j
urls:
  home: https://neo4j.com
  repository: https://github.com/neo4j/neo4j
  docs: https://neo4j.com/docs/operations-manual/current/
  pricing: https://neo4j.com/pricing/
category:
  - database
description: Native graph database server that stores nodes and relationships and is queried with the Cypher language.
status: active
maintainer: Neo4j, Inc.
maintainerType: company
firstRelease: 2013
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
adminUi: true
runsAs:
  - always-on
installMethod: deb package
licenseModel: open-core
license: GPL-3.0
latestReleaseDate: 2026-10-20
githubStargazers: 17377
contributors: 257
social:
  x: https://x.com/neo4j
  discord: https://discord.com/invite/neo4j
  forum: https://community.neo4j.com
  facebook: https://www.facebook.com/neo4j.graph.database
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://raw.githubusercontent.com/neo4j/neo4j/2026.10/README.asciidoc
    checkedAt: 2026-10-30
  - field: urls
    url: https://neo4j.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/neo4j/neo4j
    checkedAt: 2026-10-30
  - field: urls
    url: https://neo4j.com/docs/operations-manual/current/installation/requirements/
    checkedAt: 2026-10-30
  - field: urls
    url: https://neo4j.com/pricing/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://neo4j.com/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://neo4j.com/
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/neo4j/neo4j/2026.10/README.asciidoc
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/neo4j/neo4j
    checkedAt: 2026-10-30
  - field: runtime
    url: https://neo4j.com/docs/operations-manual/current/installation/requirements/
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://neo4j.com/docs/operations-manual/current/installation/requirements/
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/neo4j/neo4j/commits/2994b43b44f35bf6520bd2667ab181bb76a45585
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/neo4j/neo4j/releases/tags/1.8
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/neo4j/neo4j
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://neo4j.com/docs/operations-manual/current/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://neo4j.com/docs/operations-manual/current/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://neo4j.com/docs/operations-manual/current/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://neo4j.com/docs/operations-manual/current/docker/introduction/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://neo4j.com/docs/operations-manual/current/installation/windows/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://neo4j.com/docs/operations-manual/current/installation/linux/tarball/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://neo4j.com/docs/browser/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/neo4j/neo4j
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/neo4j/neo4j/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Neo4j is a graph database server that stores data as nodes and relationships and is queried with the Cypher language. The [operations manual](https://neo4j.com/docs/operations-manual/current/) covers installs from Debian, RPM and tar packages, a Windows zip archive and a Docker image, and it describes the server as a background process once started. The server runs on a Java virtual machine that the host has to supply, and Neo4j Browser is the developer interface that ships with it. Neo4j, Inc. maintains it, and Neo4j AuraDB is offered as a fully managed service.

## Worth knowing

The repository holds the GPL-licensed source. The Enterprise Edition is closed source under a commercial license, and the documentation marks role-based access control and OpenID Connect sign-in as Enterprise Edition features.
