---
id: hyde
name: HydePHP
urls:
  home: https://hydephp.com
  repository: https://github.com/hydephp/hyde
  docs: https://hydephp.com/docs/2.x/
  plugins: https://hydephp.com/docs/2.x/extensions
category:
  - ssg
description: Static site generator built on Laravel Zero that compiles Markdown and Blade files into a static HTML site.
status: active
maintainer: Emma De Silva
maintainerType: individual
firstRelease: 2022
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 8.2
contentStore:
  - flat-file
adminUi: false
templating: blade
runsAs:
  - static
renderingModes:
  - static
installMethod: composer create-project hyde/hyde
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-11
githubStargazers: 488
packagistDownloads: 4358
contributors: 13
packagistMonthlyDownloads: 211
social:
  x: https://x.com/HydeFramework
  discord: https://discord.hydephp.com
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://hydephp.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/hydephp/hyde
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/hyde/hyde
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/hydephp/develop
    checkedAt: 2026-10-18
  - field: urls
    url: https://hydephp.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://hydephp.com/about
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://packagist.org/packages/hyde/hyde
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://hydephp.com/license
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://hydephp.com/about
    checkedAt: 2026-10-18
  - field: category
    url: https://hydephp.com/docs/2.x/core-concepts
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/hydephp/hyde
    checkedAt: 2026-10-18
  - field: runtime
    url: https://hydephp.com/docs/2.x/quickstart
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/hyde/hyde.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://hydephp.com/docs/2.x/quickstart
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://hydephp.com/docs/2.x/core-concepts
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://hydephp.com/docs/2.x/core-concepts
    checkedAt: 2026-10-18
  - field: templating
    url: https://hydephp.com/docs/2.x/core-concepts
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://hydephp.com/docs/2.x/compile-and-deploy
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://hydephp.com/docs/2.x/quickstart
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/hydephp/hyde
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/hydephp/hyde
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/hydephp/hyde/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/hydephp/hyde/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/hydephp/hyde
    checkedAt: 2026-10-18
  - field: contributors
    url: https://github.com/hydephp/develop/graphs/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/hyde/hyde
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/hyde/framework
    checkedAt: 2026-10-18
  - field: urls
    url: https://hydephp.com/docs/2.x/quickstart
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://hydephp.com/docs/2.x/
    checkedAt: 2026-10-19
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/hyde/hyde/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

HydePHP is a static site generator built on Laravel Zero that turns a folder of Markdown and Blade files into a static website. Pages are written in Markdown with YAML front matter or as Blade files. The directory a source file sits in decides which Blade template renders it, so layout follows from where files are placed. Node is needed only to compile a site's own assets, and the compiled output is plain files for any web server or FTP host.

## Worth knowing

The about page names one creator and maintainer, Emma De Silva, and says the project has no venture funding. Development happens in a separate monorepo, while the template repository is the one Composer installs.
