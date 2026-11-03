---
id: pilbox
name: Pilbox
urls:
  repository: https://github.com/agschwender/pilbox
  docs: https://github.com/agschwender/pilbox/blob/master/README.rst
category:
  - media
description: Image processing application server that requests images by URL and resizes, crops or converts them.
status: discontinued
maintainer: Adam Gschwender
maintainerType: individual
firstRelease: 2013
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 2.7
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2018-08-11
githubStargazers: 604
contributors: 14
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: status
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/agschwender/pilbox
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/agschwender/pilbox/blob/master/setup.py
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/agschwender/pilbox/blob/master/setup.py
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/agschwender/pilbox
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/agschwender/pilbox/blob/master/README.rst
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/agschwender/pilbox/blob/master/LICENSE.txt
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/agschwender/pilbox/blob/master/LICENSE.txt
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/agschwender/pilbox/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/agschwender/pilbox/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/agschwender/pilbox/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/agschwender/pilbox
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/agschwender/pilbox/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pilbox is an image processing application server that fetches an image from a URL and resizes, crops or converts it. It is written in Python on the Tornado web framework and uses the Pillow imaging library. It runs as a server process behind a web server or CDN, installs with pip, and can also be used as a library to build a custom image server. The README states that the project is no longer maintained.

## Worth knowing

The README advises against exposing the server to the internet directly, because the application includes no caching of its own. Requests can be restricted by an HMAC signature or an allowed-hosts list.
