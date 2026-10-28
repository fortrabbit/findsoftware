---
id: directadmin
name: DirectAdmin
urls:
  home: https://www.directadmin.com/
  docs: https://docs.directadmin.com/
  pricing: https://www.directadmin.com/pricing.php
  plugins: https://www.directadmin.com/extras-plugins.php
category:
  - web-server
description: Proprietary web hosting control panel for managing websites, email, DNS and databases on Linux servers, with a paid license per server.
status: active
maintainer: JBMC Software
hqCountry: CA
runtime:
  - binary
hosting:
  - binary
databases:
  - mariadb
  - mysql
adminUi: true
i18n: yes, 10+ languages
runsAs:
  - always-on
installMethod: web-based installer script
licenseModel: commercial
license: proprietary
currentMajor: "1"
latestReleaseDate: 2026-10-23
social:
  forum: https://forum.directadmin.com/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.directadmin.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.directadmin.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.directadmin.com/pricing.php
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.directadmin.com/extras-plugins.php
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.directadmin.com/policies.php
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.directadmin.com/policies.php
    checkedAt: 2026-10-28
  - field: category
    url: https://www.directadmin.com/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://www.directadmin.com/
    checkedAt: 2026-10-28
  - field: i18n
    url: https://www.directadmin.com/
    checkedAt: 2026-10-28
  - field: databases
    url: https://docs.directadmin.com/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.directadmin.com/getting-started/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.directadmin.com/getting-started/installation/
    checkedAt: 2026-10-28
  - field: license
    url: https://www.directadmin.com/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://www.directadmin.com/pricing.php
    checkedAt: 2026-10-28
  - field: runtime
    url: https://docs.directadmin.com/directadmin/general-usage/directadmin-binary/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.directadmin.com/features_list.php
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.directadmin.com/getting-started/installation/
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://docs.directadmin.com/changelog/version-1.713.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://docs.directadmin.com/changelog/version-1.713.html
    checkedAt: 2026-10-28
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
---

DirectAdmin is a web hosting control panel for Linux servers. The [homepage](https://www.directadmin.com/) describes it as a web hosting control panel with a web interface for administrators, resellers and users. The [install guide](https://docs.directadmin.com/getting-started/installation/) sets it up with a setup script run as root on a clean server, through either a web-based installer or the command line. Once installed, the panel runs as a service on the server: its task queue restarts a service that has crashed, and the control panel answers on a port of that server.

## Worth knowing

DirectAdmin is proprietary and sold by license, and a [client account](https://www.directadmin.com/) is required to buy one. The retail license tiers differ in how many accounts and domains they allow, and the Pro Pack feature set was retired so that every license carries the same features. The product runs on the server itself, so it needs a host where the operator can install software as root, and the install guide asks for a server that runs one of the supported Linux distributions.
