---
id: yass
name: YASS
urls:
  home: https://www.yass.website/
  repository: https://github.com/yet-another-static-site-generator/yass
  docs: https://www.yass.website/docs/user/index.html
category:
  - ssg
description: Static site generator written in Ada that builds a site from Markdown files and HTML templates, run from the console.
status: active
maintainer: AJ Ianozi
firstRelease: 2019
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
adminUi: false
templating: ada-web-server-templates
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: GPL-3.0
currentMajor: "3"
latestReleaseDate: 2024-08-24
githubStargazers: 27
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.yass.website/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/yet-another-static-site-generator/yass
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/alire.toml
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.yass.website/
    checkedAt: 2026-10-23
  - field: category
    url: https://www.yass.website/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/details.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/changes.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/details.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/details.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/details.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/yet-another-static-site-generator/yass/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/yet-another-static-site-generator/yass/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/yet-another-static-site-generator/yass/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/yet-another-static-site-generator/yass
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/yet-another-static-site-generator/yass/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

YASS is a static site generator written in Ada and run from the console. It has no user interface. It converts Markdown files in a project directory to HTML, fills Ada Web Server templates, and writes the site to an output directory. A server mode serves the output on localhost for preview and regenerates changed files. Sitemaps and Atom feeds are generated when enabled.

The program is distributed as a release binary, and it can be built from source with Alire or gprbuild. The [installation page](https://raw.githubusercontent.com/yet-another-static-site-generator/yass/master/docs/user/installation.md) lists the libcmark library as a requirement.
