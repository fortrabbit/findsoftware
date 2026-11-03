---
id: signoz
name: SigNoz
urls:
  home: https://signoz.io
  repository: https://github.com/SigNoz/signoz
  docs: https://signoz.io/docs/introduction/
  pricing: https://signoz.io/pricing/
category:
  - analytics
description: Open-source observability platform built on OpenTelemetry that covers logs, metrics, traces, alerts and dashboards.
status: active
maintainer: SigNoz Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: javascript
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: MIT, SigNoz Enterprise License
currentMajor: "0"
latestReleaseDate: 2026-10-29
githubStargazers: 32516
contributors: 208
social:
  x: https://x.com/SigNozHQ
  youtube: https://www.youtube.com/@signoz
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://signoz.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/SigNoz/signoz
    checkedAt: 2026-11-03
  - field: urls
    url: https://signoz.io/docs/introduction/
    checkedAt: 2026-11-03
  - field: urls
    url: https://signoz.io/pricing/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/SigNoz/signoz/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://signoz.io/privacy/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/SigNoz/signoz/languages
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/SigNoz/signoz/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://signoz.io/docs/install/linux/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://signoz.io/docs/install/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://signoz.io/docs/install/linux/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://signoz.io/docs/install/kubernetes/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://signoz.io/docs/install/linux/
    checkedAt: 2026-11-03
  - field: databases
    url: https://signoz.io/docs/install/linux/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/SigNoz/signoz/blob/v0.148.1/ee/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/SigNoz/signoz/releases/tag/v0.148.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/SigNoz/signoz/releases/tag/v0.148.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/SigNoz/signoz
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/SigNoz/signoz
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

SigNoz is an observability platform built on OpenTelemetry that brings logs, metrics, traces, alerts and dashboards into one place. Applications send their telemetry to it over OpenTelemetry Protocol (OTLP) on ports 4317 and 4318. The self-hosted stack runs ClickHouse and PostgreSQL as components. It can be installed with Docker through Foundry, on a Linux host through systemd, or on Kubernetes through Helm. SigNoz Inc. maintains it and also runs SigNoz Cloud, a hosted service.

## Worth knowing

Code under the ee/ directory is covered by a separate enterprise license that permits production use only under a subscription. SAML and OIDC single sign-on are listed for SigNoz Cloud and Enterprise Self-Hosted, not for the community edition. The legacy install script and the bundled Compose files are deprecated, and Foundry is the supported installer.
