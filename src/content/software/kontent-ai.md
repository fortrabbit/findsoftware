---
id: kontent-ai
name: Kontent.ai
urls:
  home: https://kontent.ai/
  docs: https://kontent.ai/learn/
  pricing: https://kontent.ai/pricing/
category:
  - headless-cms
description: Hosted headless content management platform with a web app for content teams and REST and GraphQL delivery APIs for developers.
status: hosted-service
maintainer: Kontent CZ s.r.o.
maintainerType: company
firstRelease: 2016
hqCountry: CZ
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes, language variants per content item
licenseModel: saas
social:
  x: https://twitter.com/Kontent_ai
  discord: https://discord.com/invite/G3E8nDM5mB
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: name
    url: https://kontent.ai/
    checkedAt: 2026-10-24
  - field: urls
    url: https://kontent.ai/
    checkedAt: 2026-10-24
  - field: urls
    url: https://kontent.ai/terms-of-service/
    checkedAt: 2026-10-24
  - field: category
    url: https://kontent.ai/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://kontent.ai/terms-of-service/
    checkedAt: 2026-10-24
  - field: hqCountry
    url: https://kontent.ai/terms-of-service/
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://kontent.ai/about/
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://kontent.ai/terms-of-service/
    checkedAt: 2026-10-24
  - field: urls
    url: https://kontent.ai/pricing/
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://kontent.ai/learn/docs/architecture/behind-kontent-ai
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://kontent.ai/learn/docs/apis/
    checkedAt: 2026-10-24
  - field: i18n
    url: https://kontent.ai/learn/docs/languages
    checkedAt: 2026-10-24
ai: authored
---

Kontent.ai is a cloud service where content teams write and publish content that developers read through APIs. Editors work in the Kontent.ai web app, which is built with React and TypeScript. Developers read published content through REST and GraphQL APIs. Content is stored in the company's cloud repositories in Azure data centers, in one of four regions, with West Europe in the Netherlands among them.

Content items can have several language variants, and roles set which permissions each user has in a project. Live preview shows an in-context visual of content while it is edited, and it is set up per environment. Single sign-on works with identity providers that use SAML or LDAP.

## Worth knowing

Rate limits apply to the Management API and the Delivery REST API. The [technical limits page](https://kontent.ai/learn/docs/architecture/technical-limits) gives the figures.
