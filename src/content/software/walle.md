---
id: walle
name: Walle
urls:
  home: https://walle-web.io
  repository: https://github.com/meolu/walle-web
  docs: https://walle-web.io/docs/2/installation.html
category:
  - dev-tool
description: Self-hosted deployment system that releases project code from git to target servers and rolls releases back through a web interface.
status: stub
maintainer: wushuiyong
maintainerType: individual
firstRelease: 2015
language: python
runtime:
  - python
hosting:
  - python
contentStore:
  - database
databases:
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: git clone, then sh admin.sh init
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2019-04-16
githubStargazers: 11981
contributors: 44
social:
  x: https://twitter.com/wushuiyong
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://walle-web.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/meolu/walle-web
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/meolu/walle-web/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/meolu/walle-web/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/meolu/walle-web
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/meolu/walle-web/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://walle-web.io/docs/2/installation.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://walle-web.io/docs/2/installation_docker.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://walle-web.io/docs/2/installation.html
    checkedAt: 2026-10-28
  - field: runtime
    url: https://walle-web.io/docs/2/dependency.html
    checkedAt: 2026-10-28
  - field: databases
    url: https://walle-web.io/docs/2/dependency.html
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://walle-web.io/docs/2/installation.html
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://walle-web.io/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/meolu/walle-web
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/meolu/walle-web/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/meolu/walle-web/commits/v0.8.0
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/meolu/walle-web/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/meolu/walle-web/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/meolu/walle-web
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/meolu/walle-web/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Walle is a self-hosted deployment system for web projects. It runs as a service on its own server, reads project code from git and deploys it to target machines over SSH. Its web interface runs deployments, shows the console output in real time and rolls them back. Project data lives in a MySQL database that the installation guide asks you to create. Access follows five roles, from super administrator to visitor.

## Worth knowing

The installation guide says the service must be deployed inside an intranet. The host must be Linux with Bash, git and ssh; the dependency page says Windows is not supported and advises against a Mac.

The host needs SSH keys trusted by the code host and by every target machine, because deployment runs through SSH. A Docker setup exists, but the Docker page says a community member contributed it.
