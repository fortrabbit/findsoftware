---
id: neuron
name: neuron
urls:
  home: https://neuron.zettel.page/
  repository: https://github.com/srid/neuron
  docs: https://neuron.zettel.page/install
category:
  - ssg
description: Haskell note-taking app for Zettelkasten-style plain-text notes that also publishes them as a static site.
status: stub
maintainer: Sridhar Ratnakumar
maintainerType: individual
firstRelease: 2020
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: Nix (nix-env from the repository archive)
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2021-08-11
githubStargazers: 1560
contributors: 50
social:
  forum: https://github.com/srid/neuron/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://neuron.zettel.page/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/srid/neuron
    checkedAt: 2026-10-23
  - field: urls
    url: https://neuron.zettel.page/install
    checkedAt: 2026-10-23
  - field: category
    url: https://neuron.zettel.page/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/srid/neuron/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://neuron.zettel.page/install
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/srid/neuron/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/srid/neuron
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/srid/neuron/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/srid/neuron/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/srid/neuron/releases
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/srid/neuron/releases/tags/0.2.0.0
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/srid/neuron/contributors
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/srid/neuron
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://neuron.zettel.page/install
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://neuron.zettel.page/docker
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/srid/neuron/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://hackage.haskell.org/package/neuron
    checkedAt: 2026-10-23
ai: authored
---

neuron is a Haskell app for managing plain-text notes in Zettelkasten style, which it can also publish as a static site. The README describes a directory of markdown files, linking syntax, hierarchical tagging and editor integrations. The gen command generates and serves the static site, and the README points to a template repository for publishing with GitHub Pages.

The app installs through Nix or runs from a Docker image.

## Worth knowing

The homepage says neuron will soon be superseded by a successor, and the README names Emanote as that successor. Both pages still describe neuron as the app to install.
