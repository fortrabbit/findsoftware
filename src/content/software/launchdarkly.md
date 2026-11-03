---
id: launchdarkly
name: LaunchDarkly
urls:
  home: https://launchdarkly.com
  docs: https://launchdarkly.com/docs/
  pricing: https://launchdarkly.com/pricing/
category:
  - dev-tool
description: Hosted feature flag and runtime control service that applications read through LaunchDarkly SDKs.
status: hosted-service
maintainer: Catamorphic, Co.
maintainerType: company
headlessApi:
  - rest
licenseModel: saas
social:
  x: https://twitter.com/launchdarkly
  discord: https://discord.com/invite/launchdarklycommunity
  instagram: https://www.instagram.com/launchdarkly/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://launchdarkly.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://launchdarkly.com/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://launchdarkly.com/pricing/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://launchdarkly.com/policies/terms-of-service/
    checkedAt: 2026-11-03
  - field: category
    url: https://launchdarkly.com/docs/home/getting-started/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://launchdarkly.com/docs/api
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
---

LaunchDarkly is a hosted service for feature flags and runtime control. Applications read flag values through LaunchDarkly SDKs, and the docs describe a REST API. Its pricing is usage-based with no per-seat fee, and the pricing page offers a free start. Single sign-on through SAML is included on every plan, and custom roles can be organized into teams.

The service runs in the United States and in an EU instance hosted in AWS Frankfurt, documented on the [EU page](https://launchdarkly.com/docs/home/infrastructure/eu). The company is Catamorphic, Co., a Delaware corporation that trades as LaunchDarkly.

## Worth knowing

The open source Relay Proxy holds one connection to the LaunchDarkly streaming API and proxies it to many clients, so the service itself stays hosted. The EU instance only supports new Enterprise accounts and trials. The SDKs are client libraries and are separate from the service.
