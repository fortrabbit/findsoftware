---
id: franklin
name: Franklin
urls:
  home: https://franklinjl.org
  repository: https://github.com/JuliaDocs/Franklin.jl
  docs: https://franklinjl.org/
category:
  - ssg
description: Static site generator written in Julia, oriented towards technical blogging and light pages.
status: active
maintainer: Thibaut Lienart
firstRelease: 2019
language: other
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Julia package manager (Pkg add Franklin)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-10-14
githubStargazers: 1072
contributors: 73
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl
    checkedAt: 2026-10-23
  - field: urls
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl
    checkedAt: 2026-10-23
  - field: category
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://franklinjl.org/workflow/deploy/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://franklinjl.org/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/JuliaDocs/Franklin.jl/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Franklin is a static site generator written in Julia, oriented towards technical blogging. It is installed through Julia's package manager. The command optimize() prepares the __site folder, and its contents can then be copied to any existing web server. A local server started by Franklin shows the site as it is edited. Thibaut Lienart maintains the project, which is hosted in the JuliaDocs organization on GitHub.

## Worth knowing

The optional extras need python3 and node.js for minification and pre-rendering. The project's homepage says these can be ignored, and that deploying through GitHub will likely still work without them.
