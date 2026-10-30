---
id: mongodb
name: MongoDB
urls:
  home: https://www.mongodb.com/
  repository: https://github.com/mongodb/mongo
  docs: https://www.mongodb.com/docs/manual/
category:
  - database
description: Document database server built on the document model, offered as a community edition and as commercial Enterprise editions.
status: active
maintainer: MongoDB, Inc.
maintainerType: company
hqCountry: US
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker-image
licenseModel: source-available
license: SSPL-1.0
currentMajor: "9"
latestReleaseDate: 2026-10-13
githubStargazers: 28666
contributors: 338
social:
  forum: https://www.mongodb.com/community/forums/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://www.mongodb.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/mongodb/mongo
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/mongodb/mongo
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.mongodb.com/docs/manual/installation/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/mongodb/mongo/master/LICENSE-Community.txt
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/mongodb/mongo/master/LICENSE-Community.txt
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.mongodb.com/legal/terms-of-use
    checkedAt: 2026-10-30
  - field: category
    url: https://www.mongodb.com/docs/manual/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/mongodb/mongo
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.mongodb.com/docs/manual/administration/install-community-docker/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://www.mongodb.com/docs/manual/release-notes/9.0/
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://www.mongodb.com/docs/manual/release-notes/9.0/
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/mongodb/mongo/r9.0.4/LICENSE-Community.txt
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.mongodb.com/docs/manual/administration/install-community-docker/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.mongodb.com/docs/manual/administration/install-community-windows.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.mongodb.com/docs/manual/administration/install-community-linux.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.mongodb.com/docs/manual/reference/program/mongod/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/mongodb/mongo
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/mongodb/mongo/contributors
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MongoDB is built on the document model, and it runs as the `mongod` daemon, the primary process of the MongoDB system. The [install guide](https://www.mongodb.com/docs/manual/administration/install-community-docker/) shows the Community Server started from a container image. MongoDB, Inc. publishes the server and sells an Enterprise Advanced subscription next to the free Community Edition.

The Enterprise Advanced subscription adds a commercial license for MongoDB Enterprise Server and capabilities that the Community Edition does not have. MongoDB Atlas, the managed cloud service from the same company, has its own record.

## Worth knowing

The server needs a host that keeps a process running. Some capabilities are only in the Enterprise Advanced edition, under a commercial license, so a Community deployment does not include them.
