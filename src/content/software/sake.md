---
id: sake
name: Sake
urls:
  repository: https://github.com/williamd1k0/sake
  docs: https://github.com/williamd1k0/sake/blob/main/README.md
category:
  - ssg
description: Static site generator that runs from a Makefile, with Jinja2 templates and YAML site and custom data.
status: active
maintainer: William Tumeo
maintainerType: individual
runtime:
  - python
contentStore:
  - flat-file
templating: jinja2
runsAs:
  - local
renderingModes:
  - static
installMethod: copy or link the Makefile into the project, then make init
license: Do-License
githubStargazers: 6
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/williamd1k0/sake
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/williamd1k0/sake/main/LICENSE
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/williamd1k0/sake/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/williamd1k0/sake/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/williamd1k0/sake/main/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/williamd1k0/sake
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/williamd1k0/sake/contributors
    checkedAt: 2026-10-23
ai: authored
---

Sake is a static site generator that runs from a Makefile. Its build is driven by make and its templates are rendered with Jinja2, so the Makefile is copied or linked into a project and run there. Site and custom data are written as YAML, and the generated files are written to an output folder.

## Worth knowing

The build needs make and the Jinja2 command line tool installed on the machine that runs it. The repository has no release or tag, so the default branch is the only version to read.
