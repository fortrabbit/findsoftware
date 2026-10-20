---
id: roadiz
name: Roadiz
urls:
  home: https://docs.roadiz.io
  repository: https://github.com/roadiz/core-bundle-dev-app
  docs: https://docs.roadiz.io
category:
  - cms
  - headless-cms
description: Symfony-based headless and polymorphic CMS that organizes content as a tree of typed nodes.
status: active
maintainer: Rezo Zero
maintainerType: company
hqCountry: FR
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mariadb
  - mysql
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes
runsAs:
  - per-request
installMethod: composer create-project
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-17
githubStargazers: 6
packagistDownloads: 13659
contributors: 8
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/roadiz/core-bundle-dev-app
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.rezo-zero.com/legal/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.rezo-zero.com/legal/
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://www.rezo-zero.com/legal/
    checkedAt: 2026-10-20
  - field: category
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: language
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: templating
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: i18n
    url: https://docs.roadiz.io/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.roadiz.io/developer/first-steps/installation.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.roadiz.io/developer/first-steps/requirements.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/roadiz/core-bundle-dev-app
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/roadiz/core-bundle.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/roadiz/core-bundle.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/roadiz/core-bundle.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/roadiz/core-bundle-dev-app
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/roadiz/core-bundle-dev-app/contributors?anon=true&per_page=100
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Roadiz is a content management system built on the Symfony framework. Content is organized as a tree of typed nodes, and the back office theme is called Rozier.

A site can be built as classic pages rendered with Twig templates or as a headless site that exposes content through API Platform as a REST API. A new project starts with `composer create-project` from the roadiz/skeleton package, described in the [installation guide](https://docs.roadiz.io/developer/first-steps/installation.html).

## Worth knowing

The [requirements page](https://docs.roadiz.io/developer/first-steps/requirements.html) says Roadiz is not meant to be deployed directly to a production server out of the box. It is a Symfony application configured and customized in a development environment first. Deployment needs cache clearing and migrations, which may require shell access.
