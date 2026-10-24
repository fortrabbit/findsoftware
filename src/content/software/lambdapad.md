---
id: lambdapad
name: Lambda Pad
urls:
  repository: https://github.com/gar1t/lambdapad
  docs: https://github.com/gar1t/lambdapad/tree/master/docs
category:
  - ssg
description: Erlang static site generator that builds a site from an index module, data loaders and Django templates.
status: stub
maintainer: gar1t
maintainerType: individual
runtime:
  - beam
hosting:
  - static
contentStore:
  - flat-file
templating: django
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: git clone, then make
licenseModel: open-source
license: Apache-2.0
githubStargazers: 125
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://lambdapad.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/gar1t/lambdapad
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/front-page.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/front-page.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/front-page.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/gar1t/lambdapad
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/gar1t/lambdapad/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gar1t/lambdapad
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gar1t/lambdapad/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/gar1t/lambdapad/blob/master/docs/articles/getting-started.md
    checkedAt: 2026-10-23
ai: authored
---

Lambda Pad is a static site generator written in Erlang. A site is defined by an Erlang module, which loads its data from plain-text files such as Markdown and JSON in the project and generates the site with Django templates. Running `lpad-gen` in the project directory builds the site. The repository's docs folder holds the documentation, including a getting-started page that describes cloning the repository and running make.

## Worth knowing

The project's own website no longer serves the software: its address shows a page saying the site has been stopped. The documentation is in the repository's docs folder. Building it needs a non-Windows system with a configure and make environment.
