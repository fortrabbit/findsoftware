---
id: staticman
name: Staticman
urls:
  home: https://best.staticman.net/
  repository: https://github.com/eduardoboucas/staticman
  docs: https://best.staticman.net/docs/
category:
  - community
description: Node.js web service that accepts form submissions from static sites and commits them as data files to a GitHub or GitLab repository.
status: stub
maintainer: Eduardo Bouças
maintainerType: individual
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 14
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-12-23
githubStargazers: 2449
contributors: 31
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://best.staticman.net/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/eduardoboucas/staticman
    checkedAt: 2026-11-03
  - field: urls
    url: https://best.staticman.net/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/eduardoboucas/staticman/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/eduardoboucas/staticman
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/eduardoboucas/staticman/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/eduardoboucas/staticman/blob/v1.7.1/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/eduardoboucas/staticman/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/eduardoboucas/staticman/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/eduardoboucas/staticman/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/eduardoboucas/staticman/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://best.staticman.net/docs/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://best.staticman.net/docs/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/eduardoboucas/staticman/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://best.staticman.net/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/eduardoboucas/staticman/releases/tags/v1.0.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/eduardoboucas/staticman/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/eduardoboucas/staticman/commits/v1.7.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/eduardoboucas/staticman
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/eduardoboucas/staticman/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Staticman is a Node.js web service that receives form submissions from a static site, runs the validation and transformation the site owner configures, and commits the result as data files to a GitHub or GitLab repository. The site gets user-generated content such as blog comments, and the content ends up in the site's repository. The service exposes a [REST API](https://best.staticman.net/docs/) that accepts the submissions, and it can be run with npm, with Docker or on Heroku. The documentation covers spam handling and notifications.

## Worth knowing

The data lives in a GitHub or GitLab repository the site owner chose, so the site depends on that service as well as on the Staticman instance. The homepage says the project is supported by the work of volunteers.
