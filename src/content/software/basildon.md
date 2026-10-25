---
id: basildon
name: Basildon
urls:
  home: https://basildon.samwilson.id.au
  repository: https://github.com/samwilson/basildon
  docs: https://basildon.samwilson.id.au
category:
  - ssg
description: PHP static site generator that makes YAML frontmatter queryable through SQLite from Twig templates.
status: active
maintainer: Sam Wilson
maintainerType: individual
firstRelease: 2020
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 8.2
contentStore:
  - flat-file
databases:
  - sqlite
templating: twig
runsAs:
  - static
renderingModes:
  - static
installMethod: composer create-project
licenseModel: open-source
license: GPL-3.0-or-later, GPL-3.0
currentMajor: "9"
latestReleaseDate: 2026-10-13
githubStargazers: 13
packagistDownloads: 227
contributors: 1
packagistMonthlyDownloads: 4
dependentRepos: 4
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: urls
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/samwilson/basildon
    checkedAt: 2026-10-20
  - field: urls
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://api.github.com/users/samwilson
    checkedAt: 2026-10-20
  - field: category
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/samwilson/basildon
    checkedAt: 2026-10-20
  - field: runtime
    url: https://api.github.com/repos/samwilson/basildon
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: databases
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: templating
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://basildon.samwilson.id.au
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/samwilson/basildon/blob/main/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/samwilson/basildon
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/samwilson/basildon.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/samwilson/basildon/releases/latest
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://api.github.com/repos/samwilson/basildon/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/samwilson/basildon
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/samwilson/basildon/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/samwilson/basildon.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/samwilson/basildon.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/samwilson%2Fbasildon
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/samwilson/basildon/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Basildon is a static site generator written in PHP. It reads Markdown files with YAML frontmatter from a content/ directory, makes that frontmatter queryable through SQLite from within Twig templates, and writes the rendered site to an output/ directory. Its output is HTML or any other text-based format, and PDF through LaTeX.

A site is created with Composer from the samwilson/basildon-skeleton package. The output directory is ready to upload to a web server as the top level of the site. A Docker image is also published for running Basildon.

## Worth knowing

Basildon empties the output directory on every run, so anything placed there by hand is removed at the next build.
