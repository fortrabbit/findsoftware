---
id: qgoda
name: Qgoda
urls:
  home: https://www.qgoda.net/
  repository: https://github.com/gflohr/qgoda
  docs: https://www.qgoda.net/en/docs/
category:
  - ssg
description: Static site generator with arbitrary taxonomies and built-in multilanguage support through gettext and po files.
status: active
maintainer: cantanea EOOD
maintainerType: company
firstRelease: 2018
hqCountry: BG
hosting:
  - static
templating: template toolkit
i18n: built in, using gettext and po files
runsAs:
  - static
renderingModes:
  - static
installMethod: homebrew, cpanm, git clone, docker
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "0"
latestReleaseDate: 2025-02-24
githubStargazers: 33
contributors: 3
social:
  x: https://twitter.com/qgoda_cms
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.qgoda.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/gflohr/qgoda
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.qgoda.net/en/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.qgoda.net/en/legal-disclosure/
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://www.qgoda.net/en/legal-disclosure/
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.qgoda.net/en/legal-disclosure/
    checkedAt: 2026-10-23
  - field: category
    url: https://www.qgoda.net/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://www.qgoda.net/
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/gflohr/qgoda/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.qgoda.net/en/docs/installation/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://www.qgoda.net/en/docs/web-server/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.qgoda.net/en/docs/web-server/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/gflohr/qgoda/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/gflohr/qgoda/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/gflohr/qgoda/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/gflohr/qgoda/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/gflohr/qgoda/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gflohr/qgoda
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gflohr/qgoda/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Qgoda is a static site generator for multilanguage sites with arbitrary taxonomies. Content is written in Markdown, and listings and filters can use as many taxonomies as the author defines, not only tags and categories. The Template Toolkit wraps each page, and translations use gettext and po files.

Qgoda is written in Perl. It copies files from the source directory into a `_site` folder, and the rendered output is static files that almost any web server can serve. It installs through Homebrew, from a Git checkout with `cpanm`, or as a Docker image. Node.js is optional, and the official themes use Yarn.

## Worth knowing

The installation guide says the CPAN release is outdated and should not be used. The README describes Qgoda as ready for beta testing and says incompatible changes are possible.

The [installation guide](https://www.qgoda.net/en/docs/installation/) and the [web server guide](https://www.qgoda.net/en/docs/web-server/) cover setup and deployment.
