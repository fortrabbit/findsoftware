---
id: guzzle
name: Guzzle
urls:
  home: https://docs.guzzlephp.org/
  repository: https://github.com/guzzle/guzzle
  docs: https://docs.guzzlephp.org/en/stable/
category:
  - library
description: PHP HTTP client library for sending HTTP requests and integrating with web services.
status: active
maintainer: Michael Dowling
firstRelease: 2011
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-10-25
githubStargazers: 23446
packagistDownloads: 1152370109
contributors: 348
dependentRepos: 357489
dependentPackages: 28614
social:
  forum: https://stackoverflow.com/questions/tagged/guzzle
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://docs.guzzlephp.org/en/stable/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/guzzle/guzzle
    checkedAt: 2026-11-09
  - field: urls
    url: https://docs.guzzlephp.org/en/stable/
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/guzzle/guzzle/tags
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/guzzle/guzzle/8.3/LICENSE
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/guzzle/guzzle/blob/8.3/README.md
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/guzzle/guzzle
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/guzzle/guzzle/blob/8.3/README.md
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/guzzle/guzzle/blob/8.3.1/composer.json
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/guzzle/guzzle/blob/8.3/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://github.com/guzzle/guzzle/blob/8.3/README.md
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/guzzle/guzzle/8.3/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/guzzle/guzzle/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/guzzle/guzzle/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/guzzle/guzzle
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/guzzle/guzzle/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: packagistDownloads
    url: https://packagist.org/packages/guzzlehttp/guzzle.json
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/guzzlehttp%2Fguzzle
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/guzzlehttp%2Fguzzle
    checkedAt: 2026-11-09
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

Guzzle is a PHP HTTP client, installed with Composer, for sending requests and reading responses. It sends synchronous and asynchronous requests through one interface, streams large uploads and downloads, and uses PSR-7 message objects so other PSR-7 libraries can work with it. The HTTP transport sits behind an abstraction, so application code does not depend on cURL, PHP streams or sockets directly. Middleware lets an application change or compose client behavior.

## Worth knowing

The README marks the previous major line as Maintenance rather than current. The docs overview states an older PHP minimum than the package manifest, so the manifest is the one to check.
