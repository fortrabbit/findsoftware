---
id: emanote
name: emanote
urls:
  home: https://emanote.srid.ca
  repository: https://github.com/srid/emanote
  docs: https://emanote.srid.ca/start
category:
  - ssg
description: Tool that renders plain-text notes as a website, with a live preview server while editing.
status: active
maintainer: Sridhar Ratnakumar
maintainerType: individual
firstRelease: 2022
runtime:
  - binary
hosting:
  - static
basedOn:
  - ema
contentStore:
  - flat-file
templating: heist
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: nix profile install
licenseModel: open-source
license: AGPL-3.0-or-later, AGPL-3.0-only
currentMajor: "1"
latestReleaseDate: 2025-08-19
githubStargazers: 965
contributors: 25
social:
  forum: https://github.com/srid/emanote/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://emanote.srid.ca
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/srid/emanote
    checkedAt: 2026-10-23
  - field: urls
    url: https://emanote.srid.ca/start
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://hackage.haskell.org/package/emanote
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/srid/emanote/blob/master/emanote/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://ema.srid.ca
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/srid/emanote/blob/master/emanote/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://emanote.srid.ca/install
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://emanote.srid.ca/install
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://emanote.srid.ca/start
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://emanote.srid.ca/start
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/srid/emanote/blob/master/emanote/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/srid/emanote/blob/master/emanote/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://hackage.haskell.org/package/emanote
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/srid/emanote/blob/master/emanote/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://emanote.srid.ca/theme
    checkedAt: 2026-10-23
  - field: i18n
    url: https://emanote.srid.ca/config
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/srid/emanote/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/srid/emanote/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/srid/emanote/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/srid/emanote
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/srid/emanote/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Emanote renders a folder of plain-text notes as a website. A live server updates the preview while the notes are edited, and a separate command writes the HTML files for deployment. Output is customized through Heist templates. It is built on Ema, and the project describes itself as the spiritual successor to neuron, with a migration guide from neuron. It is written in Haskell and installed with Nix, following the [installation guide](https://emanote.srid.ca/install).

The [getting-started page](https://emanote.srid.ca/start) links a template repository that includes a GitHub Pages workflow for static site deployment.

## Worth knowing

The install page says the nixpkgs package is out of date and that the author is prohibited from updating it, and it advises against using that package.
