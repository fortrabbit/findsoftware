---
id: turbogears
name: TurboGears
urls:
  home: https://turbogears.org/
  repository: https://github.com/TurboGears/tg2
  docs: https://turbogears.readthedocs.io/en/latest/
  plugins: https://turbogears.org/cogbin.html
category:
  - framework
description: Python web framework for services, JSON APIs and database-backed web apps.
status: active
maintainer: Kevin Dangoor, Alessandro Molina and contributors
maintainerType: community
firstRelease: 2007
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - mongodb
  - sqlite
headlessApi:
  - rest
templating: kajiki, jinja2, genshi, mako
i18n: gettext-based translation and localization, driven by gearbox i18n
runsAs:
  - always-on
installMethod: pip install TurboGears2
licenseModel: open-source
license: MIT-style, MIT
currentMajor: "2"
latestReleaseDate: 2026-10-12
githubStargazers: 812
contributors: 28
social:
  x: https://x.com/turbogearsorg
  forum: https://groups.google.com/g/turbogears
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://turbogears.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/TurboGears/tg2
    checkedAt: 2026-10-26
  - field: urls
    url: https://turbogears.org/documentation.html
    checkedAt: 2026-10-26
  - field: urls
    url: https://turbogears.org/cogbin.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/TurboGears/tg2/blob/development/LICENSE.txt
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/TurboGears/tg2
    checkedAt: 2026-10-26
  - field: category
    url: https://turbogears.org/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://turbogears.org/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://turbogears.org/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://turbogears.org/
    checkedAt: 2026-10-26
  - field: templating
    url: https://turbogears.org/features.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://turbogears.org/features.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://turbogears.readthedocs.io/en/latest/turbogears/minimal/index.html
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://turbogears.org/features.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://turbogears.org/features.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/TurboGears/tg2/blob/development/README.rst
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/TurboGears/tg2/blob/development/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/TurboGears/tg2/blob/development/LICENSE.txt
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/TurboGears/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/TurboGears/tg2/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/TurboGears/tg2/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/TurboGears/tg2
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/TurboGears/tg2/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://turbogears.readthedocs.io/en/latest/cookbook/deploy/index.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

TurboGears is a Python web framework that runs from a single file and can grow into a generated full-stack project with templates, database models and authentication. Its [features page](https://turbogears.org/features.html) lists Kajiki, Jinja2, Genshi and Mako as template engines, SQL databases through SQLAlchemy and MongoDB through Ming. Authentication uses pluggable identity backends through repoze.who, and the page names LDAP and OAuth among them.

For production, the [deployment guide](https://turbogears.readthedocs.io/en/latest/cookbook/deploy/index.html) describes a WSGI server behind a reverse proxy, or Apache with mod_wsgi.
