---
id: ikiwiki
name: ikiwiki
urls:
  home: https://ikiwiki.info/
  docs: https://ikiwiki.info/setup/
  plugins: https://ikiwiki.info/plugins/
category:
  - wiki
  - ssg
description: Wiki compiler that builds wiki pages into a static website, storing page history in a revision control system, with blogging support.
status: active
maintainer: Joey
hosting:
  - static
adminUi: true
i18n: yes, translating individual wiki pages with po files
runsAs:
  - static
  - per-request
renderingModes:
  - static
installMethod: apt-get install ikiwiki on Debian and Ubuntu
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "3"
latestReleaseDate: 2026-02-01
social:
  forum: https://ikiwiki.info/forum/
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ikiwiki.info/
    checkedAt: 2026-10-23
  - field: urls
    url: https://ikiwiki.info/download/
    checkedAt: 2026-10-23
  - field: urls
    url: https://ikiwiki.info/setup/
    checkedAt: 2026-10-23
  - field: urls
    url: https://ikiwiki.info/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://ikiwiki.info/
    checkedAt: 2026-10-23
  - field: category
    url: https://ikiwiki.info/features/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://ikiwiki.info/download/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://ikiwiki.info/install/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://ikiwiki.info/setup/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://ikiwiki.info/features/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://ikiwiki.info/features/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ikiwiki.info/features/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ikiwiki.info/features/
    checkedAt: 2026-10-23
  - field: license
    url: https://ikiwiki.info/freesoftware/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://ikiwiki.info/freesoftware/
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://ikiwiki.info/news/
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://ikiwiki.info/news/
    checkedAt: 2026-10-23
figure:
  emoji: 📚
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Wiki
ai: authored
---

ikiwiki is a wiki compiler written in Perl. It converts wiki pages into HTML pages that form a static website, and it supports blogging. Pages are plain files, and page history is kept in a revision control system such as Subversion or git when one is used, so a page can be changed with a text editor and committed. The [setup tutorial](https://ikiwiki.info/setup/) covers installing and creating a wiki. Joey and many contributors develop the project.

## Worth knowing

Editing pages in a web browser and the other optional wiki features need CGI. A host that serves only static files gets the built site without them.
