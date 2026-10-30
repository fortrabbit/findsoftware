---
id: pgadmin
name: pgAdmin
urls:
  home: https://www.pgadmin.org
  repository: https://github.com/pgadmin-org/pgadmin4
  docs: https://www.pgadmin.org/docs/pgadmin4/latest/index.html
category:
  - admin-panel
description: Open-source administration and development tool for PostgreSQL, run as a desktop application or as a web application.
status: active
maintainer: The pgAdmin Development Team
maintainerType: community
firstRelease: 2016
language: python
runtime:
  - python
hosting:
  - python
databases:
  - postgres
adminUi: true
i18n: community translations
runsAs:
  - always-on
  - local
installMethod: docker image
licenseModel: open-source
license: PostgreSQL
currentMajor: "9"
latestReleaseDate: 2026-10-29
githubStargazers: 3915
contributors: 202
social:
  forum: https://www.postgresql.org/list/pgadmin-support/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/pgadmin-org/pgadmin4
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.pgadmin.org/docs/pgadmin4/latest/index.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/pgadmin-org/pgadmin4/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.pgadmin.org/docs/pgadmin4/latest/licence.html
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/pgadmin-org/pgadmin4
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/pgadmin-org/pgadmin4/git/refs/tags/REL-9_18
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://pypi.org/pypi/pgadmin4/json
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/pgadmin-org/pgadmin4/git/refs/tags/REL-1_0-BETA1
    checkedAt: 2026-10-30
  - field: license
    url: https://www.pgadmin.org/docs/pgadmin4/latest/licence.html
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://www.pgadmin.org/docs/pgadmin4/latest/licence.html
    checkedAt: 2026-10-30
  - field: category
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: databases
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: i18n
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.pgadmin.org/docs/pgadmin4/latest/server_deployment.html
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.pgadmin.org/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/pgadmin-org/pgadmin4
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/pgadmin-org/pgadmin4/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

pgAdmin is a graphical tool for administering and developing PostgreSQL databases. It runs in one of two modes: as a desktop application on the user's own machine, or as a web application that a server hosts and that users reach from a browser. The [server deployment guide](https://www.pgadmin.org/docs/pgadmin4/latest/server_deployment.html) describes hosting it standalone under Gunicorn or uWSGI. Administrator and User roles control who can manage pgAdmin users.

## Worth knowing

Server mode is a process that stays running and serves several users, so the host runs an application server such as Gunicorn or uWSGI. Login can go through LDAP, Kerberos, or OAuth2 and OIDC. The project has no paid support and offers a support mailing list.
