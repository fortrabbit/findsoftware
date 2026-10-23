---
id: acoustic-content
name: Acoustic Content
urls:
  home: https://developer.goacoustic.com/acoustic-content
  docs: https://developer.goacoustic.com/acoustic-content/docs/api
  pricing: https://www.acoustic.com/pricing
category:
  - headless-cms
description: Hosted headless content platform that stores content in its own database and delivers it through REST APIs, with a content UI and a Sites feature.
status: hosted-service
maintainer: Acoustic, L.P.
adminUi: true
headlessApi:
  - rest
i18n: content items carry a locale property
licenseModel: saas
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://developer.goacoustic.com/acoustic-content
    checkedAt: 2026-10-23
  - field: urls
    url: https://developer.goacoustic.com/acoustic-content/docs/api
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.acoustic.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.acoustic.com/pricing
    checkedAt: 2026-10-23
  - field: category
    url: https://developer.goacoustic.com/acoustic-content/docs/api
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://developer.goacoustic.com/acoustic-content/docs/api
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://developer.goacoustic.com/acoustic-content/docs/developing-your-own-website
    checkedAt: 2026-10-23
  - field: i18n
    url: https://developer.goacoustic.com/acoustic-content/docs/rendering
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Headless CMS
ai: authored
---

Acoustic Content is a hosted headless content platform from Acoustic, L.P. It keeps content in its own database and exposes it through [REST APIs](https://developer.goacoustic.com/acoustic-content/docs/api) that retrieve, update and manage content. Editors manage pages and content in a content UI, and each API operation is limited to the user roles allowed to call it.

The Sites feature serves websites from a site application, which the docs describe as an Angular web application hosted on the Content CDN. Individual sites can be mapped to their own hostnames, and in preview mode draft content is overlaid on the published content.

## Worth knowing

The API and the content UI run on Acoustic's infrastructure as a subscription service. Requests are limited per subscription, and calls above the throughput limit receive HTTP 429.
