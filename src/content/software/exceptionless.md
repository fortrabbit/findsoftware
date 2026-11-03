---
id: exceptionless
name: Exceptionless
urls:
  home: https://exceptionless.com
  repository: https://github.com/exceptionless/Exceptionless
  docs: https://exceptionless.com/docs/
  pricing: https://exceptionless.com/pricing/
category:
  - analytics
description: Error and log reporting service with a self-hostable server, a web dashboard and client libraries for .NET and JavaScript.
status: active
maintainer: Exceptionless
maintainerType: company
firstRelease: 2015
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
adminUi: true
installMethod: docker image exceptionless/exceptionless
licenseModel: open-source
license: Apache-2.0
currentMajor: "8"
latestReleaseDate: 2026-09-29
githubStargazers: 2456
contributors: 33
social:
  x: https://x.com/exceptionless
  discord: https://discord.gg/xv3sjurVwA
  facebook: https://www.facebook.com/exceptionless
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://exceptionless.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/exceptionless/Exceptionless
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/exceptionless/Exceptionless
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://exceptionless.com/about/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://exceptionless.com/about/
    checkedAt: 2026-11-03
  - field: category
    url: https://exceptionless.com/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/exceptionless/Exceptionless/releases/tag/v2.0.0
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/exceptionless/Exceptionless
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/exceptionless/Exceptionless/blob/v8.10.0/global.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/exceptionless/Exceptionless/blob/v8.10.0/global.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://exceptionless.com/docs/self-hosting/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://exceptionless.com/docs/self-hosting/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://exceptionless.com/docs/self-hosting/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://exceptionless.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://exceptionless.com/pricing/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/exceptionless/Exceptionless/blob/main/LICENSE.txt
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/exceptionless/Exceptionless/releases/tag/v8.10.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/exceptionless/Exceptionless/releases/tag/v8.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/exceptionless/Exceptionless
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/exceptionless/Exceptionless
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Exceptionless collects errors, feature usage and log events from applications and shows them in a web dashboard. Applications send events through client libraries: the .NET client is installed from NuGet, and a JavaScript client is documented alongside it. The server can be run as a Docker image, from source, or on Kubernetes with Helm. The same code is offered as the hosted service at exceptionless.com.

The self-hosted server stores events in Elasticsearch and uses Redis, both set through connection strings. The Kubernetes configuration page names these settings as EX_ConnectionStrings values.

## Worth knowing

The Docker setup that keeps data between runs stores it in an embedded single-node Elasticsearch cluster without backups, and the docs recommend a separate Elasticsearch cluster for production. The hosted service has paid plans with premium features; the free plan is limited to one project and one user.
