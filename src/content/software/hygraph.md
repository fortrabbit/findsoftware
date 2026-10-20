---
id: hygraph
name: Hygraph
urls:
  home: https://hygraph.com
  repository: https://github.com/hygraph
  docs: https://hygraph.com/docs
  pricing: https://hygraph.com/pricing
  plugins: https://hygraph.com/marketplace
category:
  - headless-cms
description: Hosted headless content management system with a GraphQL content API and content federation from remote sources.
status: hosted-service
maintainer: Hygraph GmbH
maintainerType: company
hqCountry: DE
adminUi: true
headlessApi:
  - graphql
i18n: content localization as a core feature, several locales per entry
licenseModel: saas
githubStargazers: 616
npmWeeklyDownloads: 2881
social:
  x: https://twitter.com/hygraph
  youtube: https://www.youtube.com/@Hygraph
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://hygraph.com/about
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/orgs/hygraph
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/orgs/hygraph
    checkedAt: 2026-10-18
  - field: urls
    url: https://hygraph.com/docs
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://hygraph.com/imprint
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://hygraph.com/about
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://hygraph.com/about
    checkedAt: 2026-10-18
  - field: category
    url: https://hygraph.com/pricing
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://hygraph.com/docs
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://hygraph.com/pricing
    checkedAt: 2026-10-18
  - field: i18n
    url: https://hygraph.com/docs/guides/localization
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://hygraph.com/pricing
    checkedAt: 2026-10-18
  - field: urls
    url: https://hygraph.com/pricing
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@hygraph/management-sdk
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/hygraph/hygraph-examples
    checkedAt: 2026-10-18
  - field: urls
    url: https://hygraph.com/marketplace
    checkedAt: 2026-10-18
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Headless CMS
ai: authored
---

Hygraph is a hosted headless content management system, renamed from GraphCMS in 2022 and headquartered in Berlin. Editors work in a hosted web app, and content is read through a GraphQL Content API that also accepts mutations. A content federation feature brings entries from remote sources into the same API. Localization is part of the content model, so one entry can hold several locales.

## Worth knowing

Hygraph runs only as a hosted service, so every read goes through its API. Uncached requests are rate limited, and the limit depends on the plan.
