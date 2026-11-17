---
id: zodios
name: Zodios
urls:
  home: https://www.zodios.org/
  repository: https://github.com/ecyrbe/zodios
  docs: https://www.zodios.org
category:
  - dev-tool
  - backend
description: TypeScript API client and optional Express API server whose endpoint definitions are validated with Zod schemas.
status: active
maintainer: ecyrbe
maintainerType: individual
firstRelease: 2022
language: javascript
basedOn:
  - axios
  - zod
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2023-08-22
githubStargazers: 1918
npmWeeklyDownloads: 486299
contributors: 26
dependentRepos: 60
dependentPackages: 31
social:
  x: https://twitter.com/ecyrbedev
  discord: https://discord.gg/pfSZ2sVAcs
  forum: https://github.com/ecyrbe/zodios/discussions
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://www.zodios.org/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/ecyrbe/zodios
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/ecyrbe/zodios/blob/main/README.md
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/ecyrbe/zodios/blob/main/LICENSE
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://github.com/ecyrbe/zodios/releases/tag/v2.0.0
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/ecyrbe/zodios
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/ecyrbe/zodios/blob/main/README.md
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://www.zodios.org/
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://www.zodios.org/
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/ecyrbe/zodios/blob/main/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/ecyrbe/zodios
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://github.com/ecyrbe/zodios/blob/main/LICENSE
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/ecyrbe/zodios/releases/tag/v10.9.6
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/ecyrbe/zodios/releases/tag/v10.9.6
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@zodios/core
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/ecyrbe/zodios
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/ecyrbe/zodios/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@zodios/core
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@zodios/core
    checkedAt: 2026-11-17
ai: authored
packagistDownloads: null
---

Zodios is a TypeScript API client for REST endpoints. Endpoints are declared once as a list of methods, paths, optional aliases and Zod schemas for parameters and responses, and the client then offers typed calls with autocompleted paths and parameters and checks each response against its schema. The client is based on axios, and the shared definitions are based on Zod. The documentation describes Zodios as a set of packages: beyond the core client there are plugins, React and Solid hooks based on TanStack Query, an Express adapter and an OpenAPI generator, and the declarations can be shared between a client and a server.

## Worth knowing

Zodios embeds none of its dependencies, so a project installs the peer dependencies it needs. The README says autocompletion works best with a TypeScript language server, even in plain JavaScript.
