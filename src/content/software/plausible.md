---
id: plausible
name: Plausible Analytics
urls:
  home: https://plausible.io
  repository: https://github.com/plausible/analytics
  docs: https://plausible.io/docs
  pricing: https://plausible.io
category:
  - analytics
description: Privacy-friendly web analytics, offered as a managed cloud service and as the self-hosted Plausible Community Edition.
status: active
maintainer: Plausible Insights OÜ
maintainerType: company
language: elixir
runtime:
  - beam
hosting:
  - elixir
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0-or-later
currentMajor: "3"
latestReleaseDate: 2026-05-15
githubStargazers: 29546
contributors: 119
social:
  forum: https://github.com/plausible/analytics/discussions/categories/self-hosted-support
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://plausible.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/plausible/analytics
    checkedAt: 2026-10-19
  - field: urls
    url: https://plausible.io/docs
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://plausible.io/imprint
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://plausible.io/about
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/plausible/analytics
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/plausible/analytics/blob/v3.2.1/.tool-versions
    checkedAt: 2026-10-19
  - field: databases
    url: https://github.com/plausible/analytics/blob/v3.2.1/mix.exs
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://github.com/plausible/community-edition
    checkedAt: 2026-10-19
  - field: category
    url: https://plausible.io
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/plausible/analytics
    checkedAt: 2026-10-19
  - field: license
    url: https://plausible.io/docs/self-hosting
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://plausible.io/docs/self-hosting
    checkedAt: 2026-10-19
  - field: urls
    url: https://plausible.io
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/plausible/analytics/releases/tag/v3.2.1
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/plausible/analytics/releases/tag/v3.2.1
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/plausible/analytics
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/plausible/analytics
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://github.com/plausible/community-edition
    checkedAt: 2026-10-19
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

Plausible Analytics is web analytics software from a company that describes itself as independent, open source and based in the EU. The software is written in Elixir and stores its data in PostgreSQL and ClickHouse. The self-hosted Community Edition is installed with Docker from a separate deployment repository, and the managed cloud service is built and hosted in the EU.

## Worth knowing

The cloud service and the Community Edition are released separately. The cloud ships several times per week, while the [self-hosting docs](https://plausible.io/docs/self-hosting) describe the Community Edition as a long-term release published twice per year. Marketing funnels, user journeys, ecommerce revenue goals, SSO and the sites API are not available in the Community Edition.
