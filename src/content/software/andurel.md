---
id: andurel
name: Andurel
urls:
  home: https://andurel.com
  repository: https://github.com/mbvlabs/andurel
  docs: https://andurel.com/docs/latest/installation
category:
  - framework
description: Full-stack web framework for Go whose command-line tool generates application code, with server-rendered pages and optional Inertia frontends.
status: active
maintainer: Morten Vistisen
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
templating: templ
runsAs:
  - always-on
renderingModes:
  - server
installMethod: go install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-24
githubStargazers: 226
contributors: 5
social:
  x: https://x.com/mbvlabs
  discord: https://discord.gg/TnTBZHvat3
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/mbvlabs/andurel
    checkedAt: 2026-10-24
  - field: urls
    url: https://andurel.com
    checkedAt: 2026-10-24
  - field: urls
    url: https://andurel.com/docs/latest/installation
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/mbvlabs/andurel/blob/master/README.md
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/mbvlabs/andurel
    checkedAt: 2026-10-24
  - field: runtime
    url: https://andurel.com/docs/latest/installation
    checkedAt: 2026-10-24
  - field: category
    url: https://andurel.com/docs/latest/introduction
    checkedAt: 2026-10-24
  - field: databases
    url: https://andurel.com/docs/latest/database
    checkedAt: 2026-10-24
  - field: templating
    url: https://andurel.com/docs/latest/frontend-options
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://andurel.com/docs/latest/frontend-options
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://andurel.com/docs/latest/build-and-deploy
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://andurel.com/docs/latest/installation
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/mbvlabs/andurel
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/mbvlabs/andurel/blob/master/README.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://github.com/mbvlabs/andurel/releases/tag/v1.0.0
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://andurel.com/docs/latest/installation
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://github.com/mbvlabs/andurel/releases/tag/v1.5.5
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/mbvlabs/andurel
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/mbvlabs/andurel/contributors
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Go · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Andurel is a full-stack web framework for Go. Its command-line tool generates the application code, which stays in the project's repository, and the application runs as a server process with a graceful shutdown. The default frontend renders HTML with templ; Inertia with Vue, React or Svelte is optional. The database is PostgreSQL, and the command-line tool installs with go install.

## Worth knowing

The stable documentation states that Windows is not supported. The README on the master branch describes a v2 line with different defaults than the stable documentation, so the README and the documentation do not match.
