---
id: codeigniter
name: CodeIgniter
urls:
  home: https://codeigniter.com/
  repository: https://github.com/codeigniter4/CodeIgniter4
  docs: https://codeigniter.com/user_guide/
category:
  - framework
description: PHP MVC web framework with a small footprint and few configuration requirements.
status: active
maintainer: CodeIgniter Foundation
maintainerType: foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
  - oracle
templating: php, view parser
i18n: yes
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project codeigniter4/appstarter, manual download
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-09
githubStargazers: 5988
social:
  x: https://twitter.com/CodeIgniterPhp
  forum: https://forum.codeigniter.com
wikidata: Q339829
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://codeigniter.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: urls
    url: https://codeigniter.com/user_guide/intro/requirements.html
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://codeigniter.com/user_guide/intro/credits.html
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://codeigniter.com/user_guide/intro/credits.html
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q339829
    checkedAt: 2026-10-18
  - field: category
    url: https://codeigniter.com
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: runtime
    url: https://codeigniter.com/user_guide/intro/requirements.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/codeigniter4/framework.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://codeigniter.com/user_guide/intro/requirements.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://codeigniter.com/user_guide/intro/requirements.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://codeigniter.com/user_guide/outgoing/view_parser.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://codeigniter.com/user_guide/outgoing/localization.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://codeigniter.com
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://codeigniter.com/user_guide/installation/installing_composer.html
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/codeigniter4/CodeIgniter4/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/codeigniter4/CodeIgniter4
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://codeigniter.com/user_guide/installation/installing_composer.html
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

CodeIgniter is a PHP MVC framework for building web applications. New projects start from the appstarter template. The deployment guide recommends setting the document root to the application's `public` folder, which keeps the rest of the code out of the web root. Templates are plain PHP files or use the framework's view parser. The CodeIgniter Foundation has managed the project since 2019, after the framework was developed at EllisLab and later acquired by the British Columbia Institute of Technology. An experimental worker mode on FrankenPHP is documented.

## Worth knowing

Only the latest version is maintained, so older releases receive no fixes.
