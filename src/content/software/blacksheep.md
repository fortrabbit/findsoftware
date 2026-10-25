---
id: blacksheep
name: BlackSheep
urls:
  home: https://www.neoteroi.dev/blacksheep/
  repository: https://github.com/Neoteroi/BlackSheep
  docs: https://www.neoteroi.dev/blacksheep/getting-started/
category:
  - framework
description: Asynchronous ASGI web framework for Python, with routing, dependency injection, templating and an HTTP client.
status: active
maintainer: Roberto Prevato
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
templating: jinja2
runsAs:
  - always-on
renderingModes:
  - server
installMethod: pip install blacksheep
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-11
githubStargazers: 2359
contributors: 28
ecosystemsMonthlyDownloads: 37404
dependentRepos: 94
dependentPackages: 6
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://www.neoteroi.dev/blacksheep/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/Neoteroi/BlackSheep
    checkedAt: 2026-10-24
  - field: urls
    url: https://www.neoteroi.dev/blacksheep/getting-started/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/Neoteroi/BlackSheep/main/LICENSE
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/Neoteroi/BlackSheep
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/Neoteroi/BlackSheep/blob/main/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://www.neoteroi.dev/blacksheep/getting-started/
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://www.neoteroi.dev/blacksheep/getting-started/
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/Neoteroi/BlackSheep/blob/main/README.md
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://www.neoteroi.dev/blacksheep/templating/
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/Neoteroi/BlackSheep/blob/main/README.md
    checkedAt: 2026-10-24
  - field: templating
    url: https://www.neoteroi.dev/blacksheep/templating/
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/Neoteroi/BlackSheep
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/Neoteroi/BlackSheep/main/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://github.com/Neoteroi/BlackSheep/blob/main/CHANGELOG.md
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/Neoteroi/BlackSheep/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/Neoteroi/BlackSheep/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/Neoteroi/BlackSheep
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/Neoteroi/BlackSheep/contributors?per_page=1
    checkedAt: 2026-10-24
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blacksheep
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blacksheep
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blacksheep
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

BlackSheep is an asynchronous web framework for Python, built on the ASGI standard. It provides routing and dependency injection, templates render through Jinja2 by default, and its docs describe built-in OpenID Connect sign-in. The framework has no server of its own: it runs under an ASGI server such as uvicorn, hypercorn or granian, which keeps the application process running.

## Worth knowing

The application depends on the chosen ASGI server to stay up, so the host needs that server in place. The README points to each ASGI server's own documentation for production runs rather than describing a separate deployment method.
