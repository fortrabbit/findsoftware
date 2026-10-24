---
id: statiq
name: Statiq
urls:
  home: https://statiq.dev
  repository: https://github.com/statiqdev/Statiq
  docs: https://statiq.dev/framework
  pricing: https://www.statiq.dev/support/
category:
  - framework
  - ssg
description: Static content generation framework for .NET, on which the Statiq Web static site generator is built.
status: active
maintainer: Statiq, Inc.
maintainerType: company
firstRelease: 2020
language: csharp
runtime:
  - dotnet
hosting:
  - static
templating: razor
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: dotnet add package Statiq.Web
licenseModel: open-core
license: MIT, Statiq Public License 1.0.0
githubStargazers: 1686
contributors: 80
social:
  x: https://twitter.com/statiqdev
  forum: https://github.com/statiqdev/Discussions/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.statiq.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/statiqdev/Statiq
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/statiqdev/Statiq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/statiqdev/Statiq
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/statiqdev/Statiq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://www.statiq.dev/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/statiqdev/Statiq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.statiq.dev/web
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.statiq.dev/framework
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/statiqdev/Statiq/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/statiqdev/Statiq/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://www.statiq.dev/support/
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.statiq.dev/support/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/statiqdev/Statiq/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/statiqdev/Statiq
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/statiqdev/Statiq/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/statiqdev/Statiq/blob/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.statiq.dev/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://www.statiq.dev/framework
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.statiq.dev/web
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.statiq.dev/web
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Statiq is a static content generation framework for .NET, written in C#. Content and data can come from input files, databases and services, and the resulting documents are processed by pipelines of modules before they are written to output files or deployed to a hosting service. It evolved from Wyam.

Statiq does not ship as a self-contained executable. The generator runs from within the user's own .NET console application, which references a package such as Statiq.App or Statiq.Web, and it writes static site content to an output folder.

## Worth knowing

The repository holds the MIT-licensed framework and also Statiq Web, which is dual-licensed: a public license limits commercial use by size, and a private license is bought per developer. The project calls this scheme open-core.
