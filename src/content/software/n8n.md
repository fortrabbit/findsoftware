---
id: n8n
name: n8n
urls:
  home: https://n8n.io
  repository: https://github.com/n8n-io/n8n
  docs: https://docs.n8n.io
  pricing: https://n8n.io/pricing/
category:
  - backend
description: Workflow automation platform for building AI agents and workflows on a visual canvas, self-hosted or in the cloud.
status: active
maintainer: n8n GmbH
maintainerType: company
firstRelease: 2019
hqCountry: DE
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
databases:
  - sqlite
  - postgres
adminUi: true
i18n: UI strings in a selectable locale
installMethod: one-line setup script
licenseModel: source-available
license: Sustainable Use License, n8n Enterprise License
currentMajor: "2"
latestReleaseDate: 2026-11-02
githubStargazers: 209420
npmWeeklyDownloads: 135213
contributors: 431
social:
  x: https://x.com/n8n_io
  discord: https://discord.gg/n8n
  forum: https://community.n8n.io
  youtube: https://www.youtube.com/c/n8n-io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://n8n.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/n8n-io/n8n
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.n8n.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://n8n.io/legal/privacy/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/n8n-io/n8n
    checkedAt: 2026-11-03
  - field: category
    url: https://n8n.io
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.n8n.io/deploy/host-n8n/install-options/install-with-npm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/n8n-io/n8n/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.n8n.io/deploy/host-n8n/install-options/install-with-npm
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/n8n
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/n8n-io/n8n/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/n8n-io/n8n/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/n8n-io/n8n/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://n8n.io/pricing/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/n8n-io/n8n
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/n8n-io/n8n
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/n8n-io/n8n/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/n8n-io/n8n/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/n8n-io/n8n/tags
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/n8n/latest
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization/
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

n8n is a workflow automation platform. Workflows are built on a visual canvas. A workflow can start from a webhook that a website or service calls, or from a chat trigger whose embedded chat widget calls the workflow's webhook URL. It is written in TypeScript and runs on Node.js, with SQLite by default and PostgreSQL as an option. The project documents installs with a one-line setup script, Docker, Docker Compose and npm.

## Worth knowing

The source is under the Sustainable Use License, and files marked as Enterprise code need an n8n Enterprise License. The company runs n8n Cloud beside the self-hosted version. The one-line setup page says that a coming major release distributes n8n only through Docker, so the npm route applies to the current major only.
