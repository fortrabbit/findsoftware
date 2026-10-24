---
id: blogengine-net
name: BlogEngine.NET
urls:
  home: https://blogengine.io/
  repository: https://github.com/BlogEngine/BlogEngine.NET
  docs: https://blogengine.io/docs/get-started/
category:
  - cms
description: Open source blogging platform for ASP.NET, with posts and pages stored as XML files or in a database.
status: stub
maintainer: BlogEngine
firstRelease: 2007
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 4.5
contentStore:
  - flat-file
  - database
databases:
  - sqlserver
  - mysql
  - sqlite
adminUi: true
installMethod: manual upload of the release ZIP to the site root, or one-click installer at a hosting provider
licenseModel: open-source
license: MS-RL, Creative Commons (docs)
currentMajor: "3"
latestReleaseDate: 2019-06-15
githubStargazers: 986
contributors: 20
social:
  x: https://twitter.com/blogenginenet
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://blogengine.io/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET
    checkedAt: 2026-10-24
  - field: urls
    url: https://blogengine.io/docs/get-started/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://blogengine.io/docs/get-started/
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://blogengine.io/docs/get-started/
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://blogengine.io/docs/get-started/
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://blogengine.io/faq/
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://blogengine.io/faq/
    checkedAt: 2026-10-24
  - field: databases
    url: https://blogengine.io/faq/
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://blogengine.io/faq/
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://github.com/BlogEngine/BlogEngine.NET/blob/master/README.md
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/BlogEngine/BlogEngine.NET/contributors?per_page=1
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: C# · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

BlogEngine.NET is an open source blogging platform for ASP.NET that runs on Windows hosting with IIS. Posts and pages are stored as XML files in the App_Data folder by default, and a database provider stores them in MS SQL Server, MySQL, SQLite or other standard SQL databases. The admin panel is at the /admin/ path of the site, and the App_Data and Custom folders need write access for the application to run.

## Worth knowing

The code is released under the Microsoft Reciprocal License, and the documentation under Creative Commons. The README asks users to update the machineKey in Web.config after installation, to prevent a known exploit that affects installs still using the default admin account. The newest release is older than the default branch, which has received commits since.
