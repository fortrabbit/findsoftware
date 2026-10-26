---
id: fiber
name: Fiber
urls:
  home: https://gofiber.io
  repository: https://github.com/gofiber/fiber
  docs: https://docs.gofiber.io
category:
  - framework
description: Express-inspired web framework for Go, built on Fasthttp.
status: active
maintainer: Fenny and Contributors
maintainerType: community
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
templating: html/template, ace, amber, django, handlebars, jet, mustache, pug, slim
runsAs:
  - always-on
renderingModes:
  - server
  - spa
installMethod: go get github.com/gofiber/fiber/v3
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 40232
contributors: 402
social:
  discord: https://gofiber.io/discord
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://gofiber.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/gofiber/fiber
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.gofiber.io/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/gofiber/fiber/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/gofiber/fiber
    checkedAt: 2026-10-26
  - field: runtime
    url: https://gofiber.io/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.gofiber.io/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/gofiber/fiber/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/gofiber/fiber
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/gofiber/fiber/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: templating
    url: https://gofiber.io/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://docs.gofiber.io/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://gofiber.io/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.gofiber.io/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/gofiber/fiber
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/gofiber/fiber/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/gofiber/fiber/commits/v1.0.0
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/gofiber/fiber/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/gofiber/fiber/releases?per_page=100
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Fiber is an Express-inspired web framework written in Go and built on Fasthttp. A Go program imports the framework and starts its own server, so a deployed Fiber app is a single Go binary that stays up and answers requests.

Fiber renders HTML on the server through a views interface, and one wildcard route can serve a single-page app. The template engines the homepage lists are supported through that interface.

## Worth knowing

The template engines, storage drivers and contrib packages are separate modules and are not part of the core install.
