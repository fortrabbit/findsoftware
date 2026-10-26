---
id: refinery-cms
name: Refinery CMS
urls:
  repository: https://github.com/refinery/refinerycms
  docs: https://github.com/refinery/refinerycms/tree/main/doc/guides
category:
  - cms
description: Open source content management system built as a Ruby on Rails application, with a visual editor for site owners.
status: active
maintainer: Resolve Digital
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - rails
contentStore:
  - database
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
templating: erb
i18n: yes
runsAs:
  - always-on
installMethod: gem install refinerycms
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-05-11
githubStargazers: 3906
contributors: 333
social:
  x: https://twitter.com/refinerycms
  forum: https://groups.google.com/g/refinery-cms
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/refinery/refinerycms
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/refinery/refinerycms/blob/main/readme.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/refinery/refinerycms/main/license.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/refinery/refinerycms
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/1%20-%20Installation%20Prerequisites.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/1%20-%20Installation%20Prerequisites.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/refinerycms.json
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/refinery/refinerycms/blob/main/readme.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/2%20-%20Getting%20Started.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/7%20-%20Hosting%20and%20Deployment/4%20-%20Docker-deploy-to-DigitalOcean.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/2%20-%20Getting%20Started.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/1%20-%20Installation%20Prerequisites.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/1%20-%20Getting%20Started/2%20-%20Getting%20Started.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/refinery/refinerycms/blob/main/readme.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/2%20-%20Refinery%20Basics/7%20-%20Translate%20Refinery.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/refinery/refinerycms/blob/main/doc/guides/2%20-%20Refinery%20Basics/3%20-%20Overriding%20views.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/refinery/refinerycms
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/refinery/refinerycms/releases/tag/v4.1.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/refinery/refinerycms/releases/tag/v4.1.0
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/refinerycms.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/refinery/refinerycms
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/refinery/refinerycms/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Refinery CMS is an open source content management system built as a Ruby on Rails web application. It is installed as a RubyGems package. The back end offers a visual editor for pages, and site content is kept in a database, with SQLite as the default and MySQL and PostgreSQL as the other options named in the prerequisites guide. Templates are ERB views that a site can override.

## Worth knowing

The README says the project website is not currently live, and the repository's guides are the reference for installation and hosting. Some guides say they were written for earlier Refinery and Rails versions.

The Docker deployment guide runs the application as a container on a server, so it needs a long-running process on the host.
