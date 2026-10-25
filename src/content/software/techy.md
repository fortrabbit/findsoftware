---
id: techy
name: Techy
urls:
  home: https://krasimir.github.io/techy/
  repository: https://github.com/krasimir/techy
category:
  - cms
description: Flat CMS that turns Markdown files into HTML pages and lets pages run JavaScript expressions, built on Gulp and AbsurdJS.
status: stub
maintainer: Krasimir Tsonev
maintainerType: individual
firstRelease: 2014
runtime:
  - node
hosting:
  - static
templating: javascript expressions in markdown
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2017-08-10
githubStargazers: 250
npmWeeklyDownloads: 30
contributors: 3
dependentRepos: 4
dependentPackages: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/krasimir/techy
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/krasimir/techy/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/krasimir/techy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/krasimir/techy/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/techy/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/krasimir/techy/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/techy
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/techy/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/techy
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/krasimir/techy
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/krasimir/techy/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/techy
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/techy
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/techy
    checkedAt: 2026-10-25
ai: authored
---

Techy is a flat CMS: content lives in Markdown files in a folder, and Techy converts them to HTML pages without a database. A Markdown page can hold JavaScript expressions between the markers <% and %>, which read values set on other pages or call functions the project defines, and a layout file wraps the page content. Techy is built with Node.js, Gulp and AbsurdJS. Its build writes the final files to a _dist folder, and the project's documentation says that folder holds the files to upload to the server. It is installed from npm and run from the command line in the folder that holds the Markdown files.
