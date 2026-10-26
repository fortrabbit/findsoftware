---
id: revel
name: Revel
urls:
  home: https://revel.github.io/
  repository: https://github.com/revel/revel
  docs: https://revel.github.io/manual/
category:
  - framework
description: Full-stack web framework for the Go language, with routing, controllers, templates, validation and a command-line tool.
status: stub
maintainer: Revel Team
maintainerType: community
firstRelease: 2013
language: go
runtime:
  - binary
hosting:
  - binary
templating: go templates
i18n: yes
runsAs:
  - always-on
installMethod: go install, then revel new
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-04-12
githubStargazers: 13209
contributors: 122
social:
  forum: https://stackoverflow.com/questions/tagged/revel
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://revel.github.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/revel/revel
    checkedAt: 2026-10-26
  - field: urls
    url: https://revel.github.io/manual/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://revel.github.io/manual/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/revel/revel
    checkedAt: 2026-10-26
  - field: runtime
    url: https://revel.github.io/
    checkedAt: 2026-10-26
  - field: category
    url: https://revel.github.io/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/revel/revel
    checkedAt: 2026-10-26
  - field: license
    url: https://revel.github.io/manual/deployment.html
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/revel/revel/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/revel/revel/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/revel/revel/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/revel/revel/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/revel/revel/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/revel/revel
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/revel/revel/contributors
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://revel.github.io/manual/deployment.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://revel.github.io/manual/templates.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://revel.github.io/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Revel is a full-stack web framework for Go. It provides declarative routing, controllers with data binding and validation, sessions and flash messages, Go templates, caching, background jobs and a testing framework. Request handling runs through composable middleware called filters, and reusable MVC components can be packaged as modules. The homepage also lists internationalization and hot code reload, which recompiles code and templates while the app runs.

The `revel` command-line tool creates an application with `revel new` and packages an app with a script that runs it. The server engine defaults to Go's own HTTP package, and a custom engine can be registered in its place.

## Worth knowing

Revel does not come with a database or ORM layer. Its database page leaves that choice to the developer and its examples use Go's `database/sql` package.

The deployment page says Revel does not manage connections or resources itself, so production deployments should put an HTTP proxy in front of it and run the app under a daemonizing tool such as systemd or Supervisor.
