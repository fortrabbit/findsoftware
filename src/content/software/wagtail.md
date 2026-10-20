---
id: wagtail
name: Wagtail
urls:
  home: https://wagtail.org/
  repository: https://github.com/wagtail/wagtail
  docs: https://docs.wagtail.org
  plugins: https://wagtail.org/packages/
category:
  - cms
  - headless-cms
description: Content management system built on Django, with a page tree editor, StreamField content blocks and a content API.
status: active
maintainer: Torchbox Ltd
maintainerType: company
firstRelease: 2014
hqCountry: GB
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - django
contentStore:
  - database
adminUi: true
headlessApi:
  - rest
templating: django templates, jinja2
i18n: yes, opt-in multi-language authoring
runsAs:
  - always-on
renderingModes:
  - server
installMethod: pip install wagtail, wagtail start
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "8"
latestReleaseDate: 2026-08-25
githubStargazers: 20574
contributors: 1123
social:
  bluesky: https://bsky.app/profile/wagtail.org
  mastodon: https://fosstodon.org/@wagtail
  youtube: https://www.youtube.com/channel/UCXsuEmvisPzuJPaIdpVM0yg
wikidata: Q25206006
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://docs.wagtail.org/en/stable/getting_started/index.html
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/wagtail/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/wagtail/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/wagtail/json
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://pypi.org/pypi/wagtail/json
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://raw.githubusercontent.com/wagtail/wagtail/main/LICENSE
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://wagtail.org/about-wagtail/
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://torchbox.com/contact/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q25206006
    checkedAt: 2026-10-18
  - field: category
    url: https://docs.wagtail.org/en/stable/advanced_topics/headless.html
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://docs.wagtail.org/en/stable/getting_started/index.html
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/wagtail/wagtail
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.wagtail.org/en/stable/getting_started/quick_install.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://pypi.org/pypi/wagtail/json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.wagtail.org/en/stable/deployment/index.html
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.wagtail.org/en/stable/reference/jinja2.html
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.wagtail.org/en/stable/advanced_topics/headless.html
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.wagtail.org/en/stable/advanced_topics/api/index.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.wagtail.org/en/stable/reference/jinja2.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.wagtail.org/en/stable/advanced_topics/i18n.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.wagtail.org/en/stable/deployment/index.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.wagtail.org/en/stable/getting_started/quick_install.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/wagtail/wagtail
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://wagtail.org/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/wagtail/wagtail/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/wagtail/wagtail/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/wagtail/wagtail
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/wagtail/wagtail/contributors?anon=true
    checkedAt: 2026-10-18
  - field: urls
    url: https://wagtail.org/packages/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.wagtail.org/en/stable/deployment/index.html
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Python · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Wagtail is a content management system built on Django, a Python web framework. Editors manage a page tree in a built-in admin, and page content can be built from StreamField blocks. Wagtail runs as a Django application, so a production deployment needs a WSGI server, a database, file storage for media and a web server that serves static files. Content is available through a built-in REST API with two coexisting versions: one read-only, the other allowing authenticated create and edit. Torchbox maintains Wagtail and sells support services.

## Worth knowing

GraphQL is not built in. A GraphQL endpoint needs a third-party package such as wagtail-grapple.
