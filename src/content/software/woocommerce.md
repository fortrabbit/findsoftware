---
id: woocommerce
name: WooCommerce
urls:
  home: https://woocommerce.com
  repository: https://github.com/woocommerce/woocommerce
  docs: https://developer.woocommerce.com/docs/
  plugins: https://woocommerce.com/products/
category:
  - e-commerce
description: Open-source e-commerce plugin for WordPress.
status: boundary
maintainer: WooCommerce, Inc.
maintainerType: company
parent: Automattic
firstRelease: 2011
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
basedOn:
  - wordpress
contentStore:
  - database
databases:
  - mysql
  - mariadb
headlessApi:
  - rest
templating: php templates in classic themes, html block templates in block themes
installMethod: WordPress admin plugin install
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "11"
latestReleaseDate: 2026-10-09
githubStargazers: 10557
packagistDownloads: 182504
contributors: 345
social:
  x: https://www.x.com/woocommerce
  forum: https://wordpress.org/support/plugin/woocommerce/
wikidata: Q15855099
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/woocommerce/woocommerce
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/woocommerce/woocommerce
    checkedAt: 2026-10-18
  - field: urls
    url: https://developer.woocommerce.com/docs/apis/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: parent
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=WooCommerce&language=en&format=json
    checkedAt: 2026-10-18
  - field: category
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://woocommerce.com/document/server-requirements/
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/woocommerce/woocommerce
    checkedAt: 2026-10-18
  - field: runtime
    url: https://woocommerce.com/document/server-requirements/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/composer.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://woocommerce.com/document/server-requirements/
    checkedAt: 2026-10-18
  - field: databases
    url: https://woocommerce.com/document/server-requirements/
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://developer.woocommerce.com/docs/apis/
    checkedAt: 2026-10-18
  - field: templating
    url: https://developer.woocommerce.com/docs/theming/theme-development/template-structure/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://woocommerce.com/document/installing-uninstalling-woocommerce/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/composer.json
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/woocommerce/woocommerce/blob/trunk/license.txt
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/woocommerce/woocommerce/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/woocommerce/woocommerce/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/woocommerce/woocommerce
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/woocommerce/woocommerce/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/woocommerce/woocommerce.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://woocommerce.com/
    checkedAt: 2026-10-18
ai: authored
npmWeeklyDownloads: null
---

WooCommerce adds an online store to WordPress. Products, carts, checkout and orders are kept in the WordPress database and shown through the active theme, so the store runs inside a WordPress installation and does not work on its own. Store pages come from PHP templates in classic themes and from HTML block templates in block themes. Cart and checkout are also exposed through public REST endpoints and a Store API for customer-facing code. The plugin is installed from the WordPress admin screen and is published by WooCommerce, Inc., which describes itself as an Automattic production.

## Worth knowing

There is no paid edition of the core plugin. Commercial extensions are sold on the WooCommerce marketplace. The GraphQL endpoint exists only through an experimental plugin, so the documented developer interfaces are the REST API and the Store API.
