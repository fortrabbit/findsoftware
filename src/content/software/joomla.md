---
id: joomla
name: Joomla!
urls:
  home: https://www.joomla.org
  repository: https://github.com/joomla/joomla-cms
  docs: https://manual.joomla.org
  plugins: https://extensions.joomla.org
category:
  - cms
description: Free and open-source PHP content management system for publishing web content, run by a volunteer community.
status: active
maintainer: Open Source Matters, Inc. (supporting non-profit), volunteer project
maintainerType: community
firstRelease: 2005
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
headlessApi:
  - rest
templating: php templates with template overrides
i18n: yes, core, over 70 translation packs, language associations
runsAs:
  - per-request
installMethod: zip download
licenseModel: open-source
license: GPL-2.0
currentMajor: "6"
latestReleaseDate: 2026-10-13
githubStargazers: 5148
contributors: 282
pluginCount: 4977
social:
  forum: https://forum.joomla.org
wikidata: Q13167
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.joomla.org/about-joomla.html
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/joomla/joomla-cms
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.joomla.org/about-joomla.html
    checkedAt: 2026-10-18
  - field: urls
    url: https://manual.joomla.org/docs/next/get-started/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://downloads.joomla.org/cms/joomla10/1-0-0
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.opensourcematters.org/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.opensourcematters.org/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q13167
    checkedAt: 2026-10-18
  - field: category
    url: https://www.joomla.org/about-joomla.html
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/joomla/joomla-cms
    checkedAt: 2026-10-18
  - field: runtime
    url: https://manual.joomla.org/docs/next/get-started/technical-requirements/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://manual.joomla.org/docs/next/get-started/technical-requirements/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://manual.joomla.org/docs/next/get-started/technical-requirements/
    checkedAt: 2026-10-18
  - field: databases
    url: https://manual.joomla.org/docs/next/get-started/technical-requirements/
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://manual.joomla.org/docs/general-concepts/webservices/
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.joomla.org/core-features.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.joomla.org/core-features.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://downloads.joomla.org/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/joomla/joomla-cms
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.joomla.org/about-joomla.html
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/joomla/joomla-cms/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/joomla/joomla-cms
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/joomla/joomla-cms/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.joomla.org/about-joomla.html
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://extensions.joomla.org/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://manual.joomla.org/docs/next/get-started/technical-requirements/
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Joomla! is a PHP content management system that began in 2005 as a fork of Mambo. A volunteer community develops it, and Open Source Matters, a non-profit, supports the project. Its core ships with an integrated access control list, translation packs with language associations, and a Web Services API that speaks REST with the JSON:API media type. Templates are PHP files, and template overrides allow custom designs.

A Docker Official Image exists, and the project runs a free hosted site service at launch.joomla.org. Extensions come from a directory on joomla.org.
