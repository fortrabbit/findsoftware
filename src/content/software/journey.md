---
id: journey
name: Journey
urls:
  home: https://kabukky.github.io/journey/
  repository: https://github.com/kabukky/journey
  docs: https://github.com/kabukky/journey/wiki
category:
  - cms
description: Blog engine written in Go that runs Ghost themes and provides a browser admin area for posts.
status: stub
maintainer: kabukky
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
  - local
renderingModes:
  - server
installMethod: download a release binary and extract it
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2017-10-15
githubStargazers: 1985
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://kabukky.github.io/journey/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/kabukky/journey
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/kabukky/journey
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/kabukky/journey/wiki/Building-Journey-from-source
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/kabukky/journey/wiki/Installing-Journey-on-Ubuntu-Server
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/kabukky/journey/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/kabukky/journey/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: license
    url: https://kabukky.github.io/journey/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/kabukky/journey/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/kabukky/journey/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/kabukky/journey/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/kabukky/journey/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/kabukky/journey
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/kabukky/journey/contributors
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/kabukky/journey/wiki/FAQ
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/kabukky/journey/wiki/FAQ
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/kabukky/journey/wiki/Setting-up-Journey
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Journey is a blog engine written in Go that is compatible with Ghost themes. It serves the blog and an admin area in the browser, at `/admin/`, where posts are created and updated, and it keeps its data in a SQLite database file. Releases are downloaded as a zip file for each operating system, and the code can also be built from source. The Ubuntu Server guide in the project's wiki runs it as a background service that starts again after a reboot. Plugins are written in Lua, and the wiki describes how to move an existing Ghost installation to Journey.

## Worth knowing

The README states that Journey is still in alpha and has not been tested in production, and the homepage repeats the alpha label.
