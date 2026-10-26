---
id: tornado
name: Tornado
urls:
  home: https://www.tornadoweb.org/
  repository: https://github.com/tornadoweb/tornado
  docs: https://www.tornadoweb.org/en/stable/
category:
  - framework
  - library
description: Python web framework and asynchronous networking library that runs its own HTTP server rather than WSGI.
status: active
maintainer: Facebook
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
templating: tornado templates
i18n: tornado.locale internationalization support
runsAs:
  - always-on
installMethod: pip install tornado
licenseModel: open-source
license: Apache-2.0
currentMajor: "6"
latestReleaseDate: 2026-10-21
githubStargazers: 22168
contributors: 384
social:
  forum: https://groups.google.com/forum/#!forum/python-tornado
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.tornadoweb.org/en/stable/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/tornadoweb/tornado
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.tornadoweb.org/en/stable/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/tornadoweb/tornado/blob/master/tornado/web.py
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/tornadoweb/tornado
    checkedAt: 2026-10-26
  - field: category
    url: https://www.tornadoweb.org/en/stable/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.tornadoweb.org/en/stable/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/tornado/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.tornadoweb.org/en/stable/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.tornadoweb.org/en/stable/guide/templates.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.tornadoweb.org/en/stable/locale.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.tornadoweb.org/en/stable/guide/running.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/tornadoweb/tornado
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/tornadoweb/tornado/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/tornado/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://pypi.org/pypi/tornado/json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/tornado/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/tornadoweb/tornado
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/tornadoweb/tornado/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tornado is a Python web framework and asynchronous networking library that runs its own HTTP server rather than working through WSGI. An application defines a `main()` coroutine that starts the server and waits, and the project's guide says an operating system or process manager runs that program. Tornado was originally developed at FriendFeed and ships its own templating language and a locale module for translations.

The guide recommends one process per CPU for multi-core machines, and says a load balancer such as nginx is usually placed in front when each process listens on its own port.

## Worth knowing

Tornado typically runs one thread per process, and its code is not thread-safe, apart from one method the project names as safe to call from other threads. The project says it is designed for Unix-like platforms and that Windows is not officially supported or recommended for production use.
