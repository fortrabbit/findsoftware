---
id: cebe-markdown
name: cebe/markdown
urls:
  repository: https://github.com/cebe/markdown
  docs: https://github.com/cebe/markdown/blob/master/README.md
  plugins: https://github.com/cebe/markdown#extensions
category:
  - library
description: PHP library that parses Markdown to HTML in the traditional, GitHub-flavored and Markdown Extra flavors.
status: stub
maintainer: Carsten Brandt
maintainerType: individual
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.4
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2018-03-26
githubStargazers: 1011
packagistDownloads: 36639134
contributors: 11
dependentRepos: 21304
dependentPackages: 150
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/cebe/markdown
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/cebe/markdown/blob/master/README.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/cebe/markdown/master/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/cebe/markdown
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/cebe/markdown/blob/master/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/cebe/markdown/blob/master/README.md
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://raw.githubusercontent.com/cebe/markdown/1.2.1/composer.json
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/cebe/markdown/blob/master/README.md
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/cebe/markdown/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/cebe/markdown
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/cebe/markdown/master/LICENSE
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/cebe/markdown/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/cebe/markdown/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/cebe/markdown/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/cebe/markdown
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/cebe/markdown/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: packagistDownloads
    url: https://packagist.org/packages/cebe/markdown.json
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cebe%2Fmarkdown
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cebe%2Fmarkdown
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

cebe/markdown is a PHP library that parses Markdown text to HTML. It has one parser class per flavor: traditional Markdown, GitHub-flavored Markdown and Markdown Extra. The README describes Markdown Extra as not fully supported.

It runs inside a PHP application and is installed with Composer. The README names the Yii Framework's API documentation and guide among the projects that use it.

## Worth knowing

The parser reads PHPDoc annotations to find the Markdown elements it handles, so a PHP opcache has to keep comments in the code. The README lists extensions to the library written by others.
