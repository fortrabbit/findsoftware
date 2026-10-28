---
id: netlify-cli
name: Netlify CLI
urls:
  home: https://cli.netlify.com/
  repository: https://github.com/netlify/cli
  docs: https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/
category:
  - dev-tool
description: Command-line interface for the Netlify hosting platform, used to deploy sites, run a local dev server and manage site settings.
status: active
maintainer: Netlify, Inc.
maintainerType: company
firstRelease: 2018
hqCountry: US
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: "npm global: npm install netlify-cli -g"
licenseModel: open-source
license: MIT
currentMajor: "27"
latestReleaseDate: 2026-10-27
githubStargazers: 1934
npmWeeklyDownloads: 479030
contributors: 216
dependentRepos: 11282
dependentPackages: 285
social:
  x: https://x.com/Netlify
  bluesky: https://bsky.app/profile/netlify.com
  forum: https://answers.netlify.com/tag/netlify-cli
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://cli.netlify.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/netlify/cli
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.netlify.com/privacy/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.netlify.com/privacy/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/netlify/cli/releases?per_page=100&page=13
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/netlify/cli
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/netlify/cli/blob/v27.15.0/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/netlify/cli/blob/v27.15.0/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/netlify/cli/blob/v27.15.0/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/netlify/cli/blob/v27.15.0/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/netlify/cli/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/netlify/cli/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/netlify/cli
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/netlify/cli/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/netlify-cli
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/netlify-cli
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/netlify-cli
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Netlify CLI is a TypeScript command-line client for the Netlify hosting platform, installed with npm or Homebrew. It deploys a project to Netlify and runs a local development server, Netlify Dev, so a site can run on the developer's machine before it is deployed. The command reference also lists commands that provision and use hosted services, such as a Postgres database, agent tasks and Netlify Blobs. The source is published on GitHub by Netlify, Inc., which is based in San Francisco.

## Worth knowing

Several commands act on the hosted Netlify platform, which is outside this record. The get-started guide names an older Node.js minimum than the package declares, so the package's own requirement is the one recorded.
