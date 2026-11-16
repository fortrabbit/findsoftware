---
id: markdig
name: Markdig
urls:
  home: https://xoofx.github.io/markdig/
  repository: https://github.com/xoofx/markdig
  docs: https://xoofx.github.io/markdig/
category:
  - library
description: CommonMark-compliant Markdown processor for .NET that converts Markdown to HTML and exposes its syntax tree.
status: active
maintainer: Alexandre Mutel
maintainerType: individual
firstRelease: 2016
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 2.0
installMethod: dotnet add package
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2026-11-04
githubStargazers: 5359
contributors: 105
dependentPackages: 220
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://github.com/xoofx/markdig/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/xoofx/markdig
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/xoofx/markdig/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/xoofx/markdig/blob/main/license.txt
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/xoofx/markdig/blob/main/license.txt
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/xoofx/markdig/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/xoofx/markdig
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/xoofx/markdig/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://xoofx.github.io/markdig/docs/getting-started
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://xoofx.github.io/markdig/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/xoofx/markdig/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/xoofx/markdig
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/xoofx/markdig/releases/tag/1.6.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/xoofx/markdig/releases/tag/1.6.0
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/xoofx/markdig/commits/687584284e22240dd22ca184f674289fc5c938e6
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/xoofx/markdig
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/xoofx/markdig/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/Markdig
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Markdig is a Markdown library for .NET programs. A call to `Markdown.ToHtml` converts a string with the plain CommonMark parser, and a pipeline built with `MarkdownPipelineBuilder` switches on the built-in extensions, such as tables, footnotes, task lists, math and diagrams. The caller sets the pipeline, so an application decides which Markdown syntax it accepts.

Besides HTML, the parser builds a syntax tree with source positions, which editors and document tools can use, and it can parse a document and render it back with its whitespace kept. Custom renderers turn the same tree into other formats, and a plain-text conversion strips all formatting. A second package, Markdig.Signed, ships the same code as signed assemblies.
