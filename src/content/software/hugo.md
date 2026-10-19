---
id: hugo
name: Hugo
urls:
  home: https://gohugo.io/
  repository: https://github.com/gohugoio/hugo
  docs: https://gohugo.io/documentation/
category:
  - ssg
description: Static site generator written in Go that builds websites from Markdown content and Go templates.
status: active
maintainer: The Hugo Authors
maintainerType: community
firstRelease: 2013
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: go templates
i18n: multilingual framework with single-host and multihost configurations
runsAs:
  - static
renderingModes:
  - static
installMethod: prebuilt binary, snap, homebrew, linux distribution packages, go install, docker
licenseModel: open-source
license: Apache-2.0, Apache-2.0
currentMajor: "0.168"
latestReleaseDate: 2026-10-13
githubStargazers: 90146
contributors: 933
social:
  mastodon: https://fosstodon.org/@gohugoio
  forum: https://discourse.gohugo.io/
wikidata: Q24415127
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/gohugoio/hugo
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/gohugoio/hugo
    checkedAt: 2026-10-18
  - field: urls
    url: https://gohugo.io/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://www.wikidata.org/wiki/Q24415127
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://gohugo.io/about/introduction/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://gohugo.io/about/introduction/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q24415127
    checkedAt: 2026-10-18
  - field: category
    url: https://gohugo.io/about/introduction/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/gohugoio/hugo
    checkedAt: 2026-10-18
  - field: runtime
    url: https://gohugo.io/installation/linux/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://gohugo.io/content-management/formats/
    checkedAt: 2026-10-18
  - field: templating
    url: https://gohugo.io/templates/introduction/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://gohugo.io/content-management/multilingual/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://gohugo.io/about/introduction/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://gohugo.io/installation/linux/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/gohugoio/hugo
    checkedAt: 2026-10-18
  - field: license
    url: https://gohugo.io/about/license/
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://gohugo.io/about/license/
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/gohugoio/hugo/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/gohugoio/hugo
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/gohugoio/hugo/contributors?anon=true
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://gohugo.io/getting-started/usage/
    checkedAt: 2026-10-19
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Go · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hugo is a static site generator that builds websites from Markdown, HTML, Org mode and, through external tools, AsciiDoc and reStructuredText files. Templates use Go's text and html/template packages. Hugo ships as one self-contained binary, so building a site needs no separate language runtime, and the output needs only static file hosting. Multilingual sites can run on a single host or on multiple hosts. Extensions come as modules and themes, which are listed in a theme gallery. The Hugo Authors maintain it as a community project, and JetBrains and CloudCannon are named as sponsors. The [host and deploy guide](https://gohugo.io/host-and-deploy/) lists the deploy targets.

## Worth knowing

Hugo comes in standard, deploy, extended and extended/deploy builds. The deploy builds upload straight to Google Cloud Storage, AWS S3 or Azure Storage. The extended builds bundle LibSass for Sass to CSS, which the project has deprecated.
