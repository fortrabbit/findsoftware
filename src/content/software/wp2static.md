---
id: wp2static
name: WP2Static
urls:
  repository: https://github.com/elementor/wp2static
category:
  - ssg
description: WordPress plugin that generates a static copy of a WordPress site and deploys it.
status: active
maintainer: Strattic
language: php
runtime:
  - php
runtimeMin: php 7.4
basedOn:
  - wordpress
renderingModes:
  - static
installMethod: git clone with composer install
licenseModel: open-source
license: Unlicense
currentMajor: "7"
latestReleaseDate: 2023-01-31
githubStargazers: 1471
packagistDownloads: 3147
contributors: 47
packagistMonthlyDownloads: 29
dependentRepos: 3
social:
  forum: https://staticword.press/c/wordpress-static-site-generators/wp2static/
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://api.github.com/repos/elementor/wp2static
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/elementor/wp2static
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/elementor/wp2static/blob/7.2/composer.json
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/elementor/wp2static/blob/7.2/composer.json
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/elementor/wp2static/blob/develop/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/elementor/wp2static
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/elementor/wp2static/blob/develop/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/elementor/wp2static/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/elementor/wp2static/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/elementor/wp2static
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/elementor/wp2static/contributors?anon=true&per_page=1
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/leonstafford/wp2static.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/leonstafford%2Fwp2static
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/leonstafford/wp2static/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

WP2Static adds static site generation and deployment to WordPress as a plugin, so it needs a WordPress install to run. Its source is in the [elementor/wp2static repository](https://github.com/elementor/wp2static) on GitHub. The README says Strattic keeps the plugin available and maintained for open source users, and lists three ways to install it: a git clone followed by `composer install`, `composer require`, or an installer zip.

## Worth knowing

The `composer require wp2static/wp2static` command in the README does not resolve on Packagist, where the package is listed as leonstafford/wp2static. The project's website and documentation did not respond when checked, so the install steps come from the README alone.
