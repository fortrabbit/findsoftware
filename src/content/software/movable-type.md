---
id: movable-type
name: Movable Type
urls:
  home: https://www.movabletype.org/
  docs: https://www.movabletype.org/documentation/
  pricing: https://www.movabletype.com/
  plugins: https://plugins.movabletype.org/
category:
  - cms
description: Commercial publishing and blogging system from Six Apart that publishes static pages, dynamic pages or both from templates.
status: active
maintainer: Six Apart Ltd.
maintainerType: company
firstRelease: 2001
hqCountry: JP
language: perl
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - oracle
  - sqlserver
adminUi: true
headlessApi:
  - rest
templating: Movable Type markup language
i18n: yes
runsAs:
  - per-request
  - always-on
  - scheduled
renderingModes:
  - static
  - server
installMethod: upload files over FTP, then run the configuration wizard in the browser
licenseModel: commercial
license: Movable Type license, Movable Type License Agreement with Six Apart Ltd., one server and unlimited users
currentMajor: "9"
latestReleaseDate: 2026-10-07
social:
  x: https://x.com/movabletype
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.movabletype.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.movabletype.org/documentation/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.movabletype.org/about/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.movabletype.org/about/
    checkedAt: 2026-10-26
  - field: category
    url: https://www.movabletype.org/about/
    checkedAt: 2026-10-26
  - field: language
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.movabletype.org/documentation/installation/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.movabletype.org/documentation/installation/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/about-movable-type-ami/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.movabletype.org/documentation/installation/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/system-requirements/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: databases
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/system-requirements/
    checkedAt: 2026-10-26
  - field: databases
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/system-requirements/
    checkedAt: 2026-10-26
  - field: databases
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/system-requirements/
    checkedAt: 2026-10-26
  - field: databases
    url: https://movabletype.jp/documentation/mt9/start-guide/about-movable-type/system-requirements/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.movabletype.org/documentation/developer/api/data-api/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.movabletype.org/about/features/
    checkedAt: 2026-10-26
  - field: license
    url: https://www.movabletype.org/product-life-cycle-policy.html
    checkedAt: 2026-10-26
  - field: license
    url: https://www.movabletype.com/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.movabletype.org/product-life-cycle-policy.html
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://www.movabletype.org/documentation/appendices/release-notes/9.3.0.html
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://www.movabletype.org/documentation/appendices/release-notes/9.3.0.html
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.movabletype.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.movabletype.com/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Movable Type is a publishing and blogging system from Six Apart, with its core written in Perl. Content is kept in a database, and templates written in the Movable Type markup language turn it into pages. A site can publish static files, generate pages on request in dynamic mode (which uses PHP, optional otherwise), or use both, and one installation can run several websites and blogs. It is installed by uploading the program files to a web server over FTP or SSH and running a configuration wizard in the browser, or from an Amazon Machine Image on AWS Marketplace.

## Worth knowing

Use is under a Movable Type license, and the product life cycle page says license holders may use version 9 under the same terms. The Advanced edition adds Oracle Database, Microsoft SQL Server and LDAP sign-in. The Cloud Service is offered to Japanese customers only. The installation guide names Movable Type Pro and Movable Type Open Source as the two versions to download; the open source line is recorded as a separate record.
