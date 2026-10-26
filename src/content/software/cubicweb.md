---
id: cubicweb
name: CubicWeb
urls:
  home: https://www.cubicweb.org
  repository: https://forge.extranet.logilab.fr/cubicweb/cubicweb
  docs: https://cubicweb.readthedocs.io/en/stable/
category:
  - framework
description: Python web framework for data-centric applications built on an explicit schema, with a query language and components called cubes.
status: active
maintainer: Logilab
firstRelease: 2009
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
contentStore:
  - database
databases:
  - postgres
  - sqlite
templating: python
runsAs:
  - always-on
installMethod: pip install
licenseModel: open-source
license: LGPL-2.0-or-later, LGPL
currentMajor: "5"
latestReleaseDate: 2025-08-11
contributors: 36
social:
  x: https://twitter.com/cubicweb
  mastodon: https://fosstodon.org/@cubicweb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: urls
    url: https://forge.extranet.logilab.fr/api/v4/projects/cubicweb%2Fcubicweb
    checkedAt: 2026-10-26
  - field: urls
    url: https://cubicweb.readthedocs.io/en/stable/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://pypi.org/pypi/cubicweb/json
    checkedAt: 2026-10-26
  - field: language
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/cubicweb/json
    checkedAt: 2026-10-26
  - field: category
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: databases
    url: https://cubicweb.readthedocs.io/en/stable/book/admin/config.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://cubicweb.readthedocs.io/en/stable/book/annexes/faq.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://cubicweb.readthedocs.io/en/stable/book/admin/setup.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://cubicweb.readthedocs.io/en/stable/book/admin/deploy.html
    checkedAt: 2026-10-26
  - field: license
    url: https://pypi.org/pypi/cubicweb/json
    checkedAt: 2026-10-26
  - field: license
    url: https://www.cubicweb.org
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/cubicweb/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://forge.extranet.logilab.fr/api/v4/projects/cubicweb%2Fcubicweb/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://forge.extranet.logilab.fr/api/v4/projects/cubicweb%2Fcubicweb/releases
    checkedAt: 2026-10-26
  - field: contributors
    url: https://forge.extranet.logilab.fr/api/v4/projects/385/repository/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

CubicWeb is a Python web framework for data-centric applications, built with Semantic Web principles and driven by an explicit schema of the application's data. The homepage describes reusable components called cubes and says permissions are defined in the data model. It relies on a standard SQL database for storing and managing data; the configuration guide names PostgreSQL as the recommended database, with SQLite also supported.

Applications are installed with pip. The [deployment guide](https://cubicweb.readthedocs.io/en/stable/book/admin/deploy.html) runs an application under uWSGI as a long-running process. Python is the templating language, and the LDAP integration pages describe LDAP as a source of user credentials. The package is developed at Logilab, the name the PyPI description gives.

## Worth knowing

The stable documentation still carries an older release number than the newest release, so the reference pages can lag the code.
