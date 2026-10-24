---
id: kirby
name: Kirby
urls:
  home: https://getkirby.com
  repository: https://github.com/getkirby/kirby
  docs: https://getkirby.com/docs
  pricing: https://getkirby.com/buy
  plugins: https://plugins.getkirby.com/
category:
  - cms
description: File-based PHP content management system that stores content in text files and ships a browser-based admin Panel.
status: active
maintainer: Content Folder GmbH & Co. KG
maintainerType: company
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - flat-file
adminUi: true
headlessApi:
  - rest
templating: php
i18n: yes, built in, enabled in config
runsAs:
  - per-request
renderingModes:
  - server
installMethod: zip download, composer create-project getkirby/starterkit, kirby cli, git clone, herd
licenseModel: source-available
license: proprietary
currentMajor: "5"
latestReleaseDate: 2026-10-06
githubStargazers: 1536
packagistDownloads: 680567
contributors: 78
social:
  bluesky: https://bsky.app/profile/getkirby.com
  mastodon: https://mastodon.social/@getkirby
  discord: https://chat.getkirby.com
  forum: https://forum.getkirby.com
wikidata: Q56297856
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://getkirby.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/getkirby/kirby
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/getkirby/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://getkirby.com/docs/guide/quickstart
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://getkirby.com/contact
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://getkirby.com/contact
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://getkirby.com/contact
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q56297856
    checkedAt: 2026-10-18
  - field: category
    url: https://getkirby.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://getkirby.com/
    checkedAt: 2026-10-18
  - field: runtime
    url: https://getkirby.com/docs/guide/quickstart
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/getkirby/cms.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://getkirby.com/docs/guide/quickstart#requirements
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://getkirby.com/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://getkirby.com/docs/guide/api/introduction
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://getkirby.com/docs/guide/api/introduction
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://getkirby.com/
    checkedAt: 2026-10-18
  - field: templating
    url: https://getkirby.com/docs/guide/templates/basics
    checkedAt: 2026-10-18
  - field: i18n
    url: https://getkirby.com/docs/guide/languages/introduction
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://getkirby.com/docs/guide/templates/basics
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://getkirby.com/docs/guide/quickstart
    checkedAt: 2026-10-18
  - field: license
    url: https://packagist.org/packages/getkirby/cms.json
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://getkirby.com/license
    checkedAt: 2026-10-18
  - field: urls
    url: https://getkirby.com/buy
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/getkirby/kirby/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/getkirby/kirby/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/getkirby/kirby
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/getkirby/kirby/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/getkirby/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://plugins.getkirby.com/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://getkirby.com/docs/guide/quickstart
    checkedAt: 2026-10-19
ai: authored
npmWeeklyDownloads: null
---

Kirby is a PHP content management system that keeps page content in plain text files, so no database is required. Editors work in the Panel, a browser admin built with Vue. Templates are PHP files that render pages from the content. Multiple languages are enabled in the site configuration. The Panel talks to the PHP backend through a REST API, and the project supports headless use. Content Folder GmbH & Co. KG in Germany develops Kirby.

Apache works out of the box. Nginx and Caddy need configuration, and the content, site and kirby folders must not be reachable from the web.

## Worth knowing

Kirby is source-available rather than open source. The license is free for local development and client previews, and each production site needs a paid license.
