---
id: adnanh-webhook
name: webhook
urls:
  repository: https://github.com/adnanh/webhook
  docs: https://github.com/adnanh/webhook
  plugins: https://github.com/adnanh/webhook-contrib
category:
  - backend
description: Go server that exposes HTTP hooks and runs configured shell commands when a request matches a hook's rules.
status: active
maintainer: Adnan Hajdarevic
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source-build
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-02-12
githubStargazers: 12201
contributors: 60
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/adnanh/webhook/releases/tag/1.0.4
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/adnanh/webhook/blob/2.8.3/go.mod
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/adnanh/webhook/releases/tag/2.8.3
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/adnanh/webhook/releases/tag/2.8.3
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/adnanh/webhook
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

webhook is a Go program that serves HTTP endpoints, called hooks, and runs a configured command when a request matches the rules for that hook. Adnan Hajdarevic maintains the project under the MIT license.

The server listens on a TCP port or a Unix domain socket, can serve https with a flag, and can run behind a reverse proxy or under systemd socket activation. The README gives a GitHub push example, where a hook runs a redeploy script on a staging server. Install routes named in the README include snap, apt and FreeBSD packages, prebuilt binaries from the GitHub releases, and a build from source.

## Worth knowing

A hook without a trigger rule can be called by anyone who knows its endpoint, so the README points to the hook rules for restricting it. The README lists community-made Docker images, which the project does not publish itself.
