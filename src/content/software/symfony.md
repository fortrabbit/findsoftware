---
id: symfony
name: Symfony
urls:
  home: https://symfony.com
  repository: https://github.com/symfony/symfony
  docs: https://symfony.com/doc/current/index.html
  plugins: https://symfony.com/bundles
category:
  - framework
description: PHP full-stack web framework built from a set of reusable, standalone components.
status: active
maintainer: Symfony SAS
maintainerType: company
hqCountry: FR
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
databases:
  - mysql
  - mariadb
  - postgres
  - mongodb
templating: twig
i18n: yes
runsAs:
  - per-request
renderingModes:
  - server
installMethod: symfony new (Symfony CLI), composer create-project symfony/skeleton
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-10-14
githubStargazers: 31191
packagistDownloads: 88119012
packagistMonthlyDownloads: 282085
httpArchiveSites: 10960
dependentRepos: 22779
dependentPackages: 3530
social:
  x: https://twitter.com/symfony
  bluesky: https://bsky.app/profile/symfony.com
  mastodon: https://mastodon.social/@symfony
  forum: https://github.com/symfony/symfony/discussions
wikidata: Q1322933
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://symfony.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: urls
    url: https://symfony.com/doc/current/setup.html
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://sensiolabs.com/legal/notice
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://sensiolabs.com/legal/notice
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://sensiolabs.com/legal/notice
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q1322933
    checkedAt: 2026-10-18
  - field: category
    url: https://symfony.com
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: runtime
    url: https://symfony.com/doc/current/setup.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/symfony/symfony.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://symfony.com/doc/current/setup.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://symfony.com/doc/current/doctrine.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://symfony.com
    checkedAt: 2026-10-18
  - field: i18n
    url: https://symfony.com/doc/current/translation.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://symfony.com
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://symfony.com/doc/current/setup.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/symfony/symfony/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/symfony/symfony/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/symfony/symfony
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/symfony.json
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/framework-bundle.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://symfony.com/bundles
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://symfony.com/doc/current/setup.html
    checkedAt: 2026-10-19
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fsymfony
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fsymfony
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/symfony/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Symfony is a PHP full-stack web framework assembled from reusable components that can also be installed on their own. A project starts from the Symfony CLI or a Composer skeleton and uses Twig for templates. Database access comes through Doctrine, which the docs cover but which stays optional; it supports relational databases such as MySQL and PostgreSQL as well as MongoDB. Ready-made features are added as bundles. A Docker setup is linked from the docs and maintained outside the framework repository. Symfony SAS, based in France, holds the trademark.

## Worth knowing

Standard releases get bug and security fixes for eight months, while LTS releases get bug fixes for three years and security fixes for four, so the version chosen sets the support window.
