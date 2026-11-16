---
id: php-jwt
name: PHP-JWT
urls:
  repository: https://github.com/googleapis/php-jwt
  docs: https://docs.cloud.google.com/php/docs/reference/php-jwt/latest
category:
  - auth
description: PHP library that encodes and decodes JSON Web Tokens (JWT) conforming to RFC 7519.
status: active
maintainer: Neuman Vong
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
installMethod: composer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "7"
latestReleaseDate: 2026-09-28
githubStargazers: 9803
packagistDownloads: 551868364
contributors: 83
dependentRepos: 44890
dependentPackages: 1772
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/googleapis/php-jwt
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.cloud.google.com/php/docs/reference/php-jwt/latest
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/googleapis/php-jwt/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/firebase/php-jwt.json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/googleapis/php-jwt/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/googleapis/php-jwt
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/googleapis/php-jwt/blob/v7.2.1/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/googleapis/php-jwt/blob/v7.2.1/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/googleapis/php-jwt/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/googleapis/php-jwt/blob/v7.2.1/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/googleapis/php-jwt/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/googleapis/php-jwt/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/googleapis/php-jwt
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/googleapis/php-jwt/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/firebase/php-jwt.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/firebase%2Fphp-jwt
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/firebase%2Fphp-jwt
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
---

PHP-JWT encodes and decodes JSON Web Tokens in PHP. Encoding signs a payload with a key and an algorithm. Decoding takes a key object that names the algorithm the application expects, verifies the signature and the time claims, and returns the payload as a stdClass object. Keys can come from PEM strings, from a JSON Web Key Set, or from a cached key set that fetches the set from a URL and refreshes the cache when a key ID is unknown.

Decoding throws a different exception for an invalid key, an unsupported algorithm, a bad signature, a token used too early or too late, and a malformed token.

## Worth knowing

The README says the application must name the algorithms it accepts, and that decoding header values before verifying the token is not supported. The EdDSA examples use libsodium. PS256 needs phpseclib installed separately, because the OpenSSL extension does not support it.
