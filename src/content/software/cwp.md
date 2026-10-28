---
id: cwp
name: Control Web Panel
urls:
  home: https://control-webpanel.com
  docs: https://docs.control-webpanel.com/
  pricing: https://control-webpanel.com/cwppro
category:
  - web-server
description: Linux control panel for managing web hosting, websites and servers on dedicated servers and VPS, with a free core and a paid CWPpro edition.
status: active
maintainer: LINANTO LLC
maintainerType: company
hqCountry: GE
databases:
  - mariadb
  - postgres
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: installer script run with wget on a fresh AlmaLinux, CentOS, Rocky or Oracle Linux server
licenseModel: commercial
license: Control Web Panel License Info (proprietary, free to use)
currentMajor: "1"
latestReleaseDate: 2026-10-26
social:
  x: https://twitter.com/ControlWebPanel
  forum: https://forum.centos-webpanel.com/
  facebook: https://www.facebook.com/profile.php?id=100087735060817
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://control-webpanel.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://control-webpanel.com/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://control-webpanel.com/terms-of-service
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://control-webpanel.com/terms-of-service
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://control-webpanel.com/terms-of-service
    checkedAt: 2026-10-28
  - field: category
    url: https://control-webpanel.com/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://control-webpanel.com/
    checkedAt: 2026-10-28
  - field: databases
    url: https://control-webpanel.com/features
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://control-webpanel.com/installation-instructions
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://control-webpanel.com/installation-instructions
    checkedAt: 2026-10-28
  - field: license
    url: https://control-webpanel.com/terms-of-service
    checkedAt: 2026-10-28
  - field: urls
    url: https://control-webpanel.com/cwppro
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://control-webpanel.com/changelog
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://control-webpanel.com/changelog
    checkedAt: 2026-10-28
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Control Web Panel (CWP) is a Linux control panel for web hosting providers and system administrators, run on a dedicated server or VPS. It has a web interface for managing hosting accounts and the server beneath them. The install guide sets it up with a script run with wget on a fresh AlmaLinux, CentOS, Rocky or Oracle Linux server, and the server's CWP services start after a reboot. The features page lists MariaDB, MongoDB and PostgreSQL among the databases it supports. LINANTO LLC publishes it from Georgia.

## Worth knowing

The panel is proprietary. Its license terms call it free to use by everyone, but forbid modifying the code or using any part of it in a third-party application, so it is not open source. CWPpro is a paid edition with more features and security updates, sold as licenses. The install guide says the panel has no uninstaller: removing it means reinstalling the server's operating system.
