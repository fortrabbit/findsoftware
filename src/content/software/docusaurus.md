---
id: docusaurus
name: Docusaurus
urls:
  home: https://docusaurus.io
  repository: https://github.com/facebook/docusaurus
  docs: https://docusaurus.io/docs
  plugins: https://docusaurus.io/community/resources
category:
  - ssg
description: React-based static site generator for documentation websites and blogs written in Markdown and MDX.
status: active
maintainer: Meta Platforms, Inc.
maintainerType: company
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
basedOn:
  - react
contentStore:
  - flat-file
templating: jsx, mdx
i18n: built-in i18n support
runsAs:
  - static
renderingModes:
  - static
installMethod: npx create-docusaurus@latest my-website classic
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-07-10
githubStargazers: 66517
npmWeeklyDownloads: 864860
contributors: 1367
social:
  x: https://x.com/docusaurus
  discord: https://discord.gg/docusaurus
  subreddit: https://www.reddit.com/r/docusaurus/
wikidata: Q126201445
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: urls
    url: https://docusaurus.io/docs/installation
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/docusaurus
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://docusaurus.io/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://docusaurus.io/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q126201445
    checkedAt: 2026-10-18
  - field: category
    url: https://docusaurus.io/docs/installation
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@docusaurus/core/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docusaurus.io/docs/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/@docusaurus/core/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docusaurus.io/docs/installation
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docusaurus.io/
    checkedAt: 2026-10-18
  - field: templating
    url: https://docusaurus.io/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docusaurus.io/docs/i18n/introduction
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docusaurus.io/docs/deployment
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docusaurus.io/docs/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/@docusaurus/core/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/@docusaurus/core/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/facebook/docusaurus/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/facebook/docusaurus
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/facebook/docusaurus/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@docusaurus/core
    checkedAt: 2026-10-18
  - field: urls
    url: https://docusaurus.io/community/resources
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docusaurus.io/docs/deployment
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
---

Docusaurus builds documentation sites and blogs from Markdown and MDX files, where MDX lets React components sit inside the text. Meta Platforms, Inc. publishes it, and the repository lives in the facebook GitHub organization. A build writes static files to a build directory, so the output needs only static file hosting. The [deployment guide](https://docusaurus.io/docs/deployment) describes static rendering only, with no server-side rendering, and says a site can generally work without JavaScript. Internationalization is built in, and the blog and docs features come from official plugins.
