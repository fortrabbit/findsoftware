---
id: tengine
name: Tengine
urls:
  home: https://tengine.taobao.org
  repository: https://github.com/alibaba/tengine
  docs: https://tengine.taobao.org/documentation.html
category:
  - web-server
description: High-performance web server and reverse proxy based on nginx, originated by Taobao, with added features for high-traffic websites.
status: active
maintainer: Alibaba Group Holding Limited
maintainerType: company
firstRelease: 2011
language: c
runtime:
  - binary
hosting:
  - binary
basedOn:
  - nginx
runsAs:
  - always-on
installMethod: source build (./configure, make, make install)
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "3"
latestReleaseDate: 2023-11-06
githubStargazers: 13412
contributors: 97
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://tengine.taobao.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://tengine.taobao.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/alibaba/tengine
    checkedAt: 2026-10-30
  - field: urls
    url: https://tengine.taobao.org/documentation.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/alibaba/tengine/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://tengine.taobao.org/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/alibaba/tengine
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/alibaba/tengine/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/alibaba/tengine/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://tengine.taobao.org/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/alibaba/tengine/releases/tag/3.1.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://tengine.taobao.org/changelog.html
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://tengine.taobao.org/changelog.html
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/alibaba/tengine
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/alibaba/tengine/contributors?per_page=1
    checkedAt: 2026-10-30
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

Tengine is a web server and reverse proxy based on nginx, and its [documentation](https://tengine.taobao.org/documentation.html) says most configuration options match nginx's. It is built from C source with configure and make, and each release also comes as RPM, Debian and Alpine packages and as a container image.
