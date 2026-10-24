---
id: pelican
name: Pelican
urls:
  home: https://getpelican.com/
  repository: https://github.com/getpelican/pelican
  docs: https://docs.getpelican.com/en/latest/
  plugins: https://github.com/pelican-plugins
category:
  - ssg
description: Python static site generator that builds blogs and sites from reStructuredText or Markdown with Jinja2 themes.
status: active
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.11
contentStore:
  - flat-file
templating: jinja2
i18n: articles in multiple languages
runsAs:
  - static
renderingModes:
  - static
installMethod: python3 -m pip install "pelican[markdown]", pipx install "pelican[markdown]", uv tool install "pelican[markdown]"
licenseModel: open-source
license: AGPL-3.0, AGPLv3
currentMajor: "4"
latestReleaseDate: 2026-04-20
githubStargazers: 13354
contributors: 489
social:
  mastodon: https://fosstodon.org/@pelican
  forum: https://github.com/getpelican/pelican/discussions
wikidata: Q28975326
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: urls
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://docs.getpelican.com/en/latest/changelog.html
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q28975326
    checkedAt: 2026-10-18
  - field: category
    url: https://getpelican.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/getpelican/pelican
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.getpelican.com/en/latest/install.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.getpelican.com/en/latest/install.html
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://getpelican.com/
    checkedAt: 2026-10-18
  - field: templating
    url: https://getpelican.com/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://getpelican.com/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://getpelican.com/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.getpelican.com/en/latest/install.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/getpelican/pelican
    checkedAt: 2026-10-18
  - field: license
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/getpelican/pelican
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://pypi.org/pypi/pelican/json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/getpelican/pelican/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/getpelican/pelican
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/getpelican/pelican/contributors?anon=true
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.getpelican.com/en/latest/plugins.html
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.getpelican.com/en/latest/quickstart.html
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pelican is a Python program that builds blogs and sites from reStructuredText or Markdown files, rendered with Jinja2 themes. It needs no database and no server-side logic, so the output is files for any static host. Importers handle WordPress, Dotclear and RSS feeds. The [publishing guide](https://docs.getpelican.com/en/latest/publish.html) describes uploading the output with rsync over SSH.

## Worth knowing

Plugins are published as separate Python packages from the pelican-plugins GitHub organization, and the legacy plugin repository is being phased out.
