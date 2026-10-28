---
id: wp-env
name: "@wordpress/env"
urls:
  home: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
  repository: https://github.com/WordPress/gutenberg
  docs: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
category:
  - dev-tool
description: Command-line tool that sets up a local WordPress environment for building and testing plugins and themes, Docker-based by default, published from the Gutenberg monorepo.
status: active
maintainer: WordPress
firstRelease: 2019
language: javascript
runtime:
  - node
runtimeMin: node 22
basedOn:
  - wordpress
runsAs:
  - local
installMethod: npm global
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "12"
latestReleaseDate: 2026-10-20
githubStargazers: 11776
npmWeeklyDownloads: 103332
contributors: 438
dependentRepos: 565
dependentPackages: 14
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: urls
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/WordPress/gutenberg/trunk/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/env@12.0.0/packages/env/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/env@12.0.0/packages/env/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/env@12.0.0/packages/env/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/env@12.0.0/packages/env/package.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@wordpress/env
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/WordPress/gutenberg/git/refs/tags/@wordpress/env@12.0.0
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/WordPress/gutenberg/git/refs/tags/@wordpress/env@12.0.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/WordPress/gutenberg/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@wordpress/env
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40wordpress%2Fenv
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40wordpress%2Fenv
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

wp-env is a command-line tool that starts a local WordPress environment for building and testing plugins and themes without manual setup. It runs WordPress with Docker by default, and it links the plugins, themes and mappings from the project into the environment's work directory, so file changes show up there. The package is published from the Gutenberg monorepo and maintained within the WordPress project.

## Worth knowing

The Docker runtime needs Docker running. Two runtimes need no Docker: PHP, which uses the PHP installed on the computer with SQLite, and Playground, which runs WordPress in WebAssembly. The docs label both non-Docker runtimes experimental, and the Docker runtime uses MySQL where they use SQLite.
