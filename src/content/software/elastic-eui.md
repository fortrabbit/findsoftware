---
id: elastic-eui
name: Elastic UI
urls:
  home: https://eui.elastic.co/
  repository: https://github.com/elastic/eui
  docs: https://eui.elastic.co/docs/getting-started/setup/
category:
  - ui-library
description: React component library, published as @elastic/eui, that Elastic uses to build its React applications.
status: active
maintainer: Elasticsearch B.V.
maintainerType: company
firstRelease: 2017
language: javascript
basedOn:
  - react
i18n: yes
installMethod: yarn
licenseModel: source-available
license: SSPL-1.0 OR Elastic-2.0, Elastic-2.0
currentMajor: "123"
latestReleaseDate: 2026-10-19
githubStargazers: 6377
npmWeeklyDownloads: 125222
contributors: 300
dependentRepos: 444
dependentPackages: 32
social:
  forum: https://github.com/elastic/eui/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://eui.elastic.co/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: urls
    url: https://eui.elastic.co/docs/getting-started/setup/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://registry.npmjs.org/@elastic/eui
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/elastic/eui/blob/main/NOTICE.txt
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.elastic.co/legal
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/elastic/eui/blob/v123.2.0/wiki/consuming-eui/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/elastic/eui/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/elastic/eui/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/elastic/eui/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/elastic/eui/releases/tag/v123.2.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/elastic/eui/releases/tag/v123.2.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/elastic/eui
    checkedAt: 2026-10-26
  - field: i18n
    url: https://eui.elastic.co/docs/utilities/i18n/
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/@elastic/eui
    checkedAt: 2026-10-26
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40elastic%2Feui
    checkedAt: 2026-10-26
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40elastic%2Feui
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

The Elastic UI Framework (EUI) is a collection of React UI components that Elastic uses to build its own React applications. The install guide says to add it with yarn and states that npm is not supported, although the package is published on npm. The guide lists React-side peer dependencies to install alongside it, among them Emotion, which EUI uses for styling and theming. Elasticsearch B.V. maintains it.

## Worth knowing

The source is dual-licensed under the Server Side Public License and the Elastic License 2.0, and some files carry another license in their header. For use outside Kibana, the README points to Elastic's [licensing FAQ](https://www.elastic.co/pricing/faq/licensing), which says an application that is not a hosted or managed service may not be affected at all and asks readers to contact Elastic for clarification.
