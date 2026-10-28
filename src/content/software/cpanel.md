---
id: cpanel
name: cPanel
urls:
  home: https://cpanel.net
  docs: https://docs.cpanel.net
  pricing: https://cpanel.net/pricing/
category:
  - web-server
description: Proprietary web hosting control panel and server management software, sold as cPanel & WHM licenses for servers that host websites.
status: active
maintainer: WebPros International, LLC
maintainerType: company
hqCountry: US
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: installer script
licenseModel: commercial
license: cPanel & WebHost Manager (WHM) End User License Agreement
currentMajor: "138"
latestReleaseDate: 2026-10-26
social:
  x: https://x.com/cpanel
  forum: https://forums.cpanel.net
  subreddit: https://www.reddit.com/r/cpanel/
  facebook: https://facebook.com/cpanel
  instagram: https://www.instagram.com/cpanel/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://cpanel.net/
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.cpanel.net/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.webpros.com/legal/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.webpros.com/legal/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.webpros.com/legal/
    checkedAt: 2026-10-28
  - field: category
    url: https://cpanel.net/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.cpanel.net/installation-guide/install
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://docs.cpanel.net/changelogs/
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://docs.cpanel.net/changelogs/138-change-log/
    checkedAt: 2026-10-28
  - field: license
    url: https://cpanel.net/eula/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://cpanel.net/eula/
    checkedAt: 2026-10-28
  - field: urls
    url: https://cpanel.net/pricing/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.cpanel.net/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/
    checkedAt: 2026-10-28
  - field: databases
    url: https://docs.cpanel.net/cpanel/databases/mysql-databases/
    checkedAt: 2026-10-28
  - field: databases
    url: https://docs.cpanel.net/cpanel/databases/postgresql-databases/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

cPanel is a web hosting control panel. Its two interfaces split the work: WHM is the server-level interface for administrators, and cPanel is the account-level interface for the people who run sites on the server. The software is installed on a server from a downloaded installer script, and the documentation covers installation on AlmaLinux, CloudLinux, Rocky Linux and Ubuntu. A server daemon, cpsrvd, listens on the server's ports for the panel.

The software is proprietary and is maintained by WebPros International, LLC. The license grants install and use rights for each server and is sold as plans that differ by the number of accounts they cover.

## Worth knowing

The license applies to one server with a publicly visible static IP address and working DNS, and the company licenses no dynamic, reserved or internal addresses. The installation guide asks for a freshly installed operating system and says that removing cPanel means reformatting the server.
