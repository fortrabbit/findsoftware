---
id: skosh
name: Skosh
urls:
  home: https://lyften.com/projects/skosh/
  repository: https://github.com/Torann/skosh
  docs: https://lyften.com/projects/skosh/doc/
category:
  - ssg
description: PHP static site generator that converts Markdown, Textile and Twig files into static HTML sites.
status: active
maintainer: Daniel Stainback
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 7.2
contentStore:
  - flat-file
templating: twig
runsAs:
  - static
renderingModes:
  - static
installMethod: composer create-project
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "0"
latestReleaseDate: 2021-05-20
githubStargazers: 4
packagistDownloads: 147
contributors: 1
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://lyften.com/projects/skosh/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/Torann/skosh
    checkedAt: 2026-10-21
  - field: urls
    url: https://lyften.com/projects/skosh/doc/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/Torann/skosh/blob/0.3.0/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://lyften.com/projects/skosh/
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/Torann/skosh
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/Torann/skosh-generator/blob/0.3.1/composer.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/Torann/skosh-generator/blob/0.3.1/composer.json
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://lyften.com/projects/skosh/doc/
    checkedAt: 2026-10-21
  - field: templating
    url: https://lyften.com/projects/skosh/
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://github.com/Torann/skosh/blob/0.3.0/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://lyften.com/projects/skosh/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://lyften.com/projects/skosh/
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/Torann/skosh/blob/0.3.0/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/Torann/skosh-generator/blob/0.3.1/composer.json
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://repo.packagist.org/p2/torann/skosh-generator.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/Torann/skosh-generator/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/Torann/skosh
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/Torann/skosh/contributors?anon=true
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/torann/skosh-generator.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/torann/skosh-generator.json
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Skosh turns Markdown and Textile files into a static HTML site, combining them with Twig templates. It is written in PHP and built on the Symfony HTTP Kernel, so Symfony bundles can extend it. The generator supports RSS and sitemaps.

JavaScript and Sass files are handled by Gulp rather than PHP, so a project also needs Node and the Gulp command line. The [documentation](https://lyften.com/projects/skosh/doc/) covers the Composer install and these Node steps.
