---
id: league-html-to-markdown
name: HTML To Markdown for PHP
urls:
  repository: https://github.com/thephpleague/html-to-markdown
  docs: https://github.com/thephpleague/html-to-markdown/blob/master/README.md
category:
  - library
description: PHP library that converts HTML documents to Markdown text.
status: active
maintainer: Colin O'Dell
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.2
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-19
githubStargazers: 1909
packagistDownloads: 40606944
contributors: 44
dependentRepos: 1581
dependentPackages: 132
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/thephpleague/html-to-markdown
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/thephpleague/html-to-markdown/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/thephpleague/html-to-markdown/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fhtml-to-markdown
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/thephpleague/html-to-markdown
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/thephpleague/html-to-markdown/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/thephpleague/html-to-markdown/blob/5.2.3/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/thephpleague/html-to-markdown/blob/5.2.3/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/thephpleague/html-to-markdown/blob/master/README.md
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/league/html-to-markdown.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fhtml-to-markdown
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fhtml-to-markdown
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/thephpleague/html-to-markdown
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/thephpleague/html-to-markdown/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/thephpleague/html-to-markdown/releases/tag/5.2.3
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/thephpleague/html-to-markdown/releases/tag/5.2.3
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/thephpleague/html-to-markdown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/thephpleague/html-to-markdown/contributors?per_page=1
    checkedAt: 2026-11-16
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

HTML To Markdown for PHP converts an HTML document or fragment into Markdown text. A converter object takes the HTML string and returns Markdown. Options strip tags, remove nodes, keep comments and set how line breaks, links and bold or italic text are written. Tables are converted only after a table converter is added to the environment. The library reads HTML through PHP's DOM and XML extensions.

The README links league/commonmark and three other libraries for the opposite direction, Markdown to HTML.

## Worth knowing

By default the library keeps HTML tags that have no Markdown equivalent, such as span, div, iframe and script, in the output. The strip_tags and remove_nodes options change that.
