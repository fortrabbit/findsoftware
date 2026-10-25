---
id: cmints
name: CMintS
urls:
  home: https://cmints.io/
  repository: https://github.com/cmints/cmints
  docs: https://cmints.io/en/quick-start
category:
  - cms
  - ssg
description: CMS and static site generator for single and multi-language websites, with Markdown pages and EJS themes.
status: stub
maintainer: Manvel Saroyan
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
  - static
templating: ejs
i18n: yes
runsAs:
  - always-on
  - static
renderingModes:
  - static
installMethod: npm (global install)
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-06-14
githubStargazers: 38
npmWeeklyDownloads: 64
contributors: 2
dependentRepos: 2
dependentPackages: 1
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://cmints.io/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/cmints/cmints
    checkedAt: 2026-10-22
  - field: urls
    url: https://cmints.io/en/quick-start
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/cmints/cmints/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/cmints/cmints/languages
    checkedAt: 2026-10-22
  - field: category
    url: https://cmints.io/
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/cmints/cmints/master/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/cmints/cmints/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/cmints/cmints/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/cmints/cmints/master/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://raw.githubusercontent.com/cmints/cmints/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://cmints.io/en/documentation/themes
    checkedAt: 2026-10-22
  - field: i18n
    url: https://cmints.io/
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/cmints/cmints/master/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/cmints/cmints/master/LICENSE
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/cmints/cmints/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/cmints/cmints/releases
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/cmints
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/cmints/cmints
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/cmints/cmints/contributors?anon=true&per_page=100
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/cmints
    checkedAt: 2026-10-22
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/cmints
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/cmints
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

CMintS is a content management system and static site generator for websites in several languages. Its `cmints --start` command serves a folder over HTTP, and `cmints --static` writes the site as static files. Pages are Markdown files, and themes use EJS templates with Less stylesheets. Translations are kept in JSON locale files that follow the page paths, and the [internationalization guide](https://cmints.io/en/documentation/i18n) describes the default locale setting. The [quick start](https://cmints.io/en/quick-start) walks through forking a starter repository and publishing it to GitHub Pages or Netlify.

## Worth knowing

The README documents an integration with Crowdin, a hosted translation service, for exchanging source files and translations.
