---
id: gatsby
name: Gatsby
urls:
  home: https://www.gatsbyjs.com
  repository: https://github.com/gatsbyjs/gatsby
  docs: https://www.gatsbyjs.com/docs/
  plugins: https://www.gatsbyjs.com/plugins/
category:
  - framework
  - ssg
description: React-based framework for building websites from a GraphQL data layer, pre-rendered at build time or rendered on request.
status: active
maintainer: Gatsby, Inc.
maintainerType: company
parent: Netlify
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 18
basedOn:
  - webpack
contentStore:
  - flat-file
templating: jsx
i18n: via plugins, no built-in i18n
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: npm init gatsby
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-02-10
githubStargazers: 55938
npmWeeklyDownloads: 154909
contributors: 4380
pluginCount: 3000
social:
  youtube: https://www.youtube.com/gatsbyjs
wikidata: Q95972615
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/gatsbyjs/gatsby
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/gatsbyjs/gatsby
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/gatsby
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: parent
    url: https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q95972615
    checkedAt: 2026-10-18
  - field: category
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/gatsby/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/gatsbyjs/gatsby
    checkedAt: 2026-10-18
  - field: runtime
    url: https://registry.npmjs.org/gatsby/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/gatsby/latest
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.gatsbyjs.com/docs/how-to/adding-common-features/localization-i18n/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.gatsbyjs.com/docs/conceptual/rendering-options/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://www.gatsbyjs.com/docs/quick-start/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/gatsbyjs/gatsby
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/gatsby/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/gatsby/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/gatsbyjs/gatsby/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/gatsbyjs/gatsby
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/gatsbyjs/gatsby/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/gatsby
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.gatsbyjs.com/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://www.gatsbyjs.com/plugins/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://www.gatsbyjs.com/docs/conceptual/rendering-options
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript · Framework
ai: authored
packagistDownloads: null
---

Gatsby is a React framework for websites. It pulls content into a GraphQL data layer and generates pages from it at build time. It builds on React, webpack and GraphQL, and its default output is static files. Pages can also be rendered on request or produced with Deferred Static Generation. Gatsby, Inc. is part of Netlify, and the Netlify adapter is the only official deployment adapter the docs name.

## Worth knowing

Gatsby Cloud is discontinued, and its customers were pointed to Netlify. Pages rendered on request or with Deferred Static Generation need the build server to keep running, so static hosting covers only the static output.
