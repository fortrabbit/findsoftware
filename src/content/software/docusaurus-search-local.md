---
id: docusaurus-search-local
name: "@easyops-cn/docusaurus-search-local"
urls:
  home: https://easyops-cn.github.io/docusaurus-search-local/
  repository: https://github.com/easyops-cn/docusaurus-search-local
category:
  - search
description: Offline search theme for Docusaurus v2 and v3 that indexes the docs and blog locally, with no external search service.
status: active
maintainer: 优维科技
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 12
basedOn:
  - docusaurus
i18n: UI translations for en, de, vi and zh-CN; index languages from lunr-languages plus zh
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-29
githubStargazers: 907
npmWeeklyDownloads: 249813
contributors: 32
dependentRepos: 586
dependentPackages: 8
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://easyops-cn.github.io/docusaurus-search-local/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/easyops-cn/docusaurus-search-local
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@easyops-cn%2fdocusaurus-search-local
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/easyops-cn/docusaurus-search-local
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/v0.55.3/docusaurus-search-local/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: i18n
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/easyops-cn/docusaurus-search-local/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/easyops-cn/docusaurus-search-local/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/easyops-cn/docusaurus-search-local/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/easyops-cn/docusaurus-search-local
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/easyops-cn/docusaurus-search-local/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/@easyops-cn/docusaurus-search-local
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@easyops-cn%2fdocusaurus-search-local
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@easyops-cn%2fdocusaurus-search-local
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

@easyops-cn/docusaurus-search-local is a search theme for Docusaurus sites. It is added to the Docusaurus configuration as a theme, and it indexes the docs and blog of the site locally, so search does not depend on an external search service. The README describes an option that adds a hash to the index request, so that the index file can be cached for a long time.

The theme ships interface translations for en, de, vi and zh-CN. Other languages are indexed through lunr-languages, and the README names zh as a supported index language.

## Worth knowing

The theme can also show answers from an AI service. The Ask AI option is opt-in, off unless the site sets askAi, and calls an external AI service at a URL the site configures.
