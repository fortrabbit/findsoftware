---
id: leaf
name: Leaf
urls:
  home: https://leafphp.dev
  repository: https://github.com/leafsphp/leaf
  docs: https://leafphp.dev/docs/
  plugins: https://leafphp.dev/docs/modules
category:
  - framework
description: PHP framework for web applications and APIs that starts with routing and grows through installable modules.
status: active
maintainer: Michael Darko
maintainerType: community
firstRelease: 2019
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - database
databases:
  - mysql
  - postgres
  - sqlite
  - mariadb
  - sqlserver
adminUi: false
templating: blade, bareui, inertia-react, inertia-vue, inertia-svelte
i18n: Leaf Lingo module, translations from YAML files
runsAs:
  - per-request
renderingModes:
  - server
installMethod: leaf CLI (leaf create), composer require leafs/leaf
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-16
githubStargazers: 1324
contributors: 15
pluginCount: 25
social:
  x: https://x.com/leafphp
  discord: https://discord.gg/Pkrm9NJPE3
  forum: https://github.com/leafsphp/leaf/discussions
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/leafsphp/leaf
    checkedAt: 2026-10-18
  - field: urls
    url: https://packagist.org/packages/leafs/leaf
    checkedAt: 2026-10-18
  - field: urls
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://packagist.org/packages/leafs/leaf
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://leafphp.dev/community/team
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: category
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/leafsphp/leaf
    checkedAt: 2026-10-18
  - field: runtime
    url: https://leafphp.dev/docs/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/leafs/leaf.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://leafphp.dev/docs/
    checkedAt: 2026-10-18
  - field: databases
    url: https://leafphp.dev/docs/database/
    checkedAt: 2026-10-18
  - field: databases
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://leafphp.dev/docs/database/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://leafphp.dev/docs/mvc/scaffolds
    checkedAt: 2026-10-18
  - field: templating
    url: https://leafphp.dev/docs/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://leafphp.dev/docs/utils/lingo
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://leafphp.dev/learn/deployment/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://leafphp.dev/docs/cli/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/leafsphp/leaf
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/leafsphp/leaf
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/leafsphp/leaf/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/leafsphp/leaf
    checkedAt: 2026-10-18
  - field: contributors
    url: https://github.com/leafsphp/leaf/graphs/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://leafphp.dev/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://leafphp.dev/
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Leaf is a PHP framework for web applications and APIs. It starts with routing and adds features through installable modules, which the module directory lists. The Leaf CLI creates new projects from a set of starters. The project credits one creator, Michael Darko, and is funded through Open Collective, with no company named.

## Worth knowing

The web server needs a URL rewrite to index.php, and queues need a worker running under a process manager. No official Docker image is published; the Leaf CLI generates a Dockerfile for a new project.
