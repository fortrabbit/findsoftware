---
id: go-app
name: go-app
urls:
  home: https://go-app.dev
  repository: https://github.com/maxence-charriere/go-app
  docs: https://go-app.dev/getting-started
category:
  - framework
  - ui-library
description: Go package for building progressive web apps whose UI is written in Go and compiled to WebAssembly.
status: active
maintainer: Maxence Charriere
maintainerType: individual
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
  - static
runsAs:
  - always-on
  - static
renderingModes:
  - server
  - spa
  - static
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-10-22
githubStargazers: 8974
contributors: 33
social:
  x: https://twitter.com/jonhymaxoo
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://go-app.dev
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/maxence-charriere/go-app
    checkedAt: 2026-10-27
  - field: urls
    url: https://go-app.dev/getting-started
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/maxence-charriere/go-app/releases/tag/2.6.0
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/maxence-charriere/go-app/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: maintainerType
    url: https://api.github.com/users/maxence-charriere
    checkedAt: 2026-10-27
  - field: language
    url: https://github.com/maxence-charriere/go-app
    checkedAt: 2026-10-27
  - field: runtime
    url: https://github.com/maxence-charriere/go-app/blob/v11.1.3/go.mod
    checkedAt: 2026-10-27
  - field: category
    url: https://go-app.dev
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://raw.githubusercontent.com/maxence-charriere/go-app/master/README.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://raw.githubusercontent.com/maxence-charriere/go-app/master/README.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/github-deploy.md
    checkedAt: 2026-10-27
  - field: renderingModes
    url: https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/seo.md
    checkedAt: 2026-10-27
  - field: renderingModes
    url: https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/seo.md
    checkedAt: 2026-10-27
  - field: renderingModes
    url: https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/github-deploy.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/maxence-charriere/go-app/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/maxence-charriere/go-app/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/maxence-charriere/go-app/releases/tag/v11.1.3
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/maxence-charriere/go-app/releases/tag/v11.1.3
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/maxence-charriere/go-app
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/maxence-charriere/go-app
    checkedAt: 2026-10-27
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

go-app is a Go package for building progressive web apps. Components are written in Go, compiled to WebAssembly for the browser, and served by a Go program that uses the standard net/http package. The package is added to a project with `go get`.

The [SEO guide](https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/seo.md) says the server prerenders components to HTML before the page reaches the browser, where the app then generates its content on the client side.

The app can run from a Go server that keeps running, or be generated as static files for hosts such as GitHub Pages, as the [GitHub Pages deployment guide](https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/github-deploy.md) describes.
