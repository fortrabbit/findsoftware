---
id: biff
name: Biff
urls:
  home: https://biffweb.com
  repository: https://github.com/jacobobryant/biff
  docs: https://github.com/jacobobryant/biff/blob/master/README.md
category:
  - framework
description: Full-stack web framework for Clojure with SQLite, Datastar, email sign-in and an admin dashboard, composed from separate libraries.
status: active
maintainer: Jacob O'Bryant
maintainerType: individual
firstRelease: 2022
language: clojure
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
renderingModes:
  - server
installMethod: git clone of the biff-starter repository, then clj -M:run dev
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-10
githubStargazers: 1119
contributors: 26
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://biffweb.com/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/jacobobryant/biff
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/jacobobryant/biff/master/LICENSE
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/jacobobryant/biff
    checkedAt: 2026-10-24
  - field: category
    url: https://biffweb.com/
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/jacobobryant/biff/blob/master/libs/ring/README.md
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/jacobobryant/biff/blob/master/README.md
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/jacobobryant/biff/blob/master/libs/admin/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/jacobobryant/biff
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/jacobobryant/biff/master/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/jacobobryant/biff/releases
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/jacobobryant/biff/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/jacobobryant/biff/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/jacobobryant/biff
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/jacobobryant/biff/contributors?per_page=1
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Biff is a full-stack web framework for Clojure, composed from separate libraries that each have their own documentation. It covers SQLite storage, server-side rendering with Datastar, email sign-in and an admin dashboard. A new project starts from the biff-starter repository, which is cloned with git and run with a Clojure command-line task.

## Worth knowing

SQLite is the default database, and XTDB is the documented alternative. The admin library shows usage metrics, a user directory and email alerts. The biff.tasks library provisions an Ubuntu server for production deployments.
