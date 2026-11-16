---
id: php-markdown
name: PHP Markdown
urls:
  home: https://michelf.ca/projects/php-markdown/
  repository: https://github.com/michelf/php-markdown
  docs: https://michelf.ca/projects/php-markdown/configuration/
category:
  - library
description: PHP parser for Markdown and Markdown Extra text, a port to PHP of John Gruber's Markdown program.
status: stub
maintainer: Michel Fortin
maintainerType: individual
firstRelease: 2004
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
latestReleaseDate: 2022-09-26
githubStargazers: 3459
packagistDownloads: 58189807
contributors: 46
dependentRepos: 10894
dependentPackages: 414
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://michelf.ca/projects/php-markdown/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/michelf/php-markdown
    checkedAt: 2026-11-16
  - field: urls
    url: https://michelf.ca/projects/php-markdown/configuration/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/michelf/php-markdown/blob/lib/License.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://michelf.ca/projects/php-markdown/classic/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/michelf/php-markdown/blob/lib/Readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/michelf/php-markdown
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/michelf/php-markdown/blob/2.0.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/michelf/php-markdown/blob/2.0.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/michelf/php-markdown/blob/lib/Readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/michelf/php-markdown/blob/2.0.0/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/michelf/php-markdown/tags?per_page=100
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/michelf/php-markdown.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/michelf/php-markdown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/michelf/php-markdown/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/michelf/php-markdown.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/michelf%2Fphp-markdown
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/michelf%2Fphp-markdown
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

PHP Markdown converts Markdown text to HTML. The package holds two parsers: Markdown, which handles the Markdown syntax, and MarkdownExtra, which adds the Markdown Extra syntax for footnotes, attribute blocks and fenced code blocks. Each parser has a static call that uses the default settings, and can be instantiated to change settings such as the prefix of footnote IDs or a function that rewrites link URLs.

The [configuration page](https://michelf.ca/projects/php-markdown/configuration/) lists the settings for both parsers. The README calls the parser a PHP port of the Markdown program that John Gruber wrote.

## Worth knowing

The README says an empty result can mean the PCRE backtrack limit is too low, and that it may need raising above one million. The package does not include the classic version, which has a plugin interface for WordPress; the README says that package is separate.
