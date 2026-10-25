---
id: strapi
name: Strapi
urls:
  home: https://strapi.io
  repository: https://github.com/strapi/strapi
  docs: https://docs.strapi.io
  pricing: https://strapi.io/pricing-self-hosted
  plugins: https://community.strapi.io/marketplace
category:
  - headless-cms
description: Open-source headless content management system written in JavaScript and TypeScript, with an admin panel and REST and GraphQL APIs.
status: active
maintainer: Strapi, Inc.
maintainerType: company
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - react
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes, core feature on the free plan; AI translation on Growth or Enterprise
runsAs:
  - always-on
renderingModes:
  - api-only
installMethod: npx create-strapi@latest, npm create strapi@latest
licenseModel: open-core
license: MIT (Community Edition); ee/ directories under the Strapi Enterprise license, NOASSERTION, SEE LICENSE IN LICENSE
currentMajor: "5"
latestReleaseDate: 2026-10-14
githubStargazers: 73332
npmWeeklyDownloads: 131609
contributors: 344
httpArchiveSites: 14
dependentRepos: 2962
dependentPackages: 110
social:
  x: https://x.com/strapijs
  discord: https://discord.strapi.io
wikidata: Q105826887
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://strapi.io/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/strapi/strapi
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/strapi/strapi
    checkedAt: 2026-10-18
  - field: urls
    url: https://strapi.io/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://strapi.io/terms
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/strapi/strapi/blob/main/LICENSE
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://strapi.io/terms
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://strapi.io/terms
    checkedAt: 2026-10-18
  - field: category
    url: https://strapi.io/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@strapi/strapi/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://strapi.io/
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.strapi.io/cms/installation/cli
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/@strapi/strapi/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.strapi.io/cms/installation/cli
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.strapi.io/cms/installation/cli
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.strapi.io/cms/installation/cli
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.strapi.io/cms/intro
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.strapi.io/cms/intro
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.strapi.io/cms/features/internationalization
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.strapi.io/cms/intro
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.strapi.io/cms/installation/cli
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/strapi/strapi/blob/main/LICENSE
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/strapi/strapi
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/@strapi/strapi/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/strapi/strapi/blob/main/LICENSE
    checkedAt: 2026-10-18
  - field: urls
    url: https://strapi.io/pricing-self-hosted
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/strapi/strapi/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/strapi/strapi/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/strapi/strapi
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/strapi/strapi/contributors
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@strapi/strapi
    checkedAt: 2026-10-18
  - field: urls
    url: https://strapi.io/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Special:EntityData/Q105826887.json
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.strapi.io/cms/deployment
    checkedAt: 2026-10-19
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40strapi%2Fstrapi
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40strapi%2Fstrapi
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Strapi is a Node.js server that holds content in a SQL database, where editors manage it in an admin panel and sites read it through REST and GraphQL. Strapi renders no website itself, so a site needs a separate frontend that calls the API. The server is a long-running Node.js process, and the [deployment guide](https://docs.strapi.io/cms/deployment) recommends running it under a process manager such as PM2. Strapi builds no official container image. The company Strapi, Inc. offers the software and a hosted service, and the repository copyright names Strapi Solutions SAS.

## Worth knowing

The Community Edition is MIT licensed, but directories named ee fall under an enterprise license. Several features, including SSO, review workflows and audit logs, sit in the Enterprise plan.
