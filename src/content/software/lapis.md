---
id: lapis
name: Lapis
urls:
  home: https://leafo.net/lapis/
  repository: https://github.com/leafo/lapis
  docs: https://leafo.net/lapis/reference.html
category:
  - framework
description: Web framework for Lua and MoonScript that runs inside the Nginx worker of OpenResty, with routing, HTML templating, models and migrations.
status: active
maintainer: Leaf Corcoran
maintainerType: individual
firstRelease: 2013
language: other
databases:
  - postgres
  - mysql
  - sqlite
templating: etlua, html-builder
runsAs:
  - always-on
installMethod: luarocks install lapis
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-29
githubStargazers: 3354
contributors: 46
social:
  discord: https://discord.gg/Y75ZXrD
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://leafo.net/lapis/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/leafo/lapis
    checkedAt: 2026-10-26
  - field: urls
    url: https://leafo.net/lapis/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/leafo/lapis/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/leafo/lapis/tags?per_page=100
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/leafo/lapis
    checkedAt: 2026-10-26
  - field: language
    url: https://leafo.net/lapis/reference/getting_started.html
    checkedAt: 2026-10-26
  - field: category
    url: https://leafo.net/lapis/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://leafo.net/lapis/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://leafo.net/lapis/reference/getting_started.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://leafo.net/lapis/
    checkedAt: 2026-10-26
  - field: templating
    url: https://leafo.net/lapis/reference/etlua_templates.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://leafo.net/lapis/reference/html_generation.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/leafo/lapis
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/leafo/lapis/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/leafo/lapis/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/leafo/lapis
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/leafo/lapis/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lapis is a web framework for Lua and MoonScript, installed with LuaRocks. Applications run inside the Nginx worker of OpenResty, which is the default server in its getting started guide, so the web application is run directly inside Nginx. Lapis provides models for PostgreSQL, MySQL and SQLite, and HTML templating with etlua templates and an HTML builder.

Lapis does not include an HTTP server of its own. Its server backends are OpenResty, cqueues with lua-http, and golapis, which is marked experimental. The project is maintained by Leaf Corcoran.
