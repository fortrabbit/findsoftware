---
id: posthog
name: PostHog
urls:
  home: https://posthog.com
  repository: https://github.com/PostHog/posthog
  docs: https://posthog.com/docs/self-host
  pricing: https://posthog.com/pricing
category:
  - analytics
  - dev-tool
description: Product analytics platform with session replay, feature flags, experiments, error tracking and surveys, self-hosted from its code or run as PostHog Cloud.
status: active
maintainer: PostHog Inc.
maintainerType: company
firstRelease: 2020
hqCountry: US
language: python
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: hobby deploy script
licenseModel: open-core
license: MIT, PostHog Enterprise license (ee directory)
githubStargazers: 40620
contributors: 391
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://posthog.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/PostHog/posthog
    checkedAt: 2026-11-03
  - field: urls
    url: https://posthog.com/docs/self-host
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/PostHog/posthog/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/PostHog/posthog/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/PostHog/posthog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/PostHog/posthog
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/PostHog/posthog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://posthog.com/docs/self-host
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://posthog.com/docs/self-host
    checkedAt: 2026-11-03
  - field: databases
    url: https://posthog.com/docs/self-host/configure/environment-variables
    checkedAt: 2026-11-03
  - field: databases
    url: https://posthog.com/docs/how-posthog-works/clickhouse
    checkedAt: 2026-11-03
  - field: databases
    url: https://posthog.com/docs/self-host/configure/environment-variables
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PostHog/posthog/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PostHog/posthog/blob/master/ee/LICENSE
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://posthog.com/docs/how-posthog-works
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://posthog.com/docs/how-posthog-works
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://posthog.com/docs/how-posthog-works/ingestion-pipeline
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://posthog.com/privacy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/PostHog/posthog/tags
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/PostHog/posthog/blob/master/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/PostHog/posthog
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/PostHog/posthog/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

PostHog is a product analytics platform with session replay, feature flags, experiments and surveys. It is offered as PostHog Cloud and as a self-hosted deployment of the same product. The architecture docs describe a Django web app and REST API, Rust services for event capture, a Node.js worker for ingestion, and ClickHouse, PostgreSQL and Redis as data stores. The README names a one-line deploy script for a hobby instance on Linux with Docker, and the docs describe a Docker Compose deployment that runs everything on a single machine. PostHog Inc. maintains the project.

## Worth knowing

The ee directory falls under the PostHog Enterprise license, which allows production use only with a valid Enterprise license, while the rest of the repository is MIT-licensed. The docs say the project does not do tagged releases for self-hosted PostHog: every commit becomes available to self-hosted instances. The project states that it provides no customer support or guarantees for open source deployments and recommends PostHog Cloud once event volume grows past what it expects a self-hosted instance to handle.
