---
id: magallanes
name: Magallanes
urls:
  home: https://www.magephp.com/
  repository: https://github.com/andres-montanez/Magallanes
  docs: https://www.magephp.com/
category:
  - dev-tool
description: Deployment tool written in PHP that deploys PHP applications to SSH hosts and runs tasks before and after each deployment.
status: stub
maintainer: Andrés Montañez
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
runtimeMin: php 8.0
runsAs:
  - local
installMethod: composer require-dev, then vendor/bin/mage
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2022-04-15
githubStargazers: 687
packagistDownloads: 1171064
contributors: 13
social:
  x: https://www.twitter.com/magephp
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.magephp.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/andres-montanez/Magallanes
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.magephp.com/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/andres-montanez/Magallanes/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/andres-montanez/Magallanes
    checkedAt: 2026-10-28
  - field: category
    url: https://www.magephp.com/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/andres-montanez/Magallanes/5.0.0/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/andres-montanez/Magallanes/5.0.0/composer.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.magephp.com/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.magephp.com/
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/andres-montanez/Magallanes/5.0.0/composer.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/andres-montanez/Magallanes/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/andres-montanez/Magallanes/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/andres-montanez/Magallanes/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/andres-montanez/Magallanes/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/andres-montanez/Magallanes
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/andres-montanez/Magallanes/contributors
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/andres-montanez/magallanes.json
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
npmWeeklyDownloads: null
---

Magallanes is a deployment tool for PHP applications, written in PHP. It is added to a project as a Composer dev dependency and run from a terminal as `bin/mage deploy` followed by an environment name. The project's `.mage.yml` file defines each environment: the SSH user, the target folder, the hosts, and the tasks to run at each deployment stage, such as installing vendors or warming a cache. Code reaches the hosts through Tar or Rsync over SSH, and when releases are enabled the previous deployments stay on the hosts for rollback.

Built-in tasks cover Git, Composer, Symfony, file system operations and command execution, and the project's documentation describes how to write custom tasks.

## Worth knowing

A global Composer install cannot use custom tasks, because the application's autoloader is not loaded.
