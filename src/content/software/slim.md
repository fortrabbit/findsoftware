---
id: slim
name: Slim
urls:
  home: https://www.slimframework.com
  repository: https://github.com/slimphp/Slim
  docs: https://www.slimframework.com/docs/v4/
category:
  - framework
description: PHP micro framework for web applications and APIs built around a router, middleware and PSR-7 HTTP messages.
status: active
maintainer: Josh Lockhart, Andrew Smith, Rob Allen, Pierre Bérubé, Slim Framework Team
maintainerType: community
firstRelease: 2012
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
templating: twig (Twig-View), php (PHP-View)
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project slim/slim-skeleton, composer require slim/slim
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-09-01
githubStargazers: 12276
contributors: 227
social:
  forum: https://discourse.slimframework.com/
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/slimphp/Slim
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/slim/slim
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://packagist.org/packages/slim/slim
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: category
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/slimphp/Slim
    checkedAt: 2026-10-18
  - field: runtime
    url: https://www.slimframework.com/docs/v4/start/installation.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/slim/slim.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://www.slimframework.com/docs/v4/start/installation.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.slimframework.com/docs/v4/features/templates.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.slimframework.com/docs/v4/start/web-servers.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://www.slimframework.com/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/slimphp/Slim
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/slimphp/Slim
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/slimphp/Slim/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/slimphp/Slim
    checkedAt: 2026-10-18
  - field: contributors
    url: https://github.com/slimphp/Slim/graphs/contributors
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://www.slimframework.com/docs/v4/start/installation.html
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Slim is a PHP micro framework for web applications and APIs, built around a router, middleware and PSR-7 HTTP messages. It has no view layer of its own. Templates come from Twig-View or the PHP-View package, and any PSR-7 implementation can supply the message objects. Slim ships no database layer; the docs carry a Doctrine cookbook entry.

Applications run behind a web server with URL rewriting. A new project starts from the skeleton package. The [documentation](https://www.slimframework.com/docs/v4/) covers a dedicated server and shared hosting with Apache.
