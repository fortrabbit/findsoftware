---
id: wordpress
name: WordPress
urls:
  home: https://wordpress.org
  repository: https://github.com/WordPress/wordpress-develop
  docs: https://developer.wordpress.org/advanced-administration/
  plugins: https://wordpress.org/plugins/
category:
  - cms
description: Open-source PHP content management system for websites and blogs, with a block editor, themes and plugins.
status: active
maintainer: WordPress open source community
maintainerType: community
firstRelease: 2003
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
templating: php, block-templates-html
runsAs:
  - per-request
renderingModes:
  - server
installMethod: zip or tar.gz download, host one-click installers
licenseModel: open-source
license: GPL-2.0-or-later, GPL-2.0
currentMajor: "7"
latestReleaseDate: 2026-10-06
githubStargazers: 3487
pluginCount: 72008
social:
  bluesky: https://bsky.app/profile/wordpress.org
  mastodon: https://mastodon.world/@WordPress
  forum: https://wordpress.org/support/forums/
wikidata: Q13166
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/WordPress/WordPress
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/WordPress/wordpress-develop
    checkedAt: 2026-10-18
  - field: urls
    url: https://developer.wordpress.org/advanced-administration/before-install/howto-install/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q13166
    checkedAt: 2026-10-18
  - field: category
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: language
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: runtime
    url: https://wordpress.org/about/requirements/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://api.wordpress.org/core/version-check/1.7/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://wordpress.org/about/requirements/
    checkedAt: 2026-10-18
  - field: databases
    url: https://wordpress.org/about/requirements/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://developer.wordpress.org/rest-api/
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://developer.wordpress.org/rest-api/
    checkedAt: 2026-10-18
  - field: templating
    url: https://developer.wordpress.org/themes/templates/introduction-to-templates/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://developer.wordpress.org/themes/templates/introduction-to-templates/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://developer.wordpress.org/advanced-administration/before-install/howto-install/
    checkedAt: 2026-10-18
  - field: license
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/WordPress/wordpress-develop
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://wordpress.org/about/
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://endoflife.date/api/wordpress.json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/WordPress/wordpress-develop
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[per_page]=1
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[per_page]=1
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://wordpress.org/about/requirements/
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

WordPress is a PHP content management system in which editors write pages and posts in a block editor, while themes and plugins extend the site. Block themes build templates from HTML files with block markup. The project was first released in 2003 as a fork of b2/cafelog. Content lives in the database, and a REST API gives applications access to it. Multisite is built in and is switched on in `wp-config.php`, so one installation can host a network of sites. The WordPress open source community maintains the project. Development happens in Subversion, and the GitHub repositories are mirrors.

## Worth knowing

Only the latest version is officially supported. The Security Team backports fixes to older branches as a courtesy.
