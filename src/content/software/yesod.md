---
id: yesod
name: Yesod
urls:
  home: https://www.yesodweb.com/
  repository: https://github.com/yesodweb/yesod
  docs: https://www.yesodweb.com/book
category:
  - framework
description: Haskell web framework for type-safe, RESTful web applications, built on the Web Application Interface.
status: active
maintainer: Michael Snoyman
firstRelease: 2010
language: haskell
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - sqlite
  - mysql
  - mongodb
templating: Shakespearean (Hamlet, Julius, Cassius, Lucius)
i18n: yes
runsAs:
  - always-on
installMethod: stack new scaffold, then stack build
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-06-16
githubStargazers: 2730
contributors: 232
social:
  forum: https://groups.google.com/group/yesodweb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.yesodweb.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/yesodweb/yesod
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.yesodweb.com/book
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/yesodweb/yesod/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/yesodweb/yesod/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.yesodweb.com/book/deploying-your-webapp
    checkedAt: 2026-10-26
  - field: category
    url: https://www.yesodweb.com/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.yesodweb.com/book/shakespearean-templates
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.yesodweb.com/book/persistent
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.yesodweb.com/book/internationalization
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.yesodweb.com/page/quickstart
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.yesodweb.com/book/deploying-your-webapp
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/yesodweb/yesod/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/yesodweb/yesod
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/yesodweb/yesod/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hackage.haskell.org/package/yesod-0.0.0
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://hackage.haskell.org/package/yesod.json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hackage.haskell.org/package/yesod-1.6.2.3
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/yesodweb/yesod
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/yesodweb/yesod/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Yesod is a web framework for the Haskell programming language, built on the Web Application Interface (WAI). Its homepage describes it as a framework for type-safe, RESTful web applications. The quickstart scaffolds a project with Stack, and the application is built into an executable. Its persistence layer supports PostgreSQL, SQLite, MySQL and MongoDB, and its templates use the Shakespearean family of template languages. The Yesod book documents the framework and its deployment.

## Worth knowing

The [deployment chapter](https://www.yesodweb.com/book/deploying-your-webapp) describes Warp as a fully capable server that can be used without a frontend server. The quickstart requires Stack version 2 or later to create the scaffold.
