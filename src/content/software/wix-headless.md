---
id: wix-headless
name: Wix Headless
urls:
  home: https://www.wix.com/headless
  docs: https://dev.wix.com/docs/go-headless
  pricing: https://www.wix.com/plans
category:
  - headless-cms
  - e-commerce
description: Hosted headless project type from Wix that exposes Wix business APIs to a frontend the creator builds, which Wix hosts or the creator hosts.
status: hosted-service
maintainer: Wix.com Ltd.
maintainerType: company
hqCountry: IL
adminUi: true
headlessApi:
  - rest
i18n: yes, translations managed in a Multilingual dashboard
installMethod: Wix CLI scaffold of an Astro project, hosted by Wix
licenseModel: saas
social:
  discord: https://discord.gg/47gUT9KabP
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://www.wix.com/headless
    checkedAt: 2026-11-04
  - field: urls
    url: https://dev.wix.com/docs/go-headless
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://www.wix.com/about/terms-of-use
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://www.wix.com/about/terms-of-use
    checkedAt: 2026-11-04
  - field: hqCountry
    url: https://www.wix.com/about/privacy
    checkedAt: 2026-11-04
  - field: category
    url: https://dev.wix.com/docs/go-headless
    checkedAt: 2026-11-04
  - field: headlessApi
    url: https://dev.wix.com/docs/go-headless/self-managed-headless/about-self-managed-headless
    checkedAt: 2026-11-04
  - field: adminUi
    url: https://dev.wix.com/docs/go-headless
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://dev.wix.com/docs/go-headless
    checkedAt: 2026-11-04
  - field: i18n
    url: https://dev.wix.com/docs/go-headless/wix-managed-headless/full-integration-astro/feature-guides/add-multilingual-support
    checkedAt: 2026-11-04
  - field: urls
    url: https://dev.wix.com/docs/go-headless
    checkedAt: 2026-11-04
ai: authored
---

Wix Headless is a project type in Wix's hosted platform that exposes Wix business APIs to a frontend the creator builds. The docs describe two routes. In the Wix-managed route, Wix hosts and runs the frontend, and the Wix CLI scaffolds an Astro project. In the self-managed route, the creator hosts a frontend built with any framework and connects it to Wix's backend through the JavaScript SDK or REST API.

The business APIs cover eCommerce, bookings, events, memberships, CMS and blog. A management dashboard comes with the project, and a WordPress site can be moved over with an AI agent.

## Worth knowing

The backend stays on Wix in both routes, so a self-managed frontend still depends on a hosted service.
