---
id: capro
name: Capro
urls:
  home: https://capro.xy2z.dev/
  repository: https://github.com/xy2z/capro
  docs: https://capro.xy2z.dev/getting-started/
category:
  - ssg
description: PHP static site generator that builds pages from Blade views, with collections and Markdown support.
status: active
maintainer: Alexander Pedersen
maintainerType: individual
firstRelease: 2022
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
contentStore:
  - flat-file
templating: blade
runsAs:
  - static
  - local
installMethod: composer global require xy2z/capro:@alpha
licenseModel: open-source
license: MIT
latestReleaseDate: 2025-12-15
githubStargazers: 10
packagistDownloads: 141
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://capro.xy2z.dev/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/xy2z/capro
    checkedAt: 2026-10-20
  - field: urls
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/xy2z/capro/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/xy2z/capro.json
    checkedAt: 2026-10-20
  - field: category
    url: https://capro.xy2z.dev/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/xy2z/capro
    checkedAt: 2026-10-20
  - field: runtime
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: templating
    url: https://capro.xy2z.dev/
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://capro.xy2z.dev/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://capro.xy2z.dev/getting-started/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/xy2z/capro
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/xy2z/capro/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/xy2z/capro
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/xy2z/capro.json
    checkedAt: 2026-10-20
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Capro is a PHP static site generator that uses the Blade template engine. Pages are Blade views in `views/pages`, and YAML front matter at the top of a view becomes variables for the view, its layout and the collection filter. The homepage lists collections such as blog posts that need no configuration, Markdown support, and view templates that turn data from an API into pages.

Capro is installed as a global Composer command and builds the site into the `public` directory on the developer's machine. A `serve` command rebuilds the site on each file change during development.

## Worth knowing

Capro is in alpha. The homepage says it "has not been thoroughly tested for production usage", and the install command requires the `@alpha` constraint.
