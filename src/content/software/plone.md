---
id: plone
name: Plone
urls:
  home: https://plone.org
  repository: https://github.com/plone/Products.CMFPlone
  docs: https://6.docs.plone.org
category:
  - cms
  - headless-cms
description: Open source content management system built on Python, with a React-based Volto frontend and a Classic UI frontend.
status: active
maintainer: Plone Foundation
maintainerType: foundation
hqCountry: US
language: python
runtime:
  - python
  - node
hosting:
  - python
  - node
runtimeMin: python 3.10
databases:
  - postgres
  - mysql
  - oracle
adminUi: true
headlessApi:
  - rest
templating: zpt
i18n: yes
runsAs:
  - always-on
renderingModes:
  - spa
  - server
installMethod: cookieplone, pip, buildout
licenseModel: open-source
license: GPL-2.0, GPL version 2
currentMajor: "6"
latestReleaseDate: 2026-09-10
githubStargazers: 311
contributors: 171
social:
  x: https://twitter.com/plone
  mastodon: https://plone.social/@plone
  discord: https://discord.gg/zFY3EBbjaj
  forum: https://community.plone.org/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://plone.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/plone/Products.CMFPlone
    checkedAt: 2026-10-26
  - field: urls
    url: https://6.docs.plone.org/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://plone.org/foundation/about
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/plone/Products.CMFPlone
    checkedAt: 2026-10-26
  - field: runtime
    url: https://6.docs.plone.org/admin-guide/install-pip.html
    checkedAt: 2026-10-26
  - field: runtime
    url: https://6.docs.plone.org/install/create-project-cookieplone.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://6.docs.plone.org/admin-guide/install-pip.html
    checkedAt: 2026-10-26
  - field: category
    url: https://plone.org/
    checkedAt: 2026-10-26
  - field: category
    url: https://plone.org/
    checkedAt: 2026-10-26
  - field: templating
    url: https://6.docs.plone.org/classic-ui/templates.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://plone.org/why-plone/features
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://6.docs.plone.org/conceptual-guides/choose-user-interface.html
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://plone.org/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://6.docs.plone.org/conceptual-guides/choose-user-interface.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://6.docs.plone.org/conceptual-guides/choose-user-interface.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://6.docs.plone.org/admin-guide/run-plone.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://6.docs.plone.org/install/create-project-cookieplone.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://6.docs.plone.org/backend/zodb.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/plone/Products.CMFPlone
    checkedAt: 2026-10-26
  - field: license
    url: https://pypi.org/pypi/Plone/json
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://plone.org/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://pypi.org/pypi/Plone/json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/Plone/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/plone/Products.CMFPlone
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/plone/Products.CMFPlone/contributors
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://plone.org/foundation/about
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Plone is an open source content management system built on Python and the Zope application server. It offers two frontends: Volto, a single-page application, and Classic UI, whose pages are server-side templates written in the ZPT language. It also serves content over a REST API. Content is stored in the Zope Object Database, which writes to files by default and can use PostgreSQL, MySQL or Oracle as a backend. A single installation can run many Plone sites. The Plone Foundation, a 501(c)(3) non-profit organization, maintains the project.

## Worth knowing

Volto runs its frontend in a separate Node process beside the Python backend. The [interface guide](https://6.docs.plone.org/conceptual-guides/choose-user-interface.html) states that there is no migration path from Volto to Classic UI.
