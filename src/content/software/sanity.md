---
id: sanity
name: Sanity
urls:
  home: https://www.sanity.io
  repository: https://github.com/sanity-io/sanity
  docs: https://www.sanity.io/docs
  pricing: https://www.sanity.io/pricing
  plugins: https://www.sanity.io/plugins
category:
  - headless-cms
description: Hosted content platform that pairs an open-source, React-based editing studio with a hosted real-time content database queried through GROQ or GraphQL.
status: hosted-service
maintainer: Sanity US Inc.
maintainerType: company
language: typescript
runtime:
  - node
runtimeMin: node 22
adminUi: true
headlessApi:
  - groq
  - graphql
i18n: field-level and document-level localization
renderingModes:
  - spa
installMethod: npm create sanity@latest
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-13
githubStargazers: 6364
npmWeeklyDownloads: 596741
contributors: 187
social:
  x: https://x.com/sanity_io
  bluesky: https://bsky.app/profile/sanity.io
  discord: https://discord.com/invite/sanity-1304483263171264613
  youtube: https://www.youtube.com/@sanity_io
wikidata: Q56242360
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.sanity.io/pricing
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/sanity-io/sanity
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/sanity-io/sanity
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.sanity.io/docs/studio/installation
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.sanity.io/legal/tos
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.sanity.io/legal/tos
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q56242360
    checkedAt: 2026-10-18
  - field: category
    url: https://www.sanity.io/pricing
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/sanity-io/sanity
    checkedAt: 2026-10-18
  - field: runtime
    url: https://www.sanity.io/docs/studio/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://www.sanity.io/docs/studio/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/sanity/latest
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://www.sanity.io/docs/studio/deployment
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://www.sanity.io/docs/content-lake/graphql
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.sanity.io/docs/studio/localization
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://www.sanity.io/docs/studio/installation
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.sanity.io/docs/studio/deployment
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/sanity-io/sanity
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.sanity.io/docs/studio/deployment
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.sanity.io/pricing
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/sanity-io/sanity/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/sanity-io/sanity
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/sanity-io/sanity/contributors
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/sanity
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.sanity.io/plugins
    checkedAt: 2026-10-18
figure:
  emoji: 🔌
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

Sanity is a hosted content platform made of two parts: Sanity Studio, an editing interface, and the Content Lake, a hosted database that the studio connects to. Studio is an open-source React single-page app that runs in the browser and is created with one npm command. Content is queried through GROQ, and GraphQL APIs can also be deployed. Sanity US Inc. operates the platform. The studio can be deployed with the Sanity CLI or self-hosted as a static single-page app on any host that supports single-page-app routing, while the [Studio deployment guide](https://www.sanity.io/docs/studio/deployment) states that the Content Lake stays on Sanity's infrastructure.

## Worth knowing

Content storage exists only as a hosted service, so a self-hosted studio still depends on Sanity's APIs to read and write content. The hosted API applies rate limits per IP address and per dataset.
