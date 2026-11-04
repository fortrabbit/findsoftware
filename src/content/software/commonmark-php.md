---
id: commonmark-php
name: league/commonmark
urls:
  home: https://commonmark.thephpleague.com
  repository: https://github.com/thephpleague/commonmark
  docs: https://commonmark.thephpleague.com/
  plugins: https://packagist.org/packages/league/commonmark?type=commonmark-extension
category:
  - library
description: PHP Markdown parser that fully supports the CommonMark and GitHub-Flavored Markdown specifications.
status: active
maintainer: Colin O'Dell
maintainerType: individual
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
installMethod: composer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-10-31
githubStargazers: 2982
packagistDownloads: 508517014
contributors: 129
dependentRepos: 238335
dependentPackages: 477
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://commonmark.thephpleague.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/thephpleague/commonmark
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/thephpleague/commonmark/blob/2.10/README.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/thephpleague/commonmark/blob/2.10.7/LICENSE
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://commonmark.thephpleague.com/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/thephpleague/commonmark
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/thephpleague/commonmark/blob/2.10/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/thephpleague/commonmark/blob/2.10/README.md
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/thephpleague/commonmark/blob/2.10.7/composer.json
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/thephpleague/commonmark/blob/2.10/README.md
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/thephpleague/commonmark/blob/2.10/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/thephpleague/commonmark
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/thephpleague/commonmark/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/thephpleague/commonmark/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/thephpleague/commonmark/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/thephpleague/commonmark
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/thephpleague/commonmark/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: packagistDownloads
    url: https://packagist.org/packages/league/commonmark.json
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fcommonmark
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Fcommonmark
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

league/commonmark is a PHP library that parses Markdown text to HTML. Its default converter follows the CommonMark specification, and a second converter class adds the GitHub-Flavored Markdown features: autolinks, disallowed raw HTML, strikethrough, tables and task lists. A PHP application calls the converter from its own code once Composer has installed the package.

The [documentation](https://commonmark.thephpleague.com/) covers configuration and customization. Colin O'Dell created the library and, according to the README, is its primary maintainer.

## Worth knowing

Raw HTML and unsafe links pass through by default. The README advises setting the html_input and allow_unsafe_links options for untrusted input, and filtering raw HTML further when it is allowed. Only UTF-8 and ASCII input is supported, so other encodings need converting first.
