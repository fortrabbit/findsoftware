---
id: bulletphp
name: Bullet
urls:
  repository: https://github.com/vlucas/bulletphp
  docs: https://github.com/vlucas/bulletphp/blob/master/README.md
category:
  - framework
description: PHP micro-framework that routes HTTP requests one URI path segment at a time, using nested callbacks.
status: stub
maintainer: Vance Lucas
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.6
runsAs:
  - per-request
installMethod: composer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2021-05-28
githubStargazers: 415
packagistDownloads: 50162
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/vlucas/bulletphp
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/vlucas/bulletphp/blob/master/README.md
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/vlucas/bulletphp.json
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/vlucas/bulletphp/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/vlucas/bulletphp
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/vlucas/bulletphp/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/vlucas/bulletphp.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/vlucas/bulletphp/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/vlucas/bulletphp/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/vlucas/bulletphp
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/vlucas/bulletphp.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/vlucas/bulletphp.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/vlucas/bulletphp
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/vlucas/bulletphp.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Bullet is a PHP micro-framework that builds applications around HTTP URIs and defined paths. Its router handles one path segment at a time: static segments are declared with `path`, variable segments with `param`, and HTTP method handlers sit inside the path they belong to. The homepage describes it as built for REST APIs and web applications, and the README says a Bullet application can sit under an existing web app to serve an API or dynamic pages.

Requests reach the application through PHP: the README's Apache setup passes every request that is not an existing file or directory to `index.php`. The project is installed with Composer.

## Worth knowing

The README opens with a section titled "PROJECT MAINTENANCE RESUMES", which says Bullet becomes an active project again under a changing of the guard.
