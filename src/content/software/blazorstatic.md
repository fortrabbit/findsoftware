---
id: blazorstatic
name: BlazorStatic
urls:
  home: https://blazorstatic.net/
  repository: https://github.com/BlazorStatic/BlazorStatic
  docs: https://github.com/BlazorStatic/BlazorStatic/blob/master/BlazorStaticWebsite/Content/Docs/new-start.md
category:
  - ssg
description: Static site generator that turns a Blazor app into a folder of static HTML files, with pages and Markdown posts built by .NET.
status: active
maintainer: BlazorStatic
firstRelease: 2024
language: csharp
runtime:
  - dotnet
hosting:
  - static
runtimeMin: dotnet 8
basedOn:
  - blazor
contentStore:
  - flat-file
templating: razor
runsAs:
  - static
renderingModes:
  - static
installMethod: dotnet new install BlazorStatic.Templates, then dotnet new BlazorStaticMinimalBlog
licenseModel: open-source
license: MIT
githubStargazers: 249
contributors: 6
social:
  discord: https://discord.gg/DsAXsMuEbx
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://blazorstatic.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/BlazorStaticWebsite/Content/Docs/new-start.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/BlazorStatic/BlazorStatic/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/BlazorStaticWebsite/Content/Docs/deployment.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/BlazorStatic/BlazorStatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/BlazorStatic/BlazorStatic/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/BlazorStatic/BlazorStatic/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

BlazorStatic is a library that turns a Blazor app into a static site. Running the app fetches the HTML of each page with HttpClient and writes the HTML files and assets to an output folder. Pages are discovered among Razor files, and blog posts are Markdown files with YAML front matter, so content from other static site generators can be reused. The [deployment guide](https://github.com/BlazorStatic/BlazorStatic/blob/master/BlazorStaticWebsite/Content/Docs/deployment.md) describes how the output folder is published, since it holds plain HTML files and assets.

## Worth knowing

The output is produced by running the .NET app, so building the site needs the .NET SDK on the developer's machine or in CI. The live site needs only a host that serves static files. The NuGet package has only prerelease versions, and the repository has no stable release.
