---
id: nopcommerce
name: nopCommerce
urls:
  home: https://www.nopcommerce.com
  repository: https://github.com/nopSolutions/nopCommerce
  docs: https://docs.nopcommerce.com
  plugins: https://www.nopcommerce.com/marketplace
category:
  - e-commerce
description: Open-source e-commerce software built on .NET for running online stores, with a storefront and an administration area.
status: active
maintainer: Nop Solutions, Ltd
maintainerType: company
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 9
contentStore:
  - database
databases:
  - sqlserver
  - mysql
  - postgres
adminUi: true
headlessApi:
  - rest
templating: razor
i18n: yes, store languages
runsAs:
  - always-on
installMethod: download package, then upload to IIS
licenseModel: open-core
license: nopCommerce Public License Version 4.0, GNU AGPL v3.0 with additional terms, Commercial License
currentMajor: "4"
latestReleaseDate: 2026-09-04
githubStargazers: 10167
contributors: 206
social:
  forum: https://www.nopcommerce.com/boards
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/nopSolutions/nopCommerce
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/nopSolutions/nopCommerce/blob/develop/src/Presentation/Nop.Web/Nop.Web.csproj
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/nopSolutions/nopCommerce
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/technology-and-system-requirements.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/installing-nopcommerce/installing-local.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/index.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/getting-started/advanced-configuration/localization.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/developer/web-api/index.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/LICENSE.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/LICENSE.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/LICENSE.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/installing-nopcommerce/installing-on-linux.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/developer/design/understanding-layout.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/nopSolutions/nopCommerce/develop/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/nopSolutions/nopCommerce/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/nopSolutions/nopCommerce/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/nopSolutions/nopCommerce
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/nopSolutions/nopCommerce/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

nopCommerce, from Nop Solutions, Ltd, runs an online store from a storefront and an administration area, with store data in a database. The [installation guide](https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/installation-and-upgrading/installing-nopcommerce/installing-local.md) describes a precompiled package that is uploaded to IIS, and the README says the software supports Docker out of the box.

One installation can run more than one store, and the [multi-store guide](https://github.com/nopSolutions/nopCommerce-Docs/blob/master/en/getting-started/advanced-configuration/multi-store.md) describes the setup. The Web API, a plugin, is documented as a RESTful API.

## Worth knowing

The source is published under the nopCommerce Public License, which is the AGPL with an added requirement to show the "powered by nopCommerce" text on every user interface screen. The same license file offers a commercial license for embedding nopCommerce in proprietary applications.
