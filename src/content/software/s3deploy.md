---
id: s3deploy
name: s3deploy
urls:
  repository: https://github.com/bep/s3deploy
  docs: https://github.com/bep/s3deploy/blob/master/README.md
category:
  - dev-tool
description: Command-line tool that uploads a static website to Amazon S3 and CloudFront, comparing ETag hashes so that only changed files are sent.
status: active
maintainer: Bjørn Erik Pedersen
maintainerType: individual
firstRelease: 2017
language: go
runtime:
  - binary
runsAs:
  - local
installMethod: download pre-built binaries from GitHub releases
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-09
githubStargazers: 551
contributors: 14
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/bep/s3deploy
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/bep/s3deploy/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/bep/s3deploy
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/bep/s3deploy/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/bep/s3deploy/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/bep/s3deploy/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/bep/s3deploy/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/bep/s3deploy/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/bep/s3deploy
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/bep/s3deploy/contributors
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
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

s3deploy is a command-line tool, written in Go, that uploads a static website to an Amazon S3 bucket and can invalidate the cache of a CloudFront distribution. It compares the ETag hash of each local file with the object already in the bucket and uploads only the files that changed. The README suggests running it from a continuous integration job, and the same command runs on a developer's machine.

## Worth knowing

CloudFront cache invalidation runs only when a distribution ID is supplied, and the README says the AWS user must then have the access rights that the invalidation needs. The Homebrew install is a cask that needs sudo.
