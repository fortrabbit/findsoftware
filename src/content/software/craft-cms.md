---
id: craft-cms
name: Craft CMS
urls:
  home: https://craftcms.com
  repository: https://github.com/craftcms/cms
  docs: https://craftcms.com/docs/5.x/
  pricing: https://craftcms.com/pricing
  plugins: https://plugins.craftcms.com
category:
  - cms
description: Database-backed PHP content management system with a control panel, Twig templating and a GraphQL API.
status: active
maintainer: Pixel & Tonic, Inc.
maintainerType: company
hqCountry: US
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - graphql
templating: twig
i18n: yes, localization in every edition
runsAs:
  - per-request
renderingModes:
  - server
installMethod: ddev composer create-project craftcms/craft, composer create-project
licenseModel: source-available
license: proprietary, Craft License (custom, not SPDX)
currentMajor: "5"
latestReleaseDate: 2026-10-08
githubStargazers: 3616
packagistDownloads: 3801890
contributors: 252
pluginCount: 1639
social:
  bluesky: https://bsky.app/profile/craftcms.com
  mastodon: https://masto.craftcms.com/@craftcms
  discord: https://craftcms.com/discord
wikidata: Q110260868
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://craftcms.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/craftcms/cms
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/craftcms/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://craftcms.com/about
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://craftcms.com/about
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://pixelandtonic.com
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://api.github.com/orgs/craftcms
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q110260868
    checkedAt: 2026-10-18
  - field: category
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: language
    url: https://craftcms.com/docs/5.x/requirements.html
    checkedAt: 2026-10-18
  - field: runtime
    url: https://craftcms.com/docs/5.x/requirements.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/craftcms/cms.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://craftcms.com/docs/5.x/requirements.html
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: databases
    url: https://craftcms.com/docs/5.x/requirements.html
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://craftcms.com/docs/5.x/requirements.html
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: templating
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://craftcms.com/pricing
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://craftcms.com/docs/5.x/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://craftcms.com/docs/5.x/install.html
    checkedAt: 2026-10-18
  - field: license
    url: https://packagist.org/packages/craftcms/cms.json
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/craftcms/cms/blob/5.x/LICENSE.md
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/craftcms/cms/blob/5.x/LICENSE.md
    checkedAt: 2026-10-18
  - field: urls
    url: https://craftcms.com/pricing
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/craftcms/cms/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/craftcms/cms/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/craftcms/cms
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/craftcms/cms/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/craftcms/cms.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://craftcms.com/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://api.craftcms.com/v1/plugin-store/plugins?perPage=1
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://craftcms.com/docs/5.x/install.html
    checkedAt: 2026-10-19
ai: authored
npmWeeklyDownloads: null
---

Craft CMS is a PHP content management system built on Yii 2 by Pixel & Tonic. It has a browser control panel for editors, Twig templates for rendering and a GraphQL API for headless use, with content stored in a database. Multi-site and localization are included in every edition, including the free Solo edition. The paid editions raise the number of user accounts and add control panel branding.

Deployment needs SSH access to run console commands. The queue runner is web-based by default, and the vendor's own hosting platform, Craft Cloud, is described in the deployment guide.

## Worth knowing

The license is custom rather than open source, and each licensed copy can be installed in one production environment. A daemonized queue runner has to be restarted after each deploy, and the deploy steps include running php craft up. The [requirements page](https://craftcms.com/docs/5.x/requirements.html) lists the PHP extensions and the writable paths.
