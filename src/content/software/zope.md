---
id: zope
name: Zope
urls:
  home: https://www.zope.dev/
  repository: https://github.com/zopefoundation/Zope
  docs: https://zope.readthedocs.io/
category:
  - web-server
  - framework
description: Open-source web application server written in Python, with an object database and a built-in management interface.
status: active
maintainer: Plone Foundation
maintainerType: foundation
firstRelease: 1998
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
contentStore:
  - database
adminUi: true
templating: zpt
runsAs:
  - always-on
renderingModes:
  - server
installMethod: pip, zc.buildout
licenseModel: open-source
license: ZPL-2.1
currentMajor: "6"
latestReleaseDate: 2026-10-22
githubStargazers: 385
contributors: 106
social:
  mastodon: https://fosstodon.org/@zope
  forum: https://community.plone.org/c/zope
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.zope.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://zope.readthedocs.io/en/latest/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/zopefoundation/Zope
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.zope.dev/community.html
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.zope.dev/community.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.zope.dev/
    checkedAt: 2026-10-26
  - field: category
    url: https://www.zope.dev/
    checkedAt: 2026-10-26
  - field: language
    url: https://pypi.org/pypi/Zope/json
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/Zope/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/Zope/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://zope.readthedocs.io/en/latest/INSTALL.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.zope.dev/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://zope.readthedocs.io/en/latest/INSTALL.html
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.zope.dev/resources.html
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://zope.readthedocs.io/en/latest/operation.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://zope.readthedocs.io/en/latest/zopebook/ZPT.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/zopefoundation/Zope/blob/master/LICENSE.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/zopefoundation/Zope/blob/master/README.rst
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/zopefoundation/Zope/blob/master/LICENSE.txt
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/zopefoundation/Zope/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/Zope/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/zopefoundation/Zope
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/zopefoundation/Zope/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Zope is a web application server written in Python, first released in 1998. It keeps its data in ZODB, an object database, and its templates are Zope Page Templates, which the project describes as a web page generation tool. Zope is installed with pip or with zc.buildout, as the [installation guide](https://zope.readthedocs.io/en/latest/INSTALL.html) describes. Administrators work in the Zope Management Interface, and users hold roles such as Manager.

The Plone Foundation is the copyright holder of the software, according to the [community page](https://www.zope.dev/community.html) on zope.dev.

## Worth knowing

Zope is a long-running process rather than a set of files. It is served by a WSGI server, with waitress built in, so a host has to keep a Python process running to serve its pages.
