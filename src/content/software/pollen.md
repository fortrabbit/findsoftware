---
id: pollen
name: Pollen
urls:
  repository: https://gitlab.com/mbutterick/pollen
  docs: https://docs.racket-lang.org/pollen/
category:
  - cms
description: Book-publishing system written in Racket that embeds code in text documents for multiple-output publishing.
status: active
maintainer: Matthew Butterick
maintainerType: individual
language: other
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: raco pkg install pollen
licenseModel: open-source
license: MIT
currentMajor: "3"
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mbutterick/pollen
    checkedAt: 2026-10-23
  - field: category
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.racket-lang.org/pollen/Installation.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.racket-lang.org/pollen/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.racket-lang.org/pollen/Installation.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.racket-lang.org/pollen/Installation.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://docs.racket-lang.org/pollen/Installation.html
    checkedAt: 2026-10-23
  - field: license
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://gitlab.com/mbutterick/pollen/-/raw/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mbutterick/pollen/tags
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pollen is a publishing system built on top of Scribble and Racket, aimed at web-based books. A document embeds Racket code in a text-based syntax, and the same source can produce output for more than one format. The [documentation](https://docs.racket-lang.org/pollen/) says projects generally compile down to a set of static files. The built-in project web server is a development and previewing tool and is not needed to deploy.

The project is developed on GitLab, and the [repository](https://gitlab.com/mbutterick/pollen) is the main one; a GitHub copy mirrors it. Pollen is installed with `raco pkg install pollen` on top of Racket, and `raco pollen render` renders source files.

## Worth knowing

The README says the project is actively developed, though the pace has slowed. Its author uses it to publish his own web-based books, which the README names.
