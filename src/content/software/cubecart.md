---
id: cubecart
name: CubeCart
urls:
  home: https://www.cubecart.com
  repository: https://github.com/cubecart/v6
  docs: https://kb.cubecart.com/
  pricing: https://www.cubecart.com/upgrade
  plugins: https://www.cubecart.com/extensions
category:
  - e-commerce
description: Self-hosted ecommerce platform written in PHP for running an online store on the merchant's own server.
status: active
maintainer: CubeCart Limited
maintainerType: company
hqCountry: GB
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
databases:
  - mysql
  - mariadb
adminUi: true
i18n: multi-language support documented
runsAs:
  - per-request
installMethod: zip download, manual upload
licenseModel: open-source
license: GPL-3.0
currentMajor: "6"
latestReleaseDate: 2026-10-14
githubStargazers: 74
contributors: 15
social:
  x: https://x.com/cubecart
  bluesky: https://bsky.app/profile/cubecart.com
  forum: https://community.cubecart.com
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.cubecart.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/cubecart/v6
    checkedAt: 2026-10-20
  - field: urls
    url: https://kb.cubecart.com/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.cubecart.com/
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://www.cubecart.com/
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/cubecart/v6
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://kb.cubecart.com/getting-started/installation/how-can-i-install-cubecart-v6
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/cubecart/v6/blob/6.8.4/README.md
    checkedAt: 2026-10-20
  - field: i18n
    url: https://kb.cubecart.com/getting-started/installation/how-can-i-install-cubecart-v6
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/cubecart/v6
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/cubecart/v6/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/cubecart/v6/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/cubecart/v6
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/cubecart/v6/graphs/contributors
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.cubecart.com/extensions
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.cubecart.com/upgrade
    checkedAt: 2026-10-20
figure:
  emoji: 🛒
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

CubeCart is an ecommerce platform written in PHP that a merchant runs on their own web server, with MySQL or MariaDB holding the store's data. The [installation guide](https://kb.cubecart.com/getting-started/installation/how-can-i-install-cubecart-v6) has the extracted package uploaded to the public HTML folder. The storefront and the admin area ship in the same package, and PHP handles each request, so no separate process runs beside the web server.

CubeCart Limited, registered in England and Wales, maintains the software. Its extensions directory lists free official extensions.

## Worth knowing

The README says Apache works with the included `.htaccess` file, while Nginx needs rewrite rules configured by hand.
