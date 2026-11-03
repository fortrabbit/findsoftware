---
id: aptabase
name: Aptabase
urls:
  home: https://aptabase.com
  repository: https://github.com/aptabase/aptabase
  docs: https://aptabase.com/docs
  pricing: https://aptabase.com/pricing
category:
  - analytics
description: Open-source, privacy-first analytics platform for mobile, desktop and web apps, with SDKs that send events to a self-hosted or managed server.
status: active
maintainer: Technov Solutions SRL
maintainerType: company
hqCountry: RO
language: csharp
databases:
  - postgres
installMethod: npm
licenseModel: open-source
license: AGPL-3.0
githubStargazers: 1866
contributors: 13
social:
  x: https://twitter.com/aptabase
  discord: https://discord.gg/d9d97unCUk
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://aptabase.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/aptabase/aptabase
    checkedAt: 2026-11-03
  - field: urls
    url: https://aptabase.com/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://aptabase.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://aptabase.com/terms
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://aptabase.com/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://aptabase.com/terms
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/aptabase/aptabase/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/aptabase/aptabase
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/aptabase/self-hosting/blob/main/docker-compose.yml
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/aptabase/self-hosting/blob/main/docker-compose.yml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://aptabase.com/docs
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/aptabase/self-hosting/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/aptabase/aptabase/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/aptabase/aptabase/blob/main/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/aptabase/aptabase
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/aptabase/aptabase/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Aptabase is an analytics platform for apps. An app adds one of the Aptabase SDKs, and the SDK sends named events to an Aptabase server, which stores them and shows them on a dashboard. The SDKs cover mobile, desktop and web apps; the web SDK for single-page apps is installed from npm, as the [documentation](https://aptabase.com/docs) describes. The server is the open source code in the [main repository](https://github.com/aptabase/aptabase), and it runs either as a managed cloud service in an EU or a US region, or on the operator's own servers.

For self-hosting, the [self-hosting guide](https://github.com/aptabase/self-hosting) starts a Docker Compose stack that runs the application with PostgreSQL and ClickHouse. The guide says a new account is registered in the web interface and activated through a link that appears in the container logs.

## Worth knowing

The server's license is AGPLv3, which requires that changes to the code be shared. The SDKs are a separate set of repositories and carry their own licenses. The managed cloud is a service run by the creators of Aptabase, and its plans are priced by event volume.
