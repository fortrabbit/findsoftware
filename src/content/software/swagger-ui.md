---
id: swagger-ui
name: Swagger UI
urls:
  home: https://swagger.io
  repository: https://github.com/swagger-api/swagger-ui
  docs: https://github.com/swagger-api/swagger-ui/tree/main/docs
category:
  - ui-library
description: Browser user interface that renders an OpenAPI or Swagger API description as interactive documentation.
status: active
maintainer: SmartBear Software Inc.
maintainerType: company
parent: SmartBear Software Inc.
firstRelease: 2011
hqCountry: US
language: javascript
hosting:
  - static
runsAs:
  - browser
  - static
  - always-on
installMethod: npm, docker, CDN, download, composer
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2026-11-13
githubStargazers: 29085
packagistDownloads: 57561853
npmWeeklyDownloads: 159934
contributors: 389
dependentRepos: 8484
dependentPackages: 173
social:
  x: https://x.com/smartbear
  youtube: https://www.youtube.com/user/SmartBearSoftware
  facebook: https://www.facebook.com/smartbear
  instagram: https://www.instagram.com/smartbear_software/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://swagger.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/swagger-api/swagger-ui
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/swagger-api/swagger-ui/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/swagger-api/swagger-ui/blob/main/NOTICE
    checkedAt: 2026-11-16
  - field: parent
    url: https://swagger.io/
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://smartbear.com/terms-of-use/
    checkedAt: 2026-11-16
  - field: category
    url: https://api.github.com/repos/swagger-api/swagger-ui
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/swagger-api/swagger-ui
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/limitations.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/swagger-api/swagger-ui/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://repo.packagist.org/p2/swagger-api/swagger-ui.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/swagger-api/swagger-ui
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/swagger-api/swagger-ui/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/swagger-api/swagger-ui/releases/tags/v5.35.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/swagger-api/swagger-ui/releases/tags/v5.35.0
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/swagger-api/swagger-ui/commits/v1.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/swagger-api/swagger-ui
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/swagger-api/swagger-ui/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/swagger-ui
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/swagger-ui
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/swagger-ui
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/swagger-api/swagger-ui.json
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Swagger UI is a browser interface that takes an OpenAPI or Swagger description of an API and renders it as documentation a reader can browse and try out. It runs in the visitor's browser, so the built assets can be copied to a server and served as static files. The assets also come from an npm package that a build bundles, from a CDN script tag or from a Composer package. A Docker image instead starts an nginx server with the interface.

The [installation guide](https://github.com/swagger-api/swagger-ui/blob/main/docs/usage/installation.md) lists each of these routes with its own example.

## Worth knowing

Installing the package sends anonymized installation analytics through Scarf. The README says setting the `SCARF_ANALYTICS` environment variable to `false` turns it off.

The Swagger site also offers commercial products, such as SwaggerHub and Swagger Enterprise. They are separate from this interface and are not editions of it.
