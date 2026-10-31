---
id: webinoly
name: Webinoly
urls:
  home: https://webinoly.com
  repository: https://github.com/QROkes/webinoly
  docs: https://webinoly.com/documentation/
category:
  - web-server
  - dev-tool
description: Command-line tool that installs an NGINX web server with PHP and MariaDB or MySQL on Ubuntu and manages the sites on it.
status: active
maintainer: Cristhian Martínez Ochoa
maintainerType: individual
firstRelease: 2017
databases:
  - mysql
  - mariadb
adminUi: true
installMethod: download the installer with curl, then run it with sudo bash
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-09-19
githubStargazers: 519
contributors: 1
social:
  x: https://x.com/Webinoly
  mastodon: https://fosstodon.org/@webinoly
  facebook: https://www.facebook.com/Webinoly/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://webinoly.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/QROkes/webinoly
    checkedAt: 2026-10-31
  - field: urls
    url: https://webinoly.com/documentation/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://webinoly.com/terms-of-use-and-privacy/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://webinoly.com/terms-of-use-and-privacy/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/QROkes/webinoly/releases/tag/v1.0.1
    checkedAt: 2026-10-31
  - field: category
    url: https://webinoly.com/
    checkedAt: 2026-10-31
  - field: category
    url: https://webinoly.com/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://webinoly.com/install/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/QROkes/webinoly/blob/master/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://webinoly.com/documentation/stacks/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://webinoly.com/faq/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/QROkes/webinoly
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/QROkes/webinoly/releases/tag/v1.21.3
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/QROkes/webinoly/releases/tag/v1.21.3
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/QROkes/webinoly
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/QROkes/webinoly/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Webinoly is a set of Bash commands that sets up an NGINX web server with PHP and MariaDB or MySQL on Ubuntu. It also creates and configures the sites on that server. The [project site](https://webinoly.com/) says it manages everything from the terminal, and the [install guide](https://webinoly.com/install/) installs it with a script that is downloaded with curl and run with sudo bash.

The stack can also install phpMyAdmin, which the [FAQ](https://webinoly.com/faq/) places behind HTTP authentication on a configurable port.

## Worth knowing

The software needs Ubuntu and a Bash shell, and the FAQ says only the two most recent Ubuntu LTS releases are supported. GitHub Sponsor tiers unlock discussions and premium content.
