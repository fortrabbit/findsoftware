---
id: symfony-security-bundle
name: SecurityBundle
urls:
  home: https://symfony.com/packages/security-bundle
  repository: https://github.com/symfony/security-bundle
  docs: https://symfony.com/doc/current/security.html
category:
  - auth
description: Symfony bundle that integrates the Security component into the Symfony framework, for user authentication and authorization.
status: active
maintainer: Fabien Potencier
firstRelease: 2011
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
basedOn:
  - symfony
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-04
githubStargazers: 2489
packagistDownloads: 211050082
contributors: 269
packagistMonthlyDownloads: 7248132
dependentRepos: 39056
dependentPackages: 1520
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://symfony.com/doc/current/security.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/packages/security-bundle
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/symfony/security-bundle
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/doc/current/security.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/symfony/security-bundle/blob/v8.1.11/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/symfony/security-bundle.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/symfony/security-bundle
    checkedAt: 2026-11-16
  - field: category
    url: https://symfony.com/packages/security-bundle
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://symfony.com/packages/security-bundle
    checkedAt: 2026-11-16
  - field: runtime
    url: https://symfony.com/packages/security-bundle
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/symfony/security-bundle/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://symfony.com/packages/security-bundle
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/symfony/security-bundle/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/symfony/security-bundle
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/symfony/security-bundle/releases/tags/v8.1.11
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/security-bundle/releases/tags/v8.1.11
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/security-bundle
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/symfony/security-bundle/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/security-bundle.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/security-bundle.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fsecurity-bundle
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fsecurity-bundle
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

SecurityBundle is the Symfony bundle that connects the Security component to the framework. It comes with authenticators for form login, JSON login, HTTP basic, login links, X.509 client certificates and remote users, plus custom authenticators, and the docs cover access tokens through OpenID Connect, OAuth 2.0 token introspection and CAS 2.0. Firewalls and access control rules in the security configuration govern requests.

Users are loaded by a user provider: a Doctrine entity, an LDAP server, a memory configuration or a chain of these. The bundle also provides password hashing, and the docs cover CSRF protection and Remember Me.

## Worth knowing

For social login through providers such as Google, Facebook or Twitter, the docs point to a community bundle and an OAuth client package.
