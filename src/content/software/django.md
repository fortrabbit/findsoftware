---
id: django
name: Django
urls:
  home: https://www.djangoproject.com/
  repository: https://github.com/django/django
  docs: https://docs.djangoproject.com/
  plugins: https://www.djangopackages.com/
category:
  - framework
description: Python web framework with an ORM, URL routing, templating, forms and an automatic admin interface.
status: active
maintainer: Django Software Foundation
maintainerType: foundation
firstRelease: 2005
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
contentStore:
  - database
databases:
  - postgres
  - mariadb
  - mysql
  - oracle
  - sqlite
adminUi: true
templating: django template language, jinja2
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: python -m pip install Django
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "6"
latestReleaseDate: 2026-10-06
githubStargazers: 91427
contributors: 3509
social:
  x: https://x.com/djangoproject
  bluesky: https://bsky.app/profile/djangoproject.com
  mastodon: https://fosstodon.org/@django
  discord: https://chat.djangoproject.com
  forum: https://forum.djangoproject.com/
  subreddit: https://www.reddit.com/r/django/
wikidata: Q842014
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://docs.djangoproject.com/en/6.1/faq/general/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.djangoproject.com/foundation/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.djangoproject.com/foundation/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q842014
    checkedAt: 2026-10-18
  - field: category
    url: https://github.com/django/django
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/django/django
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.djangoproject.com/en/6.1/intro/install/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.djangoproject.com/en/6.1/faq/install/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.djangoproject.com/en/6.1/ref/databases/
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.djangoproject.com/en/6.1/ref/databases/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.djangoproject.com/en/6.1/ref/contrib/admin/
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.djangoproject.com/en/6.1/topics/templates/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.djangoproject.com/en/6.1/topics/i18n/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.djangoproject.com/en/6.1/howto/deployment/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.djangoproject.com/en/6.1/topics/install/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/django/django
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/django/django
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://pypi.org/pypi/django/json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://pypi.org/pypi/django/6.1.2/json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/django/django
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/django/django/contributors?anon=true
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.djangoproject.com/community/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.djangoproject.com/en/6.1/howto/deployment/
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Python · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Django builds pages on the server from Python code, with an ORM, URL routing, forms and an admin interface generated from model definitions. Its template system can be swapped for Jinja2. Production sites run behind a WSGI or ASGI server and serve static files separately, and the built-in development server is not meant for production. Django was open-sourced in 2005 by World Online, and the Django Software Foundation, a 501(c)(3) non-profit, supports its development. The [deployment how-to](https://docs.djangoproject.com/en/6.1/howto/deployment/) lists the WSGI and ASGI servers with official guides.

## Worth knowing

Database backends beyond the officially supported ones, including SQL Server, MongoDB and Snowflake, come from third parties.
