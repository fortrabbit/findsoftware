---
id: payload
name: Payload
urls:
  home: https://payloadcms.com
  repository: https://github.com/payloadcms/payload
  docs: https://payloadcms.com/docs
  pricing: https://payloadcms.com/get-started
  plugins: https://github.com/payloadcms/payload/tree/main/packages
category:
  - headless-cms
  - framework
  - admin-panel
  - e-commerce
description: TypeScript framework that runs inside a Next.js app and generates an admin panel, database schema and REST, GraphQL and local APIs from one config, used as a headless CMS or application backend.
status: active
maintainer: Payload
maintainerType: company
parent: Figma
hqCountry: US
language: typescript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 20
basedOn:
  - nextjs
contentStore:
  - database
databases:
  - mongodb
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
  - graphql
templating: jsx (Next.js)
i18n: yes, field localization
runsAs:
  - always-on
renderingModes:
  - server
  - static
installMethod: npx create-payload-app, pnpm i payload @payloadcms/next (existing Next.js app)
licenseModel: open-source
license: MIT, MIT
currentMajor: "3"
latestReleaseDate: 2026-10-15
githubStargazers: 45322
contributors: 436
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://payloadcms.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/payloadcms/payload
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/payloadcms/payload
    checkedAt: 2026-10-18
  - field: urls
    url: https://payloadcms.com/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://api.github.com/orgs/payloadcms
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://payloadcms.com/blog/payload-is-joining-figma
    checkedAt: 2026-10-18
  - field: parent
    url: https://payloadcms.com/blog/payload-is-joining-figma
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://api.github.com/orgs/payloadcms
    checkedAt: 2026-10-18
  - field: category
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: language
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: runtime
    url: https://payloadcms.com/docs/getting-started/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/payload/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://payloadcms.com/docs/getting-started/installation
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://payloadcms.com/docs/getting-started/installation
    checkedAt: 2026-10-18
  - field: databases
    url: https://payloadcms.com/docs/getting-started/installation
    checkedAt: 2026-10-18
  - field: databases
    url: https://api.github.com/repos/payloadcms/payload/contents/packages
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: templating
    url: https://payloadcms.com/docs/getting-started/what-is-payload
    checkedAt: 2026-10-18
  - field: i18n
    url: https://payloadcms.com/docs/configuration/localization
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://payloadcms.com/docs/production/deployment
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://payloadcms.com/docs/getting-started/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/payloadcms/payload
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/payload/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://payloadcms.com/get-started
    checkedAt: 2026-10-18
  - field: urls
    url: https://payloadcms.com/get-started
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/payloadcms/payload/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/payloadcms/payload/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/payloadcms/payload
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/payloadcms/payload/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/payloadcms/payload/contents/packages
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://payloadcms.com/docs/production/deployment
    checkedAt: 2026-10-19
figure:
  emoji: 🔌
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

Payload is part of a Next.js application: a config file defines collections, and from them Payload generates a database schema, a React admin panel and REST, GraphQL and local APIs. A project starts from the create-payload-app scaffolder, or Payload is added to an existing Next.js app. Payload joined Figma, and its announcement says the project remains open source. The [deployment guide](https://payloadcms.com/docs/production/deployment) covers Vercel, Netlify, AWS, self-hosted servers and other targets.

## Worth knowing

Payload has no separate server. Hosting follows Next.js, which means a Node.js server or a serverless Next.js host, and uploads need persistent storage or a cloud storage adapter.
