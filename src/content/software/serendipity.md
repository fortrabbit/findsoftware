---
id: serendipity
name: Serendipity
urls:
  home: https://www.s9y.org
  repository: https://github.com/s9y/Serendipity
  docs: https://docs.s9y.org/
category:
  - cms
description: PHP weblog engine with a plugin system, themes and a Smarty-based template layer.
status: active
maintainer: Serendipity open source team
maintainerType: community
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.3
contentStore:
  - database
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
templating: smarty
runsAs:
  - per-request
renderingModes:
  - server
installMethod: archive download, upload by FTP or SSH, web installer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2026-07-22
githubStargazers: 228
contributors: 46
social:
  forum: https://board.s9y.org
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.s9y.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.s9y.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/s9y/Serendipity
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.s9y.org/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://blog.s9y.org/index.php?serendipity[subpage]=dsgvo_gdpr_privacy
    checkedAt: 2026-10-20
  - field: category
    url: https://www.s9y.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/s9y/Serendipity
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://docs.s9y.org/docs/quickstart/index.html
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://docs.s9y.org/docs/faq/index.html
    checkedAt: 2026-10-20
  - field: templating
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.s9y.org/docs/quickstart/index.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.s9y.org/docs/users/getting-started/fresh-installation.html
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/s9y/Serendipity/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/s9y/Serendipity/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/s9y/Serendipity/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/s9y/Serendipity/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/s9y/Serendipity
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/s9y/Serendipity/contributors
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.s9y.org/
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Serendipity is a PHP weblog engine. Pages are rendered from Smarty templates, and the compiled versions go into a templates_c directory that the web server must be able to write. Plugins and themes add functionality and change how a blog looks, and the project publishes them through the Spartacus plugin repository. Blog content is stored in a database, which can be MySQL, PostgreSQL or SQLite. Editors use the admin panel at serendipity_admin.php.

Installation means downloading the release archive, unpacking it into the web root, and running the web installer. On Apache, the virtual host must allow .htaccess files.
