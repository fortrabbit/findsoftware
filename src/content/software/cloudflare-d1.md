---
id: cloudflare-d1
name: Cloudflare D1
urls:
  home: https://developers.cloudflare.com/d1/
  docs: https://developers.cloudflare.com/d1/
  pricing: https://developers.cloudflare.com/d1/platform/pricing/
category:
  - database
description: Managed serverless SQL database that Cloudflare runs for Workers and Pages projects, with SQLite's SQL semantics.
status: hosted-service
maintainer: Cloudflare, Inc.
maintainerType: company
firstRelease: 2023
hqCountry: US
databases:
  - sqlite
licenseModel: saas
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://developers.cloudflare.com/d1/
    checkedAt: 2026-10-28
  - field: urls
    url: https://developers.cloudflare.com/d1/
    checkedAt: 2026-10-28
  - field: urls
    url: https://developers.cloudflare.com/d1/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-28
  - field: category
    url: https://developers.cloudflare.com/d1/
    checkedAt: 2026-10-28
  - field: databases
    url: https://developers.cloudflare.com/d1/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://developers.cloudflare.com/d1/platform/changelog/
    checkedAt: 2026-10-28
  - field: urls
    url: https://developers.cloudflare.com/d1/platform/pricing/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Cloudflare D1 is a managed database that Cloudflare runs as a service. Its SQL follows SQLite's semantics, and the [D1 documentation](https://developers.cloudflare.com/d1/) describes querying it from Workers and Pages projects.

## Worth knowing

The pages read describe D1 as a service on Cloudflare's platform, with no installable form. Plan limits set the database size, the storage per account and the number of queries per Worker invocation. A database can be restricted to the European Union or to FedRAMP-compliant data centers; placement is automatic by default.
