---
id: atas-ssg
name: Ata's SSG
urls:
  repository: https://github.com/atas/ssg
  docs: https://github.com/atas/ssg/blob/main/GITHUB-PAGES.md
category:
  - ssg
description: PHP static site generator for GitHub Pages that builds Markdown pages and posts with a GitHub Action.
status: active
maintainer: Ata Sasmaz
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: clone the repository, then run composer update
licenseModel: open-source
license: MIT
githubStargazers: 36
contributors: 1
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/atas/ssg
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/atas/ssg/blob/main/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://api.github.com/repos/atas/ssg
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/atas/ssg
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/atas/ssg/blob/main/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/atas/ssg
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/atas/ssg
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/atas/ssg/contributors
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Ata's SSG is a PHP static site generator for GitHub Pages. Markdown pages and posts are kept as files in the `pages` and `posts` folders of a clone or fork of the repository, and a GitHub Action builds the site and deploys it to GitHub Pages. The [GitHub Pages guide](https://github.com/atas/ssg/blob/main/GITHUB-PAGES.md) covers the Pages configuration. A local development server runs through `make dev-server`, which needs Docker.

## Worth knowing

The repository has no tagged release. It requires a separate PHP library, atas/ssg-system-php, and links the GitHub Action and Docker image as separate repositories.
