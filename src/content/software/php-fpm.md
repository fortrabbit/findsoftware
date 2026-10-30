---
id: php-fpm
name: PHP-FPM
urls:
  home: https://www.php.net/
  repository: https://github.com/php/php-src
  docs: https://www.php.net/manual/en/install.fpm.php
category:
  - web-server
description: FastCGI process manager for PHP, built as an optional SAPI in the PHP source tree.
status: active
maintainer: The PHP Group
maintainerType: community
firstRelease: 2010
language: c
runtime:
  - php
hosting:
  - php
runsAs:
  - always-on
installMethod: build PHP from source with --enable-fpm
licenseModel: open-source
license: PHP-3.01
currentMajor: "8"
latestReleaseDate: 2026-10-21
githubStargazers: 41732
contributors: 229
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.php.net/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/php/php-src
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.php.net/manual/en/install.fpm.php
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/php/php-src/php-8.5.12/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/php/php-src/php-8.5.12/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://www.php.net/manual/en/install.fpm.php
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/php/php-src
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.php.net/manual/en/install.fpm.php
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.php.net/manual/en/install.fpm.install.php
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.php.net/manual/en/install.fpm.configuration.php
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/php/php-src/blob/php-5.3.3/NEWS
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/php/php-src/php-8.5.12/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/php/php-src/php-8.5.12/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/php/php-src/releases/tag/php-8.5.12
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/php/php-src/releases/tag/php-8.5.12
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/php/php-src
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/php/php-src/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

PHP-FPM is a FastCGI process manager for PHP, built as an optional SAPI in the PHP source tree. The [manual](https://www.php.net/manual/en/install.fpm.php) calls it a primary PHP FastCGI implementation. It runs in the background by default and is enabled with the `--enable-fpm` configure option when PHP is built from source. Its releases are PHP releases, so the PHP branch support dates apply to it.

## Worth knowing

The manual says php-fpm must not be reachable from an untrusted network.
