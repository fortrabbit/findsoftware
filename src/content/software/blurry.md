---
id: blurry
name: Blurry
urls:
  home: https://blurry-docs.netlify.app/
  repository: https://github.com/blurry-dev/blurry
  docs: https://blurry-docs.netlify.app/
category:
  - ssg
description: Python static site generator that builds Schema.org-annotated Markdown content and Jinja templates into a site focused on SEO and page speed.
status: active
maintainer: John Franey
firstRelease: 2023
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.11
contentStore:
  - flat-file
templating: jinja
runsAs:
  - static
renderingModes:
  - static
installMethod: pip install blurry-cli
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-13
githubStargazers: 36
contributors: 5
ecosystemsMonthlyDownloads: 363
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://blurry-docs.netlify.app/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/blurry-dev/blurry
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/blurry-dev/blurry/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/blurry-dev/blurry
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/getting-started/quick-start.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/getting-started/quick-start.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/deploying/index.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/getting-started/quick-start.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/deploying/index.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/docs/content/getting-started/quick-start.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/blurry-dev/blurry/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/blurry-dev/blurry/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/blurry-dev/blurry/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/blurry-dev/blurry/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/blurry-dev/blurry
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/blurry-dev/blurry/contributors
    checkedAt: 2026-10-23
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/blurry-cli
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Blurry is a static site generator written in Python, described by its project as a static site generator for SEO and page speed. Pages are Markdown files in a `content` directory, and Jinja templates generate the HTML. The build writes the site to a `dist` folder by default. The project is installed from PyPI as `blurry-cli`, and `blurry runserver` starts a local development server. The [documentation site](https://blurry-docs.netlify.app/) is the project's homepage.

## Worth knowing

Until version 1.0.0, minor versions may break compatibility, as the README states. The project's documentation describes the output as a static site that can be deployed to any hosting provider.
