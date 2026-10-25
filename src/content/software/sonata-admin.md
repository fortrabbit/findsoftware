---
id: sonata-admin
name: Sonata Admin
urls:
  home: https://docs.sonata-project.org/en/master/
  repository: https://github.com/sonata-project/SonataAdminBundle
  docs: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/
category:
  - admin-panel
description: Symfony bundle that generates an admin interface for creating, listing, editing and deleting an application's data.
status: active
maintainer: Thomas Rabaix
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
databases:
  - mysql
  - postgres
  - mongodb
adminUi: true
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-06-03
githubStargazers: 2125
packagistDownloads: 20195452
contributors: 826
packagistMonthlyDownloads: 198232
dependentRepos: 2269
dependentPackages: 326
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://docs.sonata-project.org/en/master/
    checkedAt: 2026-10-21
  - field: urls
    url: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/sonata-project/SonataAdminBundle/blob/4.x/LICENSE
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle
    checkedAt: 2026-10-21
  - field: runtime
    url: https://repo.packagist.org/p2/sonata-project/admin-bundle.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://repo.packagist.org/p2/sonata-project/admin-bundle.json
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/sonata-project/SonataAdminBundle/blob/4.x/README.md
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/sonata-project/SonataAdminBundle/blob/4.x/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/
    checkedAt: 2026-10-21
  - field: adminUi
    url: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/
    checkedAt: 2026-10-21
  - field: databases
    url: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/
    checkedAt: 2026-10-21
  - field: databases
    url: https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/sonata-project/SonataAdminBundle/blob/4.x/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle/releases/latest
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/sonata-project/admin-bundle.json
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/sonata-project/SonataAdminBundle/contributors
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/sonata-project%2Fadmin-bundle
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/sonata-project%2Fadmin-bundle
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/sonata-project/admin-bundle/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Sonata Admin is a Symfony bundle that generates an admin interface for an application's data. It is installed with Composer into a Symfony application, and its admin pages are placed in blocks through SonataBlockBundle.

The bundle does not reach a database on its own. The [installation guide](https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/) says it needs a storage bundle before it can talk to a database: SonataDoctrineORMAdminBundle for Doctrine ORM, or SonataDoctrineMongoDBAdminBundle for the Doctrine MongoDB ODM.
