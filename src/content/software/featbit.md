---
id: featbit
name: FeatBit
urls:
  home: https://www.featbit.co
  repository: https://github.com/featbit/featbit
  docs: https://docs.featbit.co
  pricing: https://www.featbit.co/pricing
category:
  - dev-tool
description: Open-source feature flag platform that can be self-hosted or used as FeatBit Cloud, with SDKs for application code.
status: active
maintainer: featbit
firstRelease: 2022
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
databases:
  - postgres
  - mongodb
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: MIT, commercial order terms for licensed features (self-hosted)
currentMajor: "6"
latestReleaseDate: 2026-10-27
githubStargazers: 1954
contributors: 37
social:
  discord: https://discord.gg/ytK9xGJSw3
  youtube: https://www.youtube.com/@featbit
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.featbit.co/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/featbit/featbit
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.featbit.co/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/featbit/featbit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://www.featbit.co/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/featbit/featbit/releases/tag/1.0.0
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/featbit/featbit
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/featbit/featbit/blob/6.1.0/modules/back-end/src/Api/Api.csproj
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/featbit/featbit/blob/6.1.0/modules/back-end/src/Api/Api.csproj
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.featbit.co/tech-stack/infrastructure-components
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.featbit.co/tech-stack/infrastructure-components
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.featbit.co/tech-stack/application-services
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.featbit.co/installation/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/featbit/featbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/featbit/featbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/featbit/featbit/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.featbit.co/tech-stack/application-services
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.featbit.co/tech-stack/application-services
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.featbit.co/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/featbit/featbit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://www.featbit.co/company
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/featbit/featbit/releases/tag/6.1.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/featbit/featbit/releases/tag/6.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/featbit/featbit
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/featbit/featbit
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

FeatBit is an open-source feature flag platform that can be self-hosted or used as FeatBit Cloud, a hosted service at app.featbit.co. Applications connect to it with an official SDK. Self-hosting is documented with Docker Compose, Helm charts, Terraform for AWS, and Microsoft Aspire for Azure Container Apps.

The smallest self-hosted option uses Postgres for the database and the message queue. The larger options add Redis for caching and messaging, Kafka for messaging, and ClickHouse for analytics, and the database can be Postgres or MongoDB.

## Worth knowing

The code is MIT-licensed under an open-core model. Several features need a valid license key, among them scheduled flag changes, SSO and multi-organizations, and the Enterprise plan is a paid self-hosted tier under commercial order terms. The Cloud terms do not cover community or customer-managed self-hosted installs.
