---
id: phpdocumentor
name: phpDocumentor
urls:
  home: https://www.phpdoc.org
  repository: https://github.com/phpDocumentor/phpDocumentor
  docs: https://docs.phpdoc.org/
category:
  - ssg
description: Documentation generator that reads PHP source code and DocBlock comments and produces API documentation.
status: active
maintainer: Mike van Riel
maintainerType: individual
language: php
runtime:
  - php
runtimeMin: php 8.1
templating: twig
runsAs:
  - local
renderingModes:
  - static
installMethod: phive
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-05-13
githubStargazers: 4349
packagistDownloads: 3172755
contributors: 209
packagistMonthlyDownloads: 14041
dependentRepos: 16161
dependentPackages: 1362
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://www.phpdoc.org
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: maintainerType
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://docs.phpdoc.org/guide/getting-started/generating-documentation.html
    checkedAt: 2026-10-21
  - field: templating
    url: https://docs.phpdoc.org/guide/features/theming/index.html
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://www.phpdoc.org
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/phpDocumentor/phpDocumentor/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/phpDocumentor/phpDocumentor/contributors
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/phpdocumentor/phpdocumentor.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/phpdocumentor/phpdocumentor.json
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/phpdocumentor%2Fphpdocumentor
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/phpdocumentor%2Fphpdocumentor
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/phpdocumentor/phpdocumentor/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

phpDocumentor is a documentation generator for PHP projects. It analyzes PHP source code and its DocBlock comments, then writes a website of API documentation to a folder, using Twig templates. It can also draw UML class diagrams with PlantUML or GraphViz, and it reads reStructuredText and Markdown.

It runs as a command-line tool on a developer's machine or in a CI pipeline.

## Worth knowing

The docs state that the Twig templates are not covered by Semantic Versioning. The README says the project does not endorse or actively support installing through Composer.
