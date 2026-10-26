---
id: soupault
name: soupault
urls:
  home: https://soupault.net
  repository: https://github.com/PataphysicalSociety/soupault
  docs: https://soupault.net/reference-manual/
category:
  - ssg
description: HTML manipulation tool that works as a static site generator or as a post-processor for existing websites.
status: active
maintainer: Daniil Baturin et al.
firstRelease: 2019
language: ocaml
runtime:
  - binary
hosting:
  - static
templating: jingoo
runsAs:
  - static
renderingModes:
  - static
installMethod: binary download, opam
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-04-21
githubStargazers: 431
contributors: 11
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://soupault.net
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/PataphysicalSociety/soupault
    checkedAt: 2026-10-23
  - field: urls
    url: https://soupault.net/reference-manual/
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/PataphysicalSociety/soupault/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/PataphysicalSociety/soupault/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://soupault.net/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/PataphysicalSociety/soupault
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/PataphysicalSociety/soupault/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://soupault.net/tips-and-tricks/faq/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/PataphysicalSociety/soupault/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://soupault.net/install/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/PataphysicalSociety/soupault/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/PataphysicalSociety/soupault/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/PataphysicalSociety/soupault/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/PataphysicalSociety/soupault/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/PataphysicalSociety/soupault/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/PataphysicalSociety/soupault
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/PataphysicalSociety/soupault/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Soupault is an HTML manipulation tool that works on the element tree of each page. The project describes it as a static website generator or as an HTML post-processor for existing websites. Pages are assembled by inserting content into an element chosen with a CSS selector, and metadata is extracted from the HTML with CSS selectors instead of front matter.

Other page formats go through external preprocessors, and Lua plugins extend the build. The built-in template processor is used for index rendering. The reference manual is published at soupault.net.

The project ships standalone binaries for several platforms and publishes the package through OPAM, the OCaml package manager.
