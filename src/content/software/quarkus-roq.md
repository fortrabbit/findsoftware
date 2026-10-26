---
id: quarkus-roq
name: Quarkus Roq
urls:
  home: https://iamroq.dev
  repository: https://github.com/quarkiverse/quarkus-roq
  docs: https://iamroq.dev/docs/getting-started/
  plugins: https://iamroq.dev/marketplace/
category:
  - ssg
description: Static site generator for websites and blogs, written in Java on Quarkus, with a CLI, themes and plugins.
status: active
maintainer: Andy Damevin
firstRelease: 2024
language: java
runtime:
  - jvm
hosting:
  - static
basedOn:
  - quarkus
templating: qute
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: jbang app install
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-14
githubStargazers: 157
contributors: 39
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://iamroq.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/quarkiverse/quarkus-roq
    checkedAt: 2026-10-23
  - field: urls
    url: https://iamroq.dev/docs/getting-started/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/quarkiverse/quarkus-roq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://iamroq.dev/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/quarkiverse/quarkus-roq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/quarkiverse/quarkus-roq
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/quarkiverse/quarkus-roq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://iamroq.dev/docs/getting-started/
    checkedAt: 2026-10-23
  - field: templating
    url: https://iamroq.dev/llms.txt
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/quarkiverse/quarkus-roq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://iamroq.dev/llms.txt
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://iamroq.dev/docs/getting-started/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/quarkiverse/quarkus-roq
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/quarkiverse/quarkus-roq/main/LICENSE
    checkedAt: 2026-10-23
  - field: urls
    url: https://iamroq.dev/marketplace/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/quarkiverse/quarkus-roq/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/quarkiverse/quarkus-roq/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/quarkiverse/quarkus-roq/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/quarkiverse/quarkus-roq
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/quarkiverse/quarkus-roq/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Roq is a static site generator for websites and blogs, written in Java and built on Quarkus, with Qute templates. The [getting started guide](https://iamroq.dev/docs/getting-started/) installs its command line tool with JBang and runs a site in development mode on a developer's machine.

`roq generate` writes the finished site to `target/roq` as static files. The [publishing guide](https://iamroq.dev/docs/publishing/) describes a GitHub Action for GitHub Pages, and CI configurations for GitLab Pages and other services that publish the same folder. A [migration guide](https://iamroq.dev/docs/migrating/) covers moving an existing Jekyll or Hugo site. The Roq Quarkus extensions for data, front matter and generation can also be used on their own, as the README states.

## Worth knowing

The published output is plain files, so the live site needs no Java.
