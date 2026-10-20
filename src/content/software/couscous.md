---
id: couscous
name: Couscous
urls:
  home: https://couscous.io
  repository: https://github.com/CouscousPHP/Couscous
  docs: https://couscous.io/docs/
category:
  - ssg
description: PHP tool that generates a documentation website from Markdown files and publishes it on GitHub Pages.
status: active
maintainer: Matthieu Napoli
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 7.4
contentStore:
  - flat-file
templating: twig
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: phar download
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-02-21
githubStargazers: 839
packagistDownloads: 72085
contributors: 44
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/CouscousPHP/Couscous
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/CouscousPHP/Couscous
    checkedAt: 2026-10-20
  - field: urls
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/CouscousPHP/Couscous/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/couscous/couscous.json
    checkedAt: 2026-10-20
  - field: category
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/CouscousPHP/Couscous
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/CouscousPHP/Couscous/blob/1.10.0/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/CouscousPHP/Couscous/blob/1.10.0/composer.json
    checkedAt: 2026-10-20
  - field: templating
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://couscous.io
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/CouscousPHP/Couscous/blob/master/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/couscous/couscous.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/CouscousPHP/Couscous/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/CouscousPHP/Couscous
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/CouscousPHP/Couscous/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/couscous/couscous.json
    checkedAt: 2026-10-20
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Couscous builds its site from Markdown files kept in a repository next to the code, and the generated site is static. Templates use Twig.

The project is downloaded as a phar file. A preview command renders the site on the developer's machine, and a deploy command publishes the site on the `gh-pages` branch, where GitHub Pages serves it. The [homepage](https://couscous.io) describes these steps.
