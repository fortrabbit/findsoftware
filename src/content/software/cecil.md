---
id: cecil
name: Cecil
urls:
  home: https://cecil.app
  repository: https://github.com/Cecilapp/Cecil
  docs: https://cecil.app/documentation/
category:
  - ssg
description: PHP command-line static site generator that builds websites from Markdown pages and Twig templates.
status: active
maintainer: Arnaud Ligny
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - static
runtimeMin: php 8.3
contentStore:
  - flat-file
templating: twig
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: PHAR download, standalone binary, composer global require cecil/cecil
licenseModel: open-source
license: EUPL-1.2
currentMajor: "9"
latestReleaseDate: 2026-10-20
githubStargazers: 298
packagistDownloads: 921
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://cecil.app/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/Cecilapp/Cecil
    checkedAt: 2026-10-20
  - field: urls
    url: https://cecil.app/documentation/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://cecil.app/about/
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://cecil.app/about/
    checkedAt: 2026-10-20
  - field: category
    url: https://cecil.app/about/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/Cecilapp/Cecil
    checkedAt: 2026-10-20
  - field: runtime
    url: https://cecil.app/documentation/getting-started/installation/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://cecil.app/documentation/getting-started/installation/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://cecil.app/documentation/getting-started/installation/
    checkedAt: 2026-10-20
  - field: templating
    url: https://cecil.app/
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://cecil.app/
    checkedAt: 2026-10-20
  - field: i18n
    url: https://cecil.app/
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://cecil.app/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://cecil.app/documentation/deploy/static-hosting/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://cecil.app/documentation/deploy/continuous-deployment/
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/Cecilapp/Cecil
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/Cecilapp/Cecil/releases
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/Cecilapp/Cecil/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/Cecilapp/Cecil
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/cecil/cecil.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Cecil is a PHP command-line tool that merges Markdown pages, media and Twig templates into a static website. Content is stored as flat Markdown files with front matter, and the generator produces pagination, taxonomies, a sitemap, RSS feeds, robots.txt and redirects. Responsive images are converted to WebP and AVIF during the build. The first functional version was released in September 2013 under the name PHPoole.

Cecil runs as a PHAR file, as a standalone binary that embeds PHP, or as a Composer global install. The `serve` command uses PHP's built-in web server, which the standalone binary does not include. Without PHP, the site is built with the build command and served by another web server.

The [continuous deployment guide](https://cecil.app/documentation/deploy/continuous-deployment/) and the [static hosting guide](https://cecil.app/documentation/deploy/static-hosting/) describe two routes: uploading the built output to any static hosting service, or letting a CI service build the site on each change to a repository. The guide names GitHub Pages and GitLab CI as examples.

## Worth knowing

The standalone binaries are unsigned, so macOS users remove the quarantine attribute before the first run. The binary uses GD for image processing and has no self-update command, so a new version is installed by downloading the binary again.
