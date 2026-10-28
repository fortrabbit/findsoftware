---
id: wordpress-scripts
name: "@wordpress/scripts"
urls:
  home: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
  repository: https://github.com/WordPress/gutenberg
  docs: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
category:
  - build-tool
  - dev-tool
  - testing
description: Command-line tool with build, lint, format and test scripts for WordPress block and plugin development, published from the Gutenberg monorepo.
status: active
maintainer: WordPress
firstRelease: 2018
language: javascript
runtime:
  - node
runtimeMin: node 22
basedOn:
  - wordpress
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "37"
latestReleaseDate: 2026-10-20
githubStargazers: 11776
npmWeeklyDownloads: 165761
contributors: 438
dependentRepos: 12470
dependentPackages: 107
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: urls
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/WordPress/gutenberg/trunk/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/scripts@37.0.0/packages/scripts/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/scripts@37.0.0/packages/scripts/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/scripts@37.0.0/packages/scripts/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/WordPress/gutenberg/@wordpress/scripts@37.0.0/packages/scripts/package.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@wordpress/scripts
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/WordPress/gutenberg/git/refs/tags/@wordpress/scripts@37.0.0
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/WordPress/gutenberg/git/refs/tags/@wordpress/scripts@37.0.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/WordPress/gutenberg
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/WordPress/gutenberg/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@wordpress/scripts
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40wordpress%2Fscripts
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40wordpress%2Fscripts
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

@wordpress/scripts is an npm package that gives WordPress block and plugin projects a set of command-line scripts for building, linting, formatting and testing. Its wp-scripts binary runs the build and dev server with a default configuration the package supplies, and a project can replace that with its own webpack config. The package is published from the Gutenberg monorepo and is maintained within the WordPress project.

## Worth knowing

The docs ask for a Node.js version with long-term support status and say the package is not compatible with older versions. Its releases are tags inside the Gutenberg repository, not separate GitHub releases, so the version shown on the record is the package's own tag.
