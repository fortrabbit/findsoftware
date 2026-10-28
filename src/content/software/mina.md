---
id: mina
name: Mina
urls:
  home: https://nadarei.co/mina/
  repository: https://github.com/mina-deploy/mina
  docs: https://github.com/mina-deploy/mina/tree/master/docs
  plugins: https://github.com/mina-deploy/mina/blob/master/docs/3rd_party_plugins.md
category:
  - dev-tool
description: Ruby deployment tool that generates a deploy Bash script and runs it on a server over one SSH session.
status: active
maintainer: Infinum d.o.o. za računalne djelatnosti i usluge
firstRelease: 2012
hqCountry: HR
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.0
runsAs:
  - local
installMethod: gem install mina
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-10-03
githubStargazers: 4349
contributors: 106
social:
  x: https://twitter.com/infinum
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://nadarei.co/mina/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/mina-deploy/mina
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/Readme.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/Readme.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mina-deploy/mina
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/docs/getting_started.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/mina-deploy/mina/v1.2.5/Readme.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/docs/getting_started.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/mina-deploy/mina/v1.2.5/Readme.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/docs/3rd_party_plugins.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/mina-deploy/mina/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://infinum.com/legal/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://infinum.com/legal/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/mina.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mina-deploy/mina/releases?per_page=100
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mina-deploy/mina/releases?per_page=100
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mina-deploy/mina
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mina-deploy/mina/contributors?per_page=1
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
packagistDownloads: null
npmWeeklyDownloads: null
---

Mina is a deployment tool for Ruby projects. For each deploy, the tool generates a Bash script and runs it on the server over a single SSH session, so the server needs SSH key access, git, Ruby and Bundler in place before the first deploy.

The setup and deploy commands are run from the developer's own computer, which connects to the server to create the folders and then runs the deploy task.

## Worth knowing

The project's own list of third-party modules says many of them are not updated to version 1.x.
