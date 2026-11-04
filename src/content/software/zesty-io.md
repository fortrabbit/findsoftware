---
id: zesty-io
name: Zesty.io
urls:
  home: https://www.zesty.io/
  docs: https://docs.zesty.io/docs/getting-started-with-zesty
  pricing: https://www.zesty.io/pricing/
category:
  - headless-cms
description: Hosted headless and hybrid content management platform with a drag-and-drop editor, Parsley templating and REST and GraphQL APIs.
status: hosted-service
maintainer: Zesty.IO Platform, Inc.
maintainerType: company
adminUi: true
headlessApi:
  - rest
  - graphql
templating: parsley
i18n: content editing and delivery in over 160 languages
renderingModes:
  - static
  - server
licenseModel: saas
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: name
    url: https://www.zesty.io/
    checkedAt: 2026-11-04
  - field: urls
    url: https://www.zesty.io/
    checkedAt: 2026-11-04
  - field: urls
    url: https://docs.zesty.io/docs/getting-started-with-zesty
    checkedAt: 2026-11-04
  - field: urls
    url: https://www.zesty.io/pricing/
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://www.zesty.io/legal/end-user-license-agreement/
    checkedAt: 2026-11-04
  - field: category
    url: https://www.zesty.io/
    checkedAt: 2026-11-04
  - field: headlessApi
    url: https://docs.zesty.io/docs/api-overview.md
    checkedAt: 2026-11-04
  - field: headlessApi
    url: https://docs.zesty.io/docs/graphql.md
    checkedAt: 2026-11-04
  - field: templating
    url: https://docs.zesty.io/docs/parsley-index.md
    checkedAt: 2026-11-04
  - field: renderingModes
    url: https://docs.zesty.io/docs/site-generators.md
    checkedAt: 2026-11-04
  - field: adminUi
    url: https://docs.zesty.io/docs/instant-api-read-only.md
    checkedAt: 2026-11-04
  - field: i18n
    url: https://docs.zesty.io/docs/multilingual.md
    checkedAt: 2026-11-04
ai: authored
---

Zesty.io is a hosted content platform for headless and hybrid sites. Content is authored in its Content Manager, and each item gets a JSON endpoint. Pages can be rendered by the platform with the Parsley templating language, or served as JSON to a separate front end through the REST and GraphQL APIs. The docs describe static site generation and server-side rendering as built in. Zesty.IO Platform, Inc. runs the service on Google Cloud Platform, with Fastly in the CDN.

Customers configure multilingual content, instance roles and sign-in through Okta or Microsoft Entra, which both use OpenID Connect.

## Worth knowing

Platform rate limits apply to headless requests, and the docs advise sending requests with a fingerprint based on client IP address and user agent. GraphQL endpoints are off until the developer setting is turned on under Settings in the Manager UI.
