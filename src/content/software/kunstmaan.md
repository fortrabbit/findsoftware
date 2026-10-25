---
id: kunstmaan
name: Kunstmaan Bundles CMS
urls:
  home: https://kunstmaancms.be
  repository: https://github.com/Kunstmaan/KunstmaanBundlesCMS
  docs: https://kunstmaanbundlescms.readthedocs.io/en/stable/
category:
  - cms
description: Symfony-based content management system, distributed as Symfony bundles, with translation and media managers.
status: active
maintainer: Kunstmaan
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mysql
adminUi: true
templating: twig
i18n: multi-language content with translation manager
runsAs:
  - per-request
installMethod: composer create-project kunstmaan/cms-skeleton
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-09-06
githubStargazers: 413
packagistDownloads: 2405
contributors: 194
packagistMonthlyDownloads: 35
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://kunstmaancms.be
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3.2/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3.2/composer.json
    checkedAt: 2026-10-20
  - field: templating
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3.2/composer.json
    checkedAt: 2026-10-20
  - field: i18n
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://kunstmaanbundlescms.readthedocs.io/en/stable/installation/system-requirements/
    checkedAt: 2026-10-20
  - field: databases
    url: https://kunstmaanbundlescms.readthedocs.io/en/stable/installation/system-requirements/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://kunstmaanbundlescms.readthedocs.io/en/stable/installation/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://kunstmaanbundlescms.readthedocs.io/en/stable/installation/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://kunstmaanbundlescms.readthedocs.io/en/stable/installation/system-requirements/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/Kunstmaan/KunstmaanBundlesCMS/blob/7.3.2/composer.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://kunstmaancms.be
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/Kunstmaan/KunstmaanBundlesCMS/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/kunstmaan/cms-skeleton
    checkedAt: 2026-10-20
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/kunstmaan/cms-skeleton/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Kunstmaan CMS is a content management system built on the Symfony framework and shipped as Symfony bundles, so a site is a Symfony application that includes the CMS. It renders templates with Twig and keeps its content in MySQL, behind a web server such as Apache or Nginx. A new project starts from the kunstmaan/cms-skeleton template with Composer, and the admin section is part of the application.

## Worth knowing

The system requirements page gives PHP 7.1 as the minimum and still describes the Standard Edition, which the installation docs mark deprecated. The composer file of the current release requires PHP 8.1.
