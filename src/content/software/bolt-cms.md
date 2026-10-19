---
id: bolt-cms
name: Bolt CMS
urls:
  home: https://boltcms.io
  repository: https://github.com/bolt/core
  docs: https://docs.boltcms.io
  plugins: https://extensions.boltcms.io
category:
  - cms
  - headless-cms
description: Open-source PHP content management system built on Symfony, usable as a traditional or headless CMS.
status: active
maintainer: Two Kings
maintainerType: company
hqCountry: NL
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
contentStore:
  - database
databases:
  - sqlite
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
  - graphql
templating: twig
i18n: yes, built in, field-level translation
runsAs:
  - per-request
installMethod: composer create-project bolt/project, docker (make docker-install), symfony cli
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-09
githubStargazers: 592
contributors: 108
social:
  x: https://twitter.com/boltcms
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://boltcms.io
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: urls
    url: https://boltcms.io/community
    checkedAt: 2026-10-18
  - field: urls
    url: https://boltcms.io
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://boltcms.io/community
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://boltcms.io/community
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://boltcms.io/community
    checkedAt: 2026-10-18
  - field: category
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/bolt/core.json
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: runtime
    url: https://repo.packagist.org/p2/bolt/core.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/bolt/core.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.boltcms.io/5.2/getting-started/requirements
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.boltcms.io/5.2/getting-started/requirements
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.boltcms.io/5.2/installation/installation
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: templating
    url: https://boltcms.io
    checkedAt: 2026-10-18
  - field: i18n
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.boltcms.io/5.2/installation/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/bolt/core
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/bolt/core/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/bolt/core
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/bolt/core/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://boltcms.io/extensions
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.boltcms.io/5.2/installation/installation
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Bolt CMS is a PHP content management system built on Symfony, Doctrine, Twig and API Platform. It works as a traditional site with Twig templates, as a headless backend serving REST and GraphQL, or as both. Content, including field-level translations, is stored in a database, and editors work in a backend under /bolt. Two Kings, a company in the Netherlands, leads development.

## Worth knowing

The public [documentation](https://docs.boltcms.io) covers an older release line than the current one, so its requirements and install steps may trail the latest release. The README records that the previous main maintainer died in early 2024 and that new maintainers took over.
