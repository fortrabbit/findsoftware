---
id: mukurtu
name: Mukurtu CMS
urls:
  home: https://mukurtu.org
  repository: https://github.com/MukurtuCMS/Mukurtu-CMS
  docs: https://github.com/MukurtuCMS/Mukurtu-CMS/wiki
category:
  - cms
  - wiki
description: Open-source content management platform for managing and sharing digital cultural heritage, distributed as a Drupal installation profile.
status: active
maintainer: Washington State University
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
basedOn:
  - drupal
databases:
  - mariadb
  - mysql
installMethod: composer create-project mukurtu/mukurtu-template
licenseModel: open-source
license: GPL-3.0, GPL-3.0-or-later, GPL version 3
currentMajor: "4"
latestReleaseDate: 2026-10-05
githubStargazers: 33
packagistDownloads: 1355
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://mukurtu.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/MukurtuCMS/Mukurtu-CMS
    checkedAt: 2026-10-20
  - field: urls
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://mukurtu.org
    checkedAt: 2026-10-20
  - field: category
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/composer.json
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/composer.json
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/MukurtuCMS/Mukurtu-CMS
    checkedAt: 2026-10-20
  - field: runtime
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/MukurtuCMS/Mukurtu-CMS
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/MukurtuCMS/Mukurtu-CMS/main/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://mukurtu.org
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/MukurtuCMS/Mukurtu-CMS
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/MukurtuCMS/Mukurtu-CMS/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/MukurtuCMS/Mukurtu-CMS
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/mukurtu/mukurtu.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/mukurtu/mukurtu.json
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Mukurtu CMS is an open-source platform for managing and sharing digital cultural heritage, built with Indigenous communities. It is distributed as a Drupal installation profile, installed with Composer on top of Drupal core.

## Worth knowing

The README lists poppler-utils for PDF thumbnails and FFmpeg for video thumbnails as server requirements. It recommends a 512MB PHP memory limit, and says the team works with nginx and has not tested Apache extensively.
