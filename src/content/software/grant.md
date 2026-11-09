---
id: grant
name: Grant
urls:
  repository: https://github.com/simov/grant
category:
  - auth
description: Node.js OAuth proxy middleware that runs OAuth and OpenID Connect login flows for Express, Koa, Hapi, Fastify and serverless functions.
status: stub
maintainer: Simeon Velichkov
maintainerType: individual
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 12
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2025-02-04
githubStargazers: 4163
npmWeeklyDownloads: 321042
contributors: 46
dependentRepos: 10551
dependentPackages: 49
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/simov/grant
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/simov/grant
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/simov/grant/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/simov/grant/v5.4.24/package.json
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://raw.githubusercontent.com/simov/grant/v5.4.24/package.json
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/simov/grant
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/simov/grant/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/simov/grant/master/LICENSE
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://registry.npmjs.org/grant
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://registry.npmjs.org/grant/latest
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://registry.npmjs.org/grant
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/simov/grant
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/simov/grant/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/grant
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/grant
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/grant
    checkedAt: 2026-11-09
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Grant runs the redirect and callback steps of an OAuth or OpenID Connect login, and hands a Node.js web app the tokens, and optionally the user profile, from the provider. It mounts as middleware on Express, Koa, Hapi or Fastify, or runs as a handler for AWS Lambda, Azure Functions, Google Cloud Functions or Vercel.

Providers are set in a configuration object. Grant uses the app's session to keep state between the redirects of a login, and the README documents the OAuth 1.0a and OAuth 2.0 flows and OpenID Connect.

## Worth knowing

The README warns that the querystring transport can leak private data into server logs. It also says Grant does not verify the signature of an id_token by default.
