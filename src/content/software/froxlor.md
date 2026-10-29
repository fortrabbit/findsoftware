---
id: froxlor
name: froxlor
urls:
  home: https://www.froxlor.org
  repository: https://github.com/froxlor/froxlor
  docs: https://docs.froxlor.org/latest/
category:
  - web-server
description: Server management panel for managing hosting domains, customers, e-mail, FTP accounts and MySQL databases on a server, written in PHP.
status: active
maintainer: Michael Kaufmann
maintainerType: individual
firstRelease: 2009
hqCountry: DE
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
templating: twig
i18n: yes, language chosen per account
runsAs:
  - per-request
  - scheduled
installMethod: apt package (Debian and Ubuntu)
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-10-20
githubStargazers: 1750
contributors: 2
social:
  discord: https://discord.froxlor.org
  forum: https://forum.froxlor.org
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://www.froxlor.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/froxlor/froxlor
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.froxlor.org/latest/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://froxlor.org/explore/team
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/froxlor/froxlor/blob/2.3.16/composer.json
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://froxlor.org/legal/imprint
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://froxlor.org/legal/imprint
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://froxlor.org/legal/imprint
    checkedAt: 2026-10-29
  - field: category
    url: https://www.froxlor.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/froxlor/froxlor
    checkedAt: 2026-10-29
  - field: runtime
    url: https://froxlor.org/explore/features
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/froxlor/froxlor/blob/2.3.16/composer.json
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/froxlor/froxlor/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/froxlor/froxlor/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/froxlor/froxlor/blob/2.3.16/composer.json
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://www.froxlor.org/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.froxlor.org/latest/general/installation/apt-package.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.froxlor.org/latest/general/installation/tarball.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://froxlor.org/get-started
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.froxlor.org/latest/general/installation/tarball.html
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.froxlor.org/latest/admin-guide/configuration/
    checkedAt: 2026-10-29
  - field: databases
    url: https://docs.froxlor.org/latest/general/installation/tarball.html
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://froxlor.org/explore/features
    checkedAt: 2026-10-29
  - field: templating
    url: https://www.froxlor.org/
    checkedAt: 2026-10-29
  - field: i18n
    url: https://docs.froxlor.org/latest/admin-guide/resources/admins-resellers/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/froxlor/froxlor
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/froxlor/froxlor/contributors?per_page=1
    checkedAt: 2026-10-29
ai: authored
contentStore: null
headlessApi: null
renderingModes: null
npmWeeklyDownloads: null
---

froxlor is a server management panel for administering hosting on a server: domains, customers, e-mail, FTP accounts and MySQL databases are managed from a browser interface. The panel is written in PHP and uses MySQL or MariaDB. It is installed from a Debian or Ubuntu package, from a tarball, or from a git clone, and its design can be customized with Twig templates. The web server serves the panel per request, and a cron service runs the tasks froxlor creates. Accounts are admins, resellers and customers, and each account has its own interface language. The project is maintained by Michael Kaufmann.

## Worth knowing

The default branch of the repository is a rewrite that its README says is in very early development and not meant for production, so releases come from a different line. The cron service is required and is installed whether or not the operator selects it.
