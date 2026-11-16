---
id: stoplight-prism
name: Prism
urls:
  home: https://stoplight.io/open-source/prism
  repository: https://github.com/stoplightio/prism
  docs: https://github.com/stoplightio/prism/blob/main/docs/getting-started/01-installation.md
category:
  - testing
description: Open-source HTTP mock and proxy server that serves mock APIs and validates traffic against OpenAPI and Postman Collection documents.
status: active
maintainer: Stoplight Inc
maintainerType: company
parent: SmartBear
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
runsAs:
  - local
  - always-on
installMethod: npm, download, docker, install script
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2026-07-17
githubStargazers: 5070
npmWeeklyDownloads: 322017
contributors: 86
dependentRepos: 132
dependentPackages: 27
social:
  x: https://x.com/stoplightio
  forum: https://github.com/stoplightio/prism/discussions
  youtube: https://www.youtube.com/stoplight
  facebook: https://www.facebook.com/stoplightio/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://stoplight.io/open-source/prism
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/stoplightio/prism
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/stoplightio/prism/blob/main/docs/getting-started/01-installation.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/stoplightio/prism/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: parent
    url: https://stoplight.io/about
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/stoplightio/prism/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/stoplightio/prism
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/stoplightio/prism/v5.16.0/packages/cli/package.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/stoplightio/prism/v5.16.0/packages/cli/package.json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/stoplightio/prism/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/stoplightio/prism/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/stoplightio/prism/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/stoplightio/prism/blob/main/docs/getting-started/01-installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/stoplightio/prism/blob/main/docs/getting-started/01-installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/stoplightio/prism/blob/main/docs/getting-started/01-installation.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/stoplightio/prism
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/stoplightio/prism/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/stoplightio/prism/releases
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/stoplightio/prism/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/stoplightio/prism/releases/latest
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@stoplight/prism-cli
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@stoplight%2Fprism-cli
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@stoplight%2Fprism-cli
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/stoplightio/prism
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/stoplightio/prism/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Prism is an open-source HTTP server that a developer runs from the command line to mock an API described by an OpenAPI or Postman Collection file. Its mock mode answers requests from that description, and its validation proxy sits in front of a real API and checks the traffic against the same description. Stoplight maintains it and also offers hosted mock servers through its platform and studio.

## Worth knowing

The mock server listens on the local machine by default, so a copy running in Docker is reachable from outside its container only when started to listen on all addresses, as the README's FAQ explains. The CLI page says it can run in production, for example in a container, with its log printing in a separate process. The hosted mock servers are a separate vendor service, not part of the open-source package.
