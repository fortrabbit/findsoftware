---
id: traduora
name: Traduora
urls:
  home: https://docs.traduora.co
  repository: https://github.com/ever-co/ever-traduora
  docs: https://docs.traduora.co
  pricing: https://ever.co/pricing
category:
  - dev-tool
description: Self-hostable translation management platform for teams, with a web interface, file import and export, and a REST API.
status: active
maintainer: Ever Co. LTD
maintainerType: company
firstRelease: 2019
hqCountry: IL
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mysql
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: Docker image
licenseModel: open-source
license: AGPL-3.0-only
currentMajor: "0"
latestReleaseDate: 2026-10-25
githubStargazers: 2139
contributors: 34
social:
  discord: https://discord.gg/msqRJ4w
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.traduora.co/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/ever-co/ever-traduora
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.traduora.co/getting-started
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ever-co/ever-traduora
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://traduora.co/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.traduora.co/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/ever-co/ever-traduora
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.traduora.co/configuration
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.traduora.co/deployment
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/ever-co/ever-traduora
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.traduora.co/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.traduora.co/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.traduora.co/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.traduora.co/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.traduora.co/deployment
    checkedAt: 2026-11-03
  - field: license
    url: https://traduora.co/tos
    checkedAt: 2026-11-03
  - field: urls
    url: https://ever.co/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/ever-co/ever-traduora/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/ever-co/ever-traduora/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/ever-co/ever-traduora/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/ever-co/ever-traduora
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ever-co/ever-traduora/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Traduora is a translation management platform for teams. Members work on the same translation projects in a web interface, and a REST API lets a workflow automate the rest. The server is a Node.js application that keeps its data in MySQL. The project documents three ways to run it: a Docker image, plain Kubernetes manifests and a build from source. The FAQ says there is no hosted version at the moment, so the operator runs the server on their own infrastructure.

## Worth knowing

A production instance runs as a server process, and the docs suggest a process manager such as systemd, upstart, supervisord or pm2. The source is under the GNU Affero General Public License, and the company also sells a commercial license for a copy the operator runs, with plans listed on the Ever pricing page.
